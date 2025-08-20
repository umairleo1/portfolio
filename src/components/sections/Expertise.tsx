import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio';
import {
  FaCode,
  FaReact,
  FaServer,
  FaCloud,
  FaTools,
  FaRobot,
  FaDatabase,
  FaShieldAlt,
} from 'react-icons/fa';
import { renderIcon } from '@/utils/IconWrapper';
import '@/styles/components/Expertise.css';

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
      icon: renderIcon(FaCode),
      color: 'var(--primary-cyan)',
      description: 'Core programming languages and markup',
    },
    {
      title: 'Frontend',
      items: skills.frontEnd,
      icon: renderIcon(FaReact),
      color: '#06B6D4',
      description: 'Modern UI frameworks and libraries',
    },
    {
      title: 'Backend',
      items: skills.backEnd,
      icon: renderIcon(FaServer),
      color: '#10B981',
      description: 'Server-side technologies and frameworks',
    },
    {
      title: 'Cloud & IaC',
      items: skills.cloudAndIaC,
      icon: renderIcon(FaCloud),
      color: '#0EA5E9',
      description: 'Cloud platforms and infrastructure as code',
    },
    {
      title: 'DevOps & Observability',
      items: skills.devOpsAndObservability,
      icon: renderIcon(FaTools),
      color: '#F59E0B',
      description: 'CI/CD, monitoring, and automation tools',
    },
    {
      title: 'Data & Messaging',
      items: skills.dataAndMessaging,
      icon: renderIcon(FaDatabase),
      color: '#EF4444',
      description: 'Databases and message queue systems',
    },
    {
      title: 'Generative AI',
      items: skills.generativeAI,
      icon: renderIcon(FaRobot),
      color: '#8B5CF6',
      description: 'AI/ML platforms and integration tools',
    },
    {
      title: 'Security',
      items: skills.security,
      icon: renderIcon(FaShieldAlt),
      color: '#F97316',
      description: 'Security tools and best practices',
    },
  ];

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '15+', label: 'Technologies' },
    { value: '2', label: "Master's Degrees" },
  ];

  return (
    <section id='skills' className='expertise section'>
      <div className='container'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className='expertise__header' variants={itemVariants}>
            <h2 className='section-title chunky-underline'>
              skills & expertise
            </h2>
            <p className='section-subtitle'>
              comprehensive technology stack and specialized competencies
            </p>
          </motion.div>

          <motion.div className='expertise__skills' variants={itemVariants}>
            <div className='skills-grid'>
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className='skill-category card'
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='skill-category__header'>
                    <div
                      className='skill-category__icon'
                      style={{ color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <div className='skill-category__info'>
                      <h3 className='skill-category__title'>
                        {category.title}
                      </h3>
                      <p className='skill-category__description'>
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className='skill-category__items'>
                    {category.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className='skill-tag'
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

          <motion.div className='expertise__stats' variants={itemVariants}>
            <div className='stats-grid'>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className='stat-item'
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className='stat-value'>{stat.value}</div>
                  <div className='stat-label'>{stat.label}</div>
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
