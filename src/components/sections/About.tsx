import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, education, certifications } from '@/data/portfolio';
import { FaCode, FaCloud, FaTools, FaReact, FaServer, FaRobot, FaDatabase, FaShieldAlt, FaGraduationCap, FaAward } from 'react-icons/fa';
import { renderIcon } from '@/utils/IconWrapper';
import '@/styles/components/About.css';

const About: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Languages',
      items: skills.languages,
      icon: renderIcon(FaCode),
      color: 'var(--primary-color)'
    },
    {
      title: 'Cloud & IaC',
      items: skills.cloudAndIaC,
      icon: renderIcon(FaCloud),
      color: '#0EA5E9'
    },
    {
      title: 'DevOps & Observability',
      items: skills.devOpsAndObservability,
      icon: renderIcon(FaTools),
      color: '#F59E0B'
    },
    {
      title: 'Front-end',
      items: skills.frontEnd,
      icon: renderIcon(FaReact),
      color: '#06B6D4'
    },
    {
      title: 'Back-end',
      items: skills.backEnd,
      icon: renderIcon(FaServer),
      color: '#10B981'
    },
    {
      title: 'Generative AI',
      items: skills.generativeAI,
      icon: renderIcon(FaRobot),
      color: '#8B5CF6'
    },
    {
      title: 'Data & Messaging',
      items: skills.dataAndMessaging,
      icon: renderIcon(FaDatabase),
      color: '#EF4444'
    },
    {
      title: 'Security',
      items: skills.security,
      icon: renderIcon(FaShieldAlt),
      color: '#F97316'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about__header" variants={itemVariants}>
            <h2 className="section-title text-center">Technical Expertise</h2>
            <p className="section-subtitle text-center">
              Full-stack development with focus on scalable cloud architecture and modern frameworks
            </p>
          </motion.div>

          <div className="about__content">
            {/* Quick Stats */}
            <motion.div className="about__stats" variants={itemVariants}>
              <div className="stats-grid">
                <div className="stat-item">
                  <strong>5+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="stat-item">
                  <strong>8</strong>
                  <span>Core Technologies</span>
                </div>
                <div className="stat-item">
                  <strong>15+</strong>
                  <span>Projects Delivered</span>
                </div>
                <div className="stat-item">
                  <strong>2</strong>
                  <span>Master's Degrees</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="about__skills" variants={itemVariants}>
              <h3>Core Technologies & Expertise</h3>
              <div className="skills-grid">
                {skillCategories.map((category) => (
                  <motion.div
                    key={category.title}
                    className="skill-category"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="skill-category__header">
                      <div 
                        className="skill-category__icon"
                        style={{ color: category.color }}
                      >
                        {category.icon}
                      </div>
                      <h4>{category.title}</h4>
                    </div>
                    <div className="skill-category__items">
                      {category.items.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="about__credentials">
              <motion.div className="about__education" variants={itemVariants}>
                <h3>
                  {renderIcon(FaGraduationCap, { className: 'section-icon' })}
                  Education
                </h3>
                <div className="education-list">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="education-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="education-item__content">
                        <h4>{edu.degree}</h4>
                        <p className="education-item__institution">{edu.institution}</p>
                        <p className="education-item__location">{edu.location}</p>
                        <p className="education-item__period">{edu.period}</p>
                        <p className="education-item__specialization">{edu.specialization}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="about__certifications" variants={itemVariants}>
                <h3>
                  {renderIcon(FaAward, { className: 'section-icon' })}
                  Certifications & Awards
                </h3>
                <div className="certifications-list">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="certification-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="certification-item__content">
                        <h4>{cert.title}</h4>
                        <p className="certification-item__issuer">{cert.issuer}</p>
                        {cert.date && <p className="certification-item__date">{cert.date}</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;