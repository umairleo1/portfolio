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
import { getAssetPath } from '@/lib/constants/paths';
import styles from './LogoScroll.module.css';

// Professional configuration constants
const CONFIG = {
  GAP: 48,
  DURATION: 30000, // milliseconds
  TOUCH_DELAY: 400,
  WHEEL_DELAY: 400,
  RESTART_DELAY: 100,
  MAX_FRAME_TIME: 100,
  WHEEL_SENSITIVITY: 0.6,
  TOUCH_SENSITIVITY: 0.8,
  MOMENTUM_MULTIPLIER: 120,
  FRICTION: 0.92,
} as const;

const LogoScroll: React.FC = memo(() => {
  const [isHovered, setIsHovered] = useState(false);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  // Performance: Cache reduced motion check
  const prefersReducedMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  // Professional: Memoized scroll calculations
  const scrollConfig = useMemo(() => {
    const itemWidth = 120 + CONFIG.GAP;
    const singleSetWidth = itemWidth * companies.length;
    const speed = singleSetWidth / CONFIG.DURATION;
    const tripleCompanies = [...companies, ...companies, ...companies];

    return { tripleCompanies, singleSetWidth, speed };
  }, []);

  // Professional: Centralized refs
  const refs = {
    x: useMotionValue(-scrollConfig.singleSetWidth),
    animation: useRef<number | null>(null),
    lastTime: useRef<number>(0),
    manualTimeout: useRef<number | null>(null),
    momentum: useRef<number | null>(null),
    container: useRef<HTMLDivElement>(null),
    track: useRef<HTMLDivElement>(null),
    touch: useRef<{ x: number; time: number } | null>(null),
    velocity: useRef<number>(0),
  };

  // Professional: Single animation function
  const animate = useCallback(() => {
    const now = Date.now();
    const deltaTime = Math.min(
      now - refs.lastTime.current,
      CONFIG.MAX_FRAME_TIME
    );
    refs.lastTime.current = now;

    const currentX = refs.x.get();
    let newX = currentX + deltaTime * scrollConfig.speed;

    // Seamless loop boundary
    if (newX >= 0) newX -= scrollConfig.singleSetWidth;

    refs.x.set(newX);

    // Continue if no user interaction
    if (!isHovered && !isManualScrolling && !prefersReducedMotion) {
      refs.animation.current = requestAnimationFrame(animate);
    } else {
      refs.animation.current = null;
    }
    // refs are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isHovered,
    isManualScrolling,
    prefersReducedMotion,
    scrollConfig.speed,
    scrollConfig.singleSetWidth,
  ]);

  // Professional: Clean animation control
  const startAnimation = useCallback(() => {
    if (
      refs.animation.current ||
      isHovered ||
      isManualScrolling ||
      prefersReducedMotion
    ) {
      return;
    }
    refs.lastTime.current = Date.now();
    refs.animation.current = requestAnimationFrame(animate);
    // refs are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate, isHovered, isManualScrolling, prefersReducedMotion]);

  const stopAnimation = useCallback(() => {
    if (refs.animation.current) {
      cancelAnimationFrame(refs.animation.current);
      refs.animation.current = null;
    }
    // refs are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Professional: Optimized manual scroll handler
  const handleManualScroll = useCallback(
    (deltaX: number, isTouch = false) => {
      const currentX = refs.x.get();
      let newX = currentX + deltaX;

      // Infinite scroll boundaries
      if (newX >= 0) {
        newX -= scrollConfig.singleSetWidth;
      } else if (newX <= -scrollConfig.singleSetWidth * 2) {
        newX += scrollConfig.singleSetWidth;
      }

      refs.x.set(newX);

      // Pause auto-scroll
      setIsManualScrolling(true);
      stopAnimation();

      // Clear previous timeout
      if (refs.manualTimeout.current) {
        clearTimeout(refs.manualTimeout.current);
      }

      // Resume after delay
      const delay = isTouch ? CONFIG.TOUCH_DELAY : CONFIG.WHEEL_DELAY;
      refs.manualTimeout.current = window.setTimeout(() => {
        setIsManualScrolling(false);
      }, delay);
    },
    // refs are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollConfig.singleSetWidth, stopAnimation]
  );

  // Professional: Mouse handlers
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Professional: Company click handler
  const handleCompanyClick = useCallback((website: string) => {
    if (website && website !== '#') {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  }, []);

  // Professional: Wheel handler
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      handleManualScroll(e.deltaY * CONFIG.WHEEL_SENSITIVITY);
    },
    [handleManualScroll]
  );

  // Professional: Touch handlers
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    if (touch) {
      refs.touch.current = { x: touch.clientX, time: Date.now() };
    }
    // refs are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (!touch || !refs.touch.current) return;

      const now = Date.now();
      const deltaX = touch.clientX - refs.touch.current.x;
      const deltaTime = now - refs.touch.current.time;

      if (deltaTime > 0) {
        refs.velocity.current = deltaX / deltaTime;
      }

      if (Math.abs(deltaX) > 1 && deltaTime > 8) {
        handleManualScroll(deltaX * CONFIG.TOUCH_SENSITIVITY, true);
        refs.touch.current = { x: touch.clientX, time: now };
      }
    },
    // refs are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleManualScroll]
  );

  const handleTouchEnd = useCallback(() => {
    // Cancel existing momentum
    if (refs.momentum.current) {
      cancelAnimationFrame(refs.momentum.current);
      refs.momentum.current = null;
    }

    // Add momentum scrolling
    if (Math.abs(refs.velocity.current) > 0.05) {
      let momentum = refs.velocity.current * CONFIG.MOMENTUM_MULTIPLIER;

      const momentumScroll = () => {
        if (Math.abs(momentum) > 0.5) {
          handleManualScroll(momentum, true);
          momentum *= CONFIG.FRICTION;
          refs.momentum.current = requestAnimationFrame(momentumScroll);
        } else {
          refs.momentum.current = null;
        }
      };

      refs.momentum.current = requestAnimationFrame(momentumScroll);
    }

    refs.touch.current = null;
    refs.velocity.current = 0;
    // refs are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleManualScroll]);

  // Professional: Image error handler
  const handleImageError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>, companyName: string) => {
      const target = e.currentTarget;
      target.style.display = 'none';

      if (!target.parentElement?.querySelector(`.${styles.fallback}`)) {
        const fallback = document.createElement('div');
        fallback.textContent = companyName;
        fallback.className = styles.fallback || 'logo-scroll-fallback';
        target.parentElement?.appendChild(fallback);
      }
    },
    []
  );

  // Professional: Animation lifecycle
  useEffect(() => {
    startAnimation();

    return () => {
      stopAnimation();
      if (refs.momentum.current) {
        cancelAnimationFrame(refs.momentum.current);
        refs.momentum.current = null;
      }
      if (refs.manualTimeout.current) {
        clearTimeout(refs.manualTimeout.current);
        refs.manualTimeout.current = null;
      }
    };
    // refs and functions are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Professional: State change handler
  useEffect(() => {
    if (!isHovered && !isManualScrolling && !prefersReducedMotion) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [
    isHovered,
    isManualScrolling,
    prefersReducedMotion,
    startAnimation,
    stopAnimation,
  ]);

  // Professional: Event listeners
  useEffect(() => {
    const trackElement = refs.track.current;
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
    // refs are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  // Professional: Window events
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refs.lastTime.current = Date.now();
        setTimeout(startAnimation, CONFIG.RESTART_DELAY);
      }
    };

    const handleFocus = () => {
      refs.lastTime.current = Date.now();
      setTimeout(startAnimation, CONFIG.RESTART_DELAY);
    };

    window.addEventListener('focus', handleFocus);
    window.addEventListener('pageshow', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('pageshow', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
    // refs are stable and don't need to be in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAnimation]);

  return (
    <div ref={refs.container} className={styles.logoScroll}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>worked with</p>
        </div>

        <div
          ref={refs.track}
          className={styles.track}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div className={styles.content} style={{ x: refs.x }}>
            {scrollConfig.tripleCompanies.map((company, index) => (
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
                  src={getAssetPath(company.logo)}
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
