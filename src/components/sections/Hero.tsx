import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/data/portfolio';
import LogoScroll from '@/components/ui/LogoScroll';
import '@/styles/components/Hero.css';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.05,
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section id='about' className='hero'>
        <div className='hero__background'>
          <div className='hero__circle hero__circle--1'></div>
          <div className='hero__circle hero__circle--2'></div>
          <div className='hero__circle hero__circle--3'></div>
          <div className='hero__particles'></div>
        </div>

        <div className='container'>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className='hero__main'
          >
            <motion.div className='hero__content' variants={itemVariants}>
              <h1 className='hero__name'>{personalInfo.name}</h1>
              <p className='hero__title'>{personalInfo.title.toLowerCase()}</p>
            </motion.div>

            <motion.div className='hero__image' variants={itemVariants}>
              <div className='image-container'>
                <img
                  src={`${process.env.PUBLIC_URL || ''}${personalInfo.profileImage}`}
                  alt={personalInfo.name}
                  className='profile-image'
                  width='400'
                  height='400'
                  loading='eager'
                  decoding='sync'
                  onError={(e) => {
                    e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/assets/images/profile-fallback.jpg`;
                  }}
                />
                <div className='image-overlay'></div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className='hero__logos'>
            <LogoScroll />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
