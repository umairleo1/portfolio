import React, { useEffect } from 'react';
import '@/styles/components/SectionBackgrounds.css';

const SectionBackgrounds: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section:not(#about)');
    
    sections.forEach((section, index) => {
      // Add subtle background patterns to each section
      const bgElement = document.createElement('div');
      bgElement.className = `section-bg section-bg--${index + 1}`;
      section.appendChild(bgElement);
    });

    return () => {
      // Cleanup
      sections.forEach(section => {
        const bgElement = section.querySelector('.section-bg');
        if (bgElement) {
          section.removeChild(bgElement);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default SectionBackgrounds;