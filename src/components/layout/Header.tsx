import React, { useState, useEffect } from 'react';
import type { NavItem } from '@/types';
import { ASSET_PATHS, NAVIGATION_PATHS } from '@/lib/constants';
import '@/styles/components/Header.css';

const navItems: NavItem[] = [
  { label: 'about', href: NAVIGATION_PATHS.ABOUT },
  { label: 'expertise', href: '#expertise' },
  { label: 'work', href: '#work' },
  { label: 'experience', href: NAVIGATION_PATHS.EXPERIENCE },
  { label: 'contact', href: NAVIGATION_PATHS.CONTACT }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll background blur effect
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
      
      // Handle active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}>
              <div className="header__profile">
                <div className="header__profile-image">
                  <img src={ASSET_PATHS.PROFILE_AVATAR} alt="Muhammad Umair" className="header__profile-pic" />
                </div>
                <span className="header__profile-text">mu</span>
              </div>
            </a>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.label} className="header__nav-item">
                  <a
                    href={item.href}
                    className={`header__nav-link ${activeSection === item.href.substring(1) ? 'header__nav-link--active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="header__menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="header__mobile-menu">
            <ul className="header__mobile-nav">
              {navItems.map((item) => (
                <li key={item.label} className="header__mobile-nav-item">
                  <a
                    href={item.href}
                    className={`header__mobile-nav-link ${activeSection === item.href.substring(1) ? 'header__mobile-nav-link--active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
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
};

export default Header;