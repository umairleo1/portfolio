import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '@/data/portfolio';
import LogoScroll from '@/components/ui/LogoScroll';
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
      <section id='about' className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={`${styles.heroCircle} ${styles.heroCircle1}`}></div>
          <div className={`${styles.heroCircle} ${styles.heroCircle2}`}></div>
          <div className={`${styles.heroCircle} ${styles.heroCircle3}`}></div>
          <div className={styles.heroParticles}></div>
        </div>

        <div className='container'>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className={styles.heroMain}
          >
            <motion.div className={styles.heroContent} variants={itemVariants}>
              <h1 className={styles.heroName}>{personalInfo.name}</h1>
              <p className={styles.heroTitle}>
                {personalInfo.title.toLowerCase()}
              </p>
            </motion.div>

            <motion.div className={styles.heroImage} variants={itemVariants}>
              <div className={styles.imageContainer}>
                <img
                  src={`${process.env.PUBLIC_URL || ''}${personalInfo.profileImage}`}
                  alt={personalInfo.name}
                  className={styles.profileImage}
                  width='400'
                  height='400'
                  loading='eager'
                  decoding='sync'
                  onError={(e) => {
                    e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/assets/images/profile-fallback.jpg`;
                  }}
                />
                <div className={styles.imageOverlay}></div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.heroLogos}>
            <LogoScroll />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
