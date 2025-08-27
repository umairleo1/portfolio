import React, { useState, useEffect } from 'react';
import styles from './ScrollToBottom.module.css';

const ScrollToBottom: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      // Show button after scrolling down 300px
      setIsVisible(scrolled > 300);

      // Check if at bottom (within 100px)
      setIsAtBottom(maxScroll - scrolled < 100);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Trigger fade-in animation for final section
      setTimeout(() => {
        const finalSection = document.querySelector('.footer');
        if (finalSection) {
          finalSection.classList.add('fade-in-on-arrival');
        }
      }, 600);
    }
  };

  if (!isVisible || isAtBottom) {
    return null;
  }

  return (
    <button
      className={styles.scrollToBottom}
      onClick={scrollToBottom}
      aria-label='Scroll to bottom'
    >
      <div className={styles.icon}>
        <div className={styles.chevronDown}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.pulse}></div>
    </button>
  );
};

export default ScrollToBottom;
