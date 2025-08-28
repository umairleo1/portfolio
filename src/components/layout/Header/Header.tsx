import React, { useState, useEffect, memo } from 'react';
import type { NavItem } from '@/types';
import { NAVIGATION_PATHS } from '@/lib/constants';
import { appConfig } from '@/data';
import { useThrottle } from '@/hooks';
import { useAnalytics } from '@/hooks/useAnalytics';
import styles from './Header.module.css';

const navItems: NavItem[] = appConfig.navigation.items.map((item) => ({
  label: item.label,
  href: item.href.startsWith('#')
    ? item.href
    : item.href === '/experience'
      ? NAVIGATION_PATHS.EXPERIENCE
      : item.href === '/contact'
        ? NAVIGATION_PATHS.CONTACT
        : item.href,
}));

const Header: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { trackExternalLink } = useAnalytics();

  const handleScroll = useThrottle(() => {
    // Handle scroll background blur effect
    const scrollTop = window.pageYOffset;
    setIsScrolled(scrollTop > 50);

    // Handle active section
    const sections = navItems.map((item) => item.href.substring(1));
    const headerHeight = 80; // Standard header height
    const offset = headerHeight + 50; // Extra offset for better UX

    // Check if we're at the top (Hero section)
    if (scrollTop < 200) {
      setActiveSection('');
      return;
    }

    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= offset && rect.bottom >= offset;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, 16); // ~60fps throttling

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      const headerHeight = 80;
      const offset = headerHeight + 20;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  // Handle resume link click with analytics
  const handleResumeClick = () => {
    trackExternalLink(appConfig.resume.url, 'Resume', 'header', 'resume_link');
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.logo}>
            <a
              href={appConfig.resume.url}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.resumeLink}
              onClick={handleResumeClick}
            >
              Resume
            </a>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${activeSection === item.href.substring(1) ? styles.active : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNav}>
              {navItems.map((item) => (
                <li key={item.label} className={styles.mobileNavItem}>
                  <a
                    href={item.href}
                    className={`${styles.mobileNavLink} ${activeSection === item.href.substring(1) ? styles.mobileActive : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
