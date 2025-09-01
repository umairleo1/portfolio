import React from 'react';
import { motion } from 'framer-motion';
import { useSectionTracking } from '@/hooks/useAnalytics';
import { skills } from '@/data';
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
  HiOutlineWrenchScrewdriver,
  HiOutlineChartBarSquare,
} from 'react-icons/hi2';
import { HiCode, HiDatabase } from 'react-icons/hi';
import { renderIcon } from '@/utils/IconWrapper';
import styles from './Expertise.module.css';

const Expertise: React.FC = () => {
  // Analytics section tracking
  const sectionRef = useSectionTracking('skills');

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
    {
      title: 'Testing',
      items: skills.testing,
      icon: renderIcon(HiOutlineWrenchScrewdriver),
      techIcons: [],
      gradient: 'linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6)',
      description: 'Testing frameworks and methodologies',
    },
    {
      title: 'Design & Tools',
      items: skills.designAndTools,
      icon: renderIcon(HiOutlineWrenchScrewdriver),
      techIcons: [],
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706, #92400e)',
      description: 'Development tools and design systems',
    },
    {
      title: 'Monitoring & Analytics',
      items: skills.monitoringAndAnalytics,
      icon: renderIcon(HiOutlineChartBarSquare),
      techIcons: [],
      gradient: 'linear-gradient(135deg, #dc2626, #ef4444, #f87171)',
      description: 'Performance monitoring and analytics tools',
    },
  ];

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '50+', label: 'Technologies' },
  ];

  return (
    <section
      ref={sectionRef}
      id='skills'
      className={`${styles.expertise} section`}
    >
      <div className='container'>
        <div>
          <div className={styles.header}>
            <h2 className={`${styles.sectionTitle} chunky-underline`}>
              skills & expertise
            </h2>
            <p className={styles.sectionSubtitle}>
              comprehensive technology stack and specialized competencies
            </p>
          </div>

          <div className={styles.skillsGrid}>
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className={`${styles.skillCategory} card`}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    duration: 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
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
                        <TechIcon key={iconIndex} className={styles.techIcon} />
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
                  {category.items.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.stats}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statItem}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: {
                      duration: 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                >
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
