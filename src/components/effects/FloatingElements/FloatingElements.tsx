import React, { useEffect, useRef, useState } from 'react';
import styles from './FloatingElements.module.css';

const FloatingElements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    // Scroll detection for hero visibility (throttled)
    let scrollTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        const heroSection = document.getElementById('about');
        if (heroSection) {
          const heroRect = heroSection.getBoundingClientRect();
          const isVisible = heroRect.bottom > 100;
          setIsHeroVisible(isVisible);
        }
        scrollTimeout = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const createFloatingElement = () => {
      if (!containerRef.current || !isHeroVisible) return;

      const element = document.createElement('div');
      element.className = styles.floatingOrb || 'floating-orb';

      // Reduced random properties for better performance
      const size = Math.random() * 40 + 15; // Smaller: 15-55px
      const opacity = Math.random() * 0.2 + 0.05; // More subtle: 0.05-0.25
      const duration = Math.random() * 15 + 20; // Longer: 20-35s

      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight + size;

      element.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        top: ${startY}px;
        opacity: ${opacity};
        animation-duration: ${duration}s;
        background: radial-gradient(circle, rgba(102, 217, 237, 0.15), transparent);
      `;

      containerRef.current.appendChild(element);

      // Remove element after animation
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, duration * 1000);
    };

    // Delayed startup - don't run immediately
    let interval: NodeJS.Timeout;
    const startDelay = setTimeout(() => {
      // Create fewer initial elements
      for (let i = 0; i < 2; i++) {
        setTimeout(() => createFloatingElement(), i * 3000);
      }

      // Less frequent creation
      interval = setInterval(createFloatingElement, 8000);
    }, 2000); // 2 second delay for startup

    return () => {
      clearTimeout(startDelay);
      if (interval) clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
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
