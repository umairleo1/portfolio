import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiAmazon,
  SiDocker,
  SiTensorflow,
  SiPostgresql,
  SiAuth0,
  SiTypescript,
  SiPython,
  SiKubernetes,
  SiMongodb,
} from 'react-icons/si';
import {
  HiOutlineServer,
  HiOutlineCloud,
  HiOutlineCog,
  HiOutlineCpuChip,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import { HiCode, HiDatabase } from 'react-icons/hi';
import { renderIcon } from '@/utils/IconWrapper';
import styles from './Expertise.module.css';

const Expertise: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const skillCategories = [
    {
      title: 'Languages',
      items: skills.languages,
      icon: renderIcon(HiCode),
      techIcons: [SiJavascript, SiTypescript, SiPython],
      gradient: 'linear-gradient(135deg, #f7df1e, #3178c6, #306998)',
      description: 'Core programming languages and markup',
    },
    {
      title: 'Frontend',
      items: skills.frontEnd,
      icon: renderIcon(HiOutlineSparkles),
      techIcons: [SiReact],
      gradient: 'linear-gradient(135deg, #61dafb, #06b6d4, #a855f7)',
      description: 'Modern UI frameworks and libraries',
    },
    {
      title: 'Backend',
      items: skills.backEnd,
      icon: renderIcon(HiOutlineServer),
      techIcons: [SiNodedotjs],
      gradient: 'linear-gradient(135deg, #339933, #10b981, #059669)',
      description: 'Server-side technologies and frameworks',
    },
    {
      title: 'Cloud & IaC',
      items: skills.cloudAndIaC,
      icon: renderIcon(HiOutlineCloud),
      techIcons: [SiAmazon],
      gradient: 'linear-gradient(135deg, #ff9900, #232f3e, #0ea5e9)',
      description: 'Cloud platforms and infrastructure as code',
    },
    {
      title: 'DevOps & Observability',
      items: skills.devOpsAndObservability,
      icon: renderIcon(HiOutlineCog),
      techIcons: [SiDocker, SiKubernetes],
      gradient: 'linear-gradient(135deg, #2496ed, #326ce5, #f59e0b)',
      description: 'CI/CD, monitoring, and automation tools',
    },
    {
      title: 'Data & Messaging',
      items: skills.dataAndMessaging,
      icon: renderIcon(HiDatabase),
      techIcons: [SiPostgresql, SiMongodb],
      gradient: 'linear-gradient(135deg, #336791, #47a248, #ef4444)',
      description: 'Databases and message queue systems',
    },
    {
      title: 'Generative AI',
      items: skills.generativeAI,
      icon: renderIcon(HiOutlineCpuChip),
      techIcons: [SiTensorflow],
      gradient: 'linear-gradient(135deg, #ff6f00, #8b5cf6, #ec4899)',
      description: 'AI/ML platforms and integration tools',
    },
    {
      title: 'Security',
      items: skills.security,
      icon: renderIcon(HiOutlineShieldCheck),
      techIcons: [SiAuth0],
      gradient: 'linear-gradient(135deg, #eb5424, #f97316, #dc2626)',
      description: 'Security tools and best practices',
    },
  ];

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '15+', label: 'Technologies' },
  ];

  return (
    <section id='skills' className={`${styles.expertise} section`}>
      <div className='container'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={`${styles.sectionTitle} chunky-underline`}>
              skills & expertise
            </h2>
            <p className={styles.sectionSubtitle}>
              comprehensive technology stack and specialized competencies
            </p>
          </motion.div>

          <motion.div className={styles.skills} variants={itemVariants}>
            <div className={styles.skillsGrid}>
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className={`${styles.skillCategory} card`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.skillCategoryHeader}>
                    <div className={styles.skillCategoryIconContainer}>
                      <div
                        className={styles.skillCategoryIcon}
                        style={{ background: category.gradient }}
                      >
                        {category.icon}
                      </div>
                      <div className={styles.skillCategoryTechIcons}>
                        {category.techIcons.map((TechIcon, iconIndex) => (
                          <TechIcon
                            key={iconIndex}
                            className={styles.techIcon}
                          />
                        ))}
                      </div>
                    </div>
                    <div className={styles.skillCategoryInfo}>
                      <h3 className={styles.skillCategoryTitle}>
                        {category.title}
                      </h3>
                      <p className={styles.skillCategoryDescription}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className={styles.skillCategoryItems}>
                    {category.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className={styles.skillTag}
                        variants={itemVariants}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.stats} variants={itemVariants}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statItem}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
