import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { companies } from '@/data/portfolio';
import { animationConfig } from '@/config/animations';
import '@/styles/components/LogoScroll.css';

const LogoScroll: React.FC = memo(() => {
  // Create triple set for truly seamless infinite scroll
  const tripleCompanies = [...companies, ...companies, ...companies];
  const singleSetWidth =
    (120 + animationConfig.scroll.logoScroll.gap) * companies.length;

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
              x: [-singleSetWidth, 0],
            }}
            transition={{
              x: {
                duration: animationConfig.scroll.logoScroll.duration,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              },
            }}
            initial={{
              x: -singleSetWidth, // Start from the duplicated set position
            }}
            drag={false}
          >
            {tripleCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className='logo-scroll__item'
                onClick={() => {
                  if (company.website && company.website !== '#') {
                    window.open(
                      company.website,
                      '_blank',
                      'noopener,noreferrer'
                    );
                  }
                }}
                style={{
                  cursor:
                    company.website && company.website !== '#'
                      ? 'pointer'
                      : 'default',
                }}
                title={
                  company.website && company.website !== '#'
                    ? `Visit ${company.name}`
                    : company.name
                }
              >
                <img
                  src={`${process.env.PUBLIC_URL || ''}${company.logo}`}
                  alt={company.alt}
                  className='logo-scroll__image'
                  loading='lazy'
                  decoding='async'
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
