import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, projectCategories } from '@/data/portfolio';
import {
  FaHospital,
  FaGlobe,
  FaPrint,
  FaCar,
  FaChartLine,
  FaLaptopCode,
  FaFilter,
  FaAward,
  FaExternalLinkAlt,
  FaCode,
} from 'react-icons/fa';
import { renderIcon } from '@/utils/IconWrapper';
import '@/styles/components/Projects.css';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const categories = [
    'All',
    'Healthcare',
    'AI/ML',
    'E-commerce',
    'Fintech',
    'Mobile',
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => {
          const category = getProjectCategory(project.title);
          return category === filter;
        });

  function getProjectCategory(title: string): string {
    return (
      projectCategories[title as keyof typeof projectCategories] || 'Web App'
    );
  }

  function getProjectIcon(title: string): React.ReactNode {
    if (title.includes('BioMark') || title.includes('Vincere Health'))
      return renderIcon(FaHospital);
    if (title.includes('LetzChat')) return renderIcon(FaGlobe);
    if (title.includes('Desert Sign')) return renderIcon(FaPrint);
    if (title.includes('London Riders')) return renderIcon(FaCar);
    if (title.includes('Path Signals')) return renderIcon(FaChartLine);
    return renderIcon(FaLaptopCode);
  }

  return (
    <section id='projects' className='projects section'>
      <div className='container'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className='projects__header' variants={itemVariants}>
            <h2 className='section-title text-center'>Featured Projects</h2>
            <p className='section-subtitle text-center'>
              Showcasing my technical expertise through real-world applications
            </p>
          </motion.div>

          <motion.div className='projects__filters' variants={itemVariants}>
            <div className='filter-tabs'>
              {renderIcon(FaFilter, { className: 'filter-icon' })}
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-tab ${filter === category ? 'filter-tab--active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div className='projects__grid' variants={containerVariants}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className='project-card'
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <div className='project-card__header'>
                  <div className='project-card__icon'>
                    {getProjectIcon(project.title)}
                  </div>
                  <div className='project-card__category'>
                    {getProjectCategory(project.title)}
                  </div>
                </div>

                <div className='project-card__content'>
                  <h3 className='project-card__title'>{project.title}</h3>
                  <p className='project-card__description'>
                    {project.description}
                  </p>

                  <div className='project-card__technologies'>
                    {project.technologies.map((tech) => (
                      <span key={tech} className='tech-tag'>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className='project-card__achievements'>
                    <h4>
                      {renderIcon(FaAward, { className: 'achievements-icon' })}
                      Key Achievements
                    </h4>
                    <ul>
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='project-card__footer'>
                  {project.link && project.link !== '[App Link]' && (
                    <motion.a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-card__link'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {renderIcon(FaExternalLinkAlt)}
                      View Project
                    </motion.a>
                  )}
                  <motion.button
                    className='project-card__code'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.open(
                        'mailto:umair.butt@umairleo.com?subject=Source Code Request&body=Hi, I would like to request access to the source code for this project.',
                        '_blank'
                      );
                    }}
                  >
                    {renderIcon(FaCode)}
                    Source Code
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className='projects__cta' variants={itemVariants}>
            <div className='projects__cta-content'>
              <h3>Interested in working together?</h3>
              <p>
                I'm always open to discussing new opportunities and interesting
                projects.
              </p>
              <motion.button
                className='btn btn-primary'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
