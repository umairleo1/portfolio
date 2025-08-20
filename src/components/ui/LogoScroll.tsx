import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { companies } from '@/data/portfolio';
import { animationConfig } from '@/config/animations';
import '@/styles/components/LogoScroll.css';

const LogoScroll: React.FC = memo(() => {
  // Duplicate the companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className='logo-scroll'>
      <div className='logo-scroll__container'>
        <div className='logo-scroll__header'>
          <p className='logo-scroll__title'>worked with</p>
        </div>

        <div className='logo-scroll__track'>
          <motion.div
            className='logo-scroll__content'
            animate={{
              x: [
                0,
                -(140 + animationConfig.scroll.logoScroll.gap) *
                  companies.length,
              ],
            }}
            transition={{
              x: {
                duration: animationConfig.scroll.logoScroll.duration,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className='logo-scroll__item'
              >
                <img
                  src={`${process.env.PUBLIC_URL || ''}${company.logo}`}
                  alt={company.alt}
                  className='logo-scroll__image'
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.textContent = company.name;
                    fallback.className = 'logo-scroll__fallback';
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
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
