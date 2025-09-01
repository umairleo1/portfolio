import React, {
  memo,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { companies } from '@/data';
import styles from './LogoScroll.module.css';

// Logo scroll configuration
const logoScrollConfig = {
  gap: 48, // 3rem in pixels
  duration: 30, // seconds for smooth scroll
};

const LogoScroll: React.FC = memo(() => {
  const [isHovered, setIsHovered] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  // Memoized infinite scroll calculations for optimal performance
  const { tripleCompanies, singleSetWidth, speed } = useMemo(() => {
    const triple = [...companies, ...companies, ...companies];
    const itemWidth = 120 + logoScrollConfig.gap;
    const width = itemWidth * companies.length;
    const scrollSpeed = width / (logoScrollConfig.duration * 1000);

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
  const velocityRef = useRef<number>(0);
  const lastTouchRef = useRef<{ x: number; time: number } | null>(null);
  const momentumAnimationRef = useRef<number | null>(null);

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
    (deltaX: number, isTouch = false) => {
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

      // Optimized delay: 500ms for touch, 200ms for wheel/trackpad
      const delay = isTouch ? 500 : 200;
      manualScrollTimeoutRef.current = window.setTimeout(() => {
        setIsManualScrolling(false);
      }, delay);
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

      const now = Date.now();
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaTime = now - touchStartRef.current.time;

      // Calculate velocity for momentum
      if (deltaTime > 0) {
        velocityRef.current = deltaX / deltaTime;
      }

      // Smooth touch processing with reduced threshold
      if (Math.abs(deltaX) > 1 && deltaTime > 8) {
        handleManualScroll(-deltaX * 0.8, true);
        touchStartRef.current = {
          x: touch.clientX,
          time: now,
        };
      }

      // Store last touch for momentum calculation
      lastTouchRef.current = {
        x: touch.clientX,
        time: now,
      };
    },
    [handleManualScroll]
  );

  const handleTouchEnd = useCallback(() => {
    // Cancel any existing momentum animation
    if (momentumAnimationRef.current) {
      cancelAnimationFrame(momentumAnimationRef.current);
      momentumAnimationRef.current = null;
    }

    // Add momentum/inertia scrolling after touch ends - iPhone-like behavior
    if (lastTouchRef.current && Math.abs(velocityRef.current) > 0.05) {
      let momentum = velocityRef.current * -120;
      const friction = 0.92;

      const momentumScroll = () => {
        if (Math.abs(momentum) > 0.5) {
          handleManualScroll(momentum, true);
          momentum *= friction;
          momentumAnimationRef.current = requestAnimationFrame(momentumScroll);
        } else {
          momentumAnimationRef.current = null;
        }
      };

      momentumAnimationRef.current = requestAnimationFrame(momentumScroll);
    }

    touchStartRef.current = null;
    lastTouchRef.current = null;
    velocityRef.current = 0;
  }, [handleManualScroll]);

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
      // Also cleanup momentum animation on unmount
      if (momentumAnimationRef.current) {
        cancelAnimationFrame(momentumAnimationRef.current);
        momentumAnimationRef.current = null;
      }
      // Cleanup manual scroll timeout
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
        manualScrollTimeoutRef.current = null;
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
