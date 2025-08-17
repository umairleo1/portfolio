import React, { useEffect, useRef, useState } from 'react';
import '@/styles/components/FloatingElements.css';

const FloatingElements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    // Scroll detection for hero visibility
    const handleScroll = () => {
      const heroSection = document.getElementById('about');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const isVisible = heroRect.bottom > 100; // Hide when hero is mostly scrolled past
        setIsHeroVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const createFloatingElement = () => {
      if (!containerRef.current) return;

      const element = document.createElement('div');
      element.className = 'floating-orb';

      // Random properties
      const size = Math.random() * 60 + 20; // 20-80px
      const opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4
      const duration = Math.random() * 20 + 15; // 15-35s
      const delay = Math.random() * 5; // 0-5s

      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight + size;

      // Styling
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.left = `${startX}px`;
      element.style.top = `${startY}px`;
      element.style.opacity = opacity.toString();
      element.style.animationDuration = `${duration}s`;
      element.style.animationDelay = `${delay}s`;

      // Random color variation
      const colors = [
        'rgba(102, 217, 237, 0.3)',
        'rgba(74, 144, 226, 0.2)',
        'rgba(139, 92, 246, 0.2)',
        'rgba(255, 255, 255, 0.1)',
      ];
      element.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;

      containerRef.current.appendChild(element);

      // Remove element after animation
      setTimeout(
        () => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        },
        (duration + delay) * 1000
      );
    };

    // Create initial elements
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createFloatingElement(), i * 2000);
    }

    // Continue creating elements
    const interval = setInterval(createFloatingElement, 6000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
