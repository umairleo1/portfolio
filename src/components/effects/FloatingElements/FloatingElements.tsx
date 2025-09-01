import React, { useEffect, useRef, useState } from 'react';
import styles from './FloatingElements.module.css';

const FloatingElements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const activeElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Optimized scroll handler with throttling
    const handleScroll = () => {
      const heroSection = document.getElementById('about');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const isVisible = heroRect.bottom > 100;
        setIsHeroVisible(isVisible);
      }
    };
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    // Throttled scroll detection
    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScrollHandler = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledScrollHandler, {
      passive: true,
    });

    // Optimized element creation with cleanup tracking
    const createFloatingElement = () => {
      if (!containerRef.current || !isHeroVisible) return;

      // Limit concurrent elements for better performance
      if (activeElementsRef.current.length >= 4) return;

      const element = document.createElement('div');
      element.className = styles.floatingOrb || 'floating-orb';

      // Optimized properties for better performance
      const size = Math.random() * 30 + 20; // 20-50px for better visibility
      const opacity = Math.random() * 0.15 + 0.08; // 0.08-0.23 for better subtlety
      const duration = Math.random() * 10 + 25; // 25-35s for smoother motion

      // Random starting position with boundary checks
      const startX = Math.max(
        0,
        Math.min(window.innerWidth - size, Math.random() * window.innerWidth)
      );
      const startY = window.innerHeight + size;

      // Use CSS custom properties for better performance
      element.style.cssText = `
        --size: ${size}px;
        --start-x: ${startX}px;
        --start-y: ${startY}px;
        --opacity: ${opacity};
        --duration: ${duration}s;
        width: var(--size);
        height: var(--size);
        left: var(--start-x);
        top: var(--start-y);
        opacity: var(--opacity);
        animation-duration: var(--duration);
        background: radial-gradient(circle, rgba(102, 217, 237, 0.12), transparent);
        will-change: transform, opacity;
        transform: translate3d(0, 0, 0);
      `;

      containerRef.current.appendChild(element);
      activeElementsRef.current.push(element);

      // Improved cleanup with tracking
      const cleanup = () => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
          activeElementsRef.current = activeElementsRef.current.filter(
            (el) => el !== element
          );
        }
      };

      setTimeout(cleanup, duration * 1000);
    };

    // Optimized startup sequence
    let interval: NodeJS.Timeout;
    const startDelay = setTimeout(() => {
      // Create initial elements with staggered timing
      for (let i = 0; i < 2; i++) {
        setTimeout(() => createFloatingElement(), i * 2000);
      }

      // Regular creation interval
      interval = setInterval(createFloatingElement, 6000); // More frequent for better visual flow
    }, 1500); // Reduced delay for faster startup

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
      window.removeEventListener('scroll', throttledScrollHandler);
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Cleanup active elements
      activeElementsRef.current.forEach((element) => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      activeElementsRef.current = [];
    };
  }, [isHeroVisible]);

  return (
    <div ref={containerRef} className={styles.floatingElementsContainer}>
      <div
        className={`${styles.heroFloatingElements} ${!isHeroVisible ? styles.hidden : ''}`}
      >
        <div
          className={`${styles.geometricShape} ${styles.geometricShape1}`}
        ></div>
        <div
          className={`${styles.geometricShape} ${styles.geometricShape2}`}
        ></div>
        <div
          className={`${styles.geometricShape} ${styles.geometricShape3}`}
        ></div>
        <div className={`${styles.gradientOrb} ${styles.gradientOrb1}`}></div>
        <div className={`${styles.gradientOrb} ${styles.gradientOrb2}`}></div>
      </div>
    </div>
  );
};

export default FloatingElements;
