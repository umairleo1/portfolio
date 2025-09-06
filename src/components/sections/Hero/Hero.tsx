import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/data';
import { ASSET_PATHS } from '@/lib/constants/paths';
import LogoScroll from '@/components/ui/LogoScroll';
import Section from '@/components/ui/Section';
import styles from './Hero.module.css';

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
      <Section
        id='about'
        className={`${styles.hero} darkBg`}
        ariaLabel="Hero section featuring Muhammad Umair's introduction"
      >
        <div className={styles.heroBackground} aria-hidden='true'>
          <div className={`${styles.heroCircle} ${styles.heroCircle1}`}></div>
          <div className={`${styles.heroCircle} ${styles.heroCircle2}`}></div>
          <div className={`${styles.heroCircle} ${styles.heroCircle3}`}></div>
          <div className={styles.heroParticles}></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className={styles.heroMain}
        >
          <motion.div className={styles.heroContent} variants={itemVariants}>
            <h1 className={styles.heroName} role='banner'>
              {personalInfo.name}
            </h1>
            <p className={styles.heroTitle} aria-describedby='hero-description'>
              {personalInfo.title.toLowerCase()}
            </p>
            <span id='hero-description' className='sr-only'>
              Professional software engineer specializing in full-stack
              development
            </span>
          </motion.div>

          <motion.div className={styles.heroImage} variants={itemVariants}>
            <div className={styles.imageContainer}>
              <img
                src={ASSET_PATHS.PROFILE_MAIN}
                alt={`Professional headshot of ${personalInfo.name}, Software Engineer`}
                className={styles.profileImage}
                width='400'
                height='400'
                loading='eager'
                decoding='sync'
                aria-describedby='profile-image-description'
                onError={(e) => {
                  e.currentTarget.src = ASSET_PATHS.PROFILE_FALLBACK;
                }}
              />
              <span id='profile-image-description' className='sr-only'>
                Professional portrait photo of {personalInfo.name} wearing
                business attire
              </span>
              <div className={styles.imageOverlay}></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.heroLogos}>
          <LogoScroll />
        </motion.div>
      </Section>
    </>
  );
};

export default Hero;
