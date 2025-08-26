import React, {
  memo,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { companies } from '@/data/portfolio';
import { animationConfig } from '@/config/animations';
import '@/styles/components/LogoScroll.css';

const LogoScroll: React.FC = memo(() => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoize calculations to prevent unnecessary recalculations
  const { tripleCompanies, singleSetWidth, speed } = useMemo(() => {
    const triple = [...companies, ...companies, ...companies];
    const width =
      (120 + animationConfig.scroll.logoScroll.gap) * companies.length;
    const scrollSpeed =
      width / (animationConfig.scroll.logoScroll.duration * 1000);
    return {
      tripleCompanies: triple,
      singleSetWidth: width,
      speed: scrollSpeed,
    };
  }, []);

  const x = useMotionValue(-singleSetWidth);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Optimize animation loop with useCallback
  const animate = useCallback(() => {
    const now = Date.now();
    const deltaTime = now - lastTimeRef.current;
    lastTimeRef.current = now;

    const currentX = x.get();
    let newX = currentX + deltaTime * speed;

    // Seamless loop reset
    if (newX >= 0) {
      newX = newX - singleSetWidth;
    }

    x.set(newX);

    if (!isHovered) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [isHovered, x, singleSetWidth, speed]);

  // Event handlers with useCallback
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleCompanyClick = useCallback((website: string) => {
    if (website && website !== '#') {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  }, []);

  const handleImageError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>, companyName: string) => {
      const target = e.currentTarget;
      target.style.display = 'none';

      // Prevent multiple fallbacks
      if (!target.parentElement?.querySelector('.logo-scroll__fallback')) {
        const fallback = document.createElement('div');
        fallback.textContent = companyName;
        fallback.className = 'logo-scroll__fallback';
        target.parentElement?.appendChild(fallback);
      }
    },
    []
  );

  useEffect(() => {
    if (isHovered) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    // Initialize timing and start animation
    lastTimeRef.current = Date.now();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isHovered, animate]);

  return (
    <div className='logo-scroll'>
      <div className='logo-scroll__container'>
        <div className='logo-scroll__header'>
          <p className='logo-scroll__title'>worked with</p>
        </div>

        <div
          className='logo-scroll__track'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className='logo-scroll__content'
            style={{ x }}
            drag={false}
          >
            {tripleCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className='logo-scroll__item'
                onClick={() => handleCompanyClick(company.website)}
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
                  onError={(e) => handleImageError(e, company.name)}
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
