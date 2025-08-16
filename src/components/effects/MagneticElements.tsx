import React, { useEffect } from 'react';

const MagneticElements: React.FC = () => {
  useEffect(() => {
    const addMagneticEffect = (element: HTMLElement) => {
      let bounds: DOMRect;

      const updateBounds = () => {
        bounds = element.getBoundingClientRect();
      };

      const handleMouseMove = (e: MouseEvent) => {
        updateBounds();
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 100; // Magnetic field radius
        
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          const moveX = deltaX * strength * 0.3;
          const moveY = deltaY * strength * 0.3;
          
          element.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.1})`;
        } else {
          element.style.transform = 'translate(0px, 0px) scale(1)';
        }
      };

      const handleMouseLeave = () => {
        element.style.transform = 'translate(0px, 0px) scale(1)';
      };

      // Add smooth transition
      element.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      
      document.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      // Update bounds on resize
      window.addEventListener('resize', updateBounds);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('resize', updateBounds);
      };
    };

    // Apply magnetic effect to specific elements
    const magneticSelectors = [
      '.btn',
      '.project-card',
      '.experience__card',
      '.tech-badge',
      '.contact__social-link',
      '.footer__link'
    ];

    const cleanupFunctions: (() => void)[] = [];

    magneticSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
      elements.forEach(element => {
        const cleanup = addMagneticEffect(element);
        if (cleanup) cleanupFunctions.push(cleanup);
      });
    });

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  return null; // This component doesn't render anything
};

export default MagneticElements;