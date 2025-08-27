import React, {
  memo,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { companies } from '@/data/portfolio';
import { animationConfig } from '@/config/animations';
import styles from './LogoScroll.module.css';

const LogoScroll: React.FC = memo(() => {
  const [isHovered, setIsHovered] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  // Memoized infinite scroll calculations for optimal performance
  const { tripleCompanies, singleSetWidth, speed } = useMemo(() => {
    const triple = [...companies, ...companies, ...companies];
    const itemWidth = 120 + animationConfig.scroll.logoScroll.gap;
    const width = itemWidth * companies.length;
    const scrollSpeed =
      width / (animationConfig.scroll.logoScroll.duration * 1000);

    return {
      tripleCompanies: triple,
      singleSetWidth: width,
      speed: scrollSpeed,
    };
  }, []);

  // Motion and animation refs
  const x = useMotionValue(-singleSetWidth);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const manualScrollTimeoutRef = useRef<number | null>(null);
  const touchStartRef = useRef<{ x: number; time: number } | null>(null);

  // Optimized auto-scroll animation loop
  const animate = useCallback(() => {
    const now = Date.now();
    const deltaTime = now - lastTimeRef.current;
    lastTimeRef.current = now;

    const currentX = x.get();
    let newX = currentX + deltaTime * speed;

    // Seamless infinite loop boundary
    if (newX >= 0) {
      newX -= singleSetWidth;
    }

    x.set(newX);

    if (!isHovered && !isManualScrolling) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [isHovered, isManualScrolling, x, singleSetWidth, speed]);

  // Mouse interaction handlers
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleCompanyClick = useCallback((website: string) => {
    if (website && website !== '#') {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  }, []);

  // Manual scroll handler with bidirectional infinite scroll
  const handleManualScroll = useCallback(
    (deltaX: number) => {
      const currentX = x.get();
      let newX = currentX + deltaX;

      // Bidirectional infinite scroll boundaries
      if (newX >= 0) {
        newX -= singleSetWidth;
      } else if (newX <= -singleSetWidth * 2) {
        newX += singleSetWidth;
      }

      x.set(newX);

      // Temporary pause auto-scroll during manual interaction
      setIsManualScrolling(true);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
      manualScrollTimeoutRef.current = window.setTimeout(() => {
        setIsManualScrolling(false);
      }, 200);
    },
    [x, singleSetWidth]
  );

  // Wheel/trackpad scroll handler
  const handleWheel = useCallback(
    (e: Event) => {
      const wheelEvent = e as WheelEvent;
      wheelEvent.preventDefault();

      const deltaX = wheelEvent.deltaY * 0.6;
      handleManualScroll(deltaX);
    },
    [handleManualScroll]
  );

  // Touch gesture handlers for mobile devices
  const handleTouchStart = useCallback((e: Event) => {
    const touch = (e as TouchEvent).touches[0];
    if (touch) {
      touchStartRef.current = {
        x: touch.clientX,
        time: Date.now(),
      };
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: Event) => {
      const touchEvent = e as TouchEvent;
      touchEvent.preventDefault();

      const touch = touchEvent.touches[0];
      if (!touch || !touchStartRef.current) return;

      const deltaX = touchStartRef.current.x - touch.clientX;
      const deltaTime = Date.now() - touchStartRef.current.time;

      // Throttled touch processing for smooth performance
      if (Math.abs(deltaX) > 3 && deltaTime > 16) {
        handleManualScroll(deltaX * 0.4);
        touchStartRef.current = {
          x: touch.clientX,
          time: Date.now(),
        };
      }
    },
    [handleManualScroll]
  );

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
  }, []);

  const handleImageError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>, companyName: string) => {
      const target = e.currentTarget;
      target.style.display = 'none';

      // Prevent multiple fallbacks
      if (!target.parentElement?.querySelector(`.${styles.fallback}`)) {
        const fallback = document.createElement('div');
        fallback.textContent = companyName;
        fallback.className = styles.fallback || 'logo-scroll-fallback';
        target.parentElement?.appendChild(fallback);
      }
    },
    []
  );

  // Auto-scroll animation lifecycle
  useEffect(() => {
    if (isHovered || isManualScrolling) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    lastTimeRef.current = Date.now();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isHovered, isManualScrolling, animate]);

  // Manual scroll event listeners with cleanup
  useEffect(() => {
    const trackElement = document.querySelector(`.${styles.track}`);
    if (!trackElement) return;

    trackElement.addEventListener('wheel', handleWheel, { passive: false });
    trackElement.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    });
    trackElement.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    trackElement.addEventListener('touchend', handleTouchEnd, {
      passive: true,
    });

    return () => {
      trackElement.removeEventListener('wheel', handleWheel);
      trackElement.removeEventListener('touchstart', handleTouchStart);
      trackElement.removeEventListener('touchmove', handleTouchMove);
      trackElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <div className={styles.logoScroll}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>worked with</p>
        </div>

        <div
          className={styles.track}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div className={styles.content} style={{ x }} drag={false}>
            {tripleCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className={styles.item}
                onClick={() => handleCompanyClick(company.website)}
                style={{
                  cursor:
                    company.website && company.website !== '#'
                      ? 'pointer'
                      : 'default',
                }}
                title={
                  company.website && company.website !== '#'
                    ? `Visit ${company.name}`
                    : company.name
                }
              >
                <img
                  src={`${process.env.PUBLIC_URL || ''}${company.logo}`}
                  alt={company.alt}
                  className={styles.image}
                  loading='lazy'
                  decoding='async'
                  onError={(e) => handleImageError(e, company.name)}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
});

LogoScroll.displayName = 'LogoScroll';

export default LogoScroll;
