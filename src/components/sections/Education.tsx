import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, certifications } from '@/data/portfolio';
import {
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { renderIcon } from '@/utils/IconWrapper';
import '@/styles/components/Education.css';

const Education: React.FC = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id='education' className='education section'>
      <div className='container'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className='education__header' variants={itemVariants}>
            <h2 className='section-title chunky-underline'>
              education & certifications
            </h2>
            <p className='section-subtitle'>
              academic foundation and professional achievements
            </p>
          </motion.div>

          <div className='education__content'>
            <motion.div className='education__academic' variants={itemVariants}>
              <div className='section-header'>
                <h3 className='section-subtitle-alt'>
                  {renderIcon(FaGraduationCap, { className: 'section-icon' })}
                  academic background
                </h3>
              </div>

              <div className='education-timeline'>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className='education-item card'
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='education-item__content'>
                      <div className='education-item__header'>
                        <h4 className='education-item__degree'>{edu.degree}</h4>
                        <span className='education-item__period'>
                          {renderIcon(FaCalendarAlt)}
                          {edu.period}
                        </span>
                      </div>

                      <div className='education-item__details'>
                        <p className='education-item__institution'>
                          <strong>{edu.institution}</strong>
                        </p>
                        <p className='education-item__location'>
                          {renderIcon(FaMapMarkerAlt)}
                          {edu.location}
                        </p>
                        {edu.specialization && (
                          <p className='education-item__specialization'>
                            <span className='label'>Specialization:</span>{' '}
                            {edu.specialization}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='education-item__decoration'></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className='education__certifications'
              variants={itemVariants}
            >
              <div className='section-header'>
                <h3 className='section-subtitle-alt'>
                  {renderIcon(FaAward, { className: 'section-icon' })}
                  certifications & awards
                </h3>
              </div>

              <div className='certifications-grid'>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className='certification-item card'
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='certification-item__content'>
                      <div className='certification-item__header'>
                        <div className='certification-icon'>
                          {renderIcon(FaAward)}
                        </div>
                        <div className='certification-info'>
                          <h4 className='certification-item__title'>
                            {cert.title}
                          </h4>
                          <p className='certification-item__issuer'>
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      {cert.date && (
                        <p className='certification-item__date'>
                          {renderIcon(FaCalendarAlt)}
                          {cert.date}
                        </p>
                      )}
                    </div>
                    <div className='certification-item__glow'></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
