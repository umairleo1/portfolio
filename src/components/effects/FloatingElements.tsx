import React, { useEffect, useRef, useState } from 'react';
import '@/styles/components/FloatingElements.css';

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
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        const heroSection = document.getElementById('about');
        if (heroSection) {
          const heroRect = heroSection.getBoundingClientRect();
          const isVisible = heroRect.bottom > 100;
          setIsHeroVisible(isVisible);
        }
        scrollTimeout = null as any;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const createFloatingElement = () => {
      if (!containerRef.current || !isHeroVisible) return;

      const element = document.createElement('div');
      element.className = 'floating-orb';

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
    <div ref={containerRef} className='floating-elements-container'>
      <div
        className={`hero-floating-elements ${!isHeroVisible ? 'hidden' : ''}`}
      >
        <div className='geometric-shape geometric-shape--1'></div>
        <div className='geometric-shape geometric-shape--2'></div>
        <div className='geometric-shape geometric-shape--3'></div>
        <div className='gradient-orb gradient-orb--1'></div>
        <div className='gradient-orb gradient-orb--2'></div>
      </div>
    </div>
  );
};

export default FloatingElements;
