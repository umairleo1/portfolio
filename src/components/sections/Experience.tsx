import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience, companies } from '@/data/portfolio';
import { HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { renderIcon } from '@/utils/IconWrapper';
import '@/styles/components/Experience.css';

const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([0]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getTechSkills = (company: string) => {
    const companyData = companies.find((c) => c.name === company);
    return (
      companyData?.skills || ['JavaScript', 'TypeScript', 'React', 'Node.js']
    );
  };

  const getCompanyWebsite = (company: string) => {
    const companyData = companies.find((c) => c.name === company);
    return companyData?.website || '#';
  };

  return (
    <section id='experience' className='experience'>
      <div className='container'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className='experience__header' variants={itemVariants}>
            <h1 className='experience__title'>Professional Experience</h1>
          </motion.div>

          <div className='experience__accordion'>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className='experience__card'
                variants={itemVariants}
              >
                <div
                  className='experience__card-header'
                  onClick={() => toggleExpanded(index)}
                >
                  <div className='experience__header-left'>
                    <h3 className='experience__job-title'>{item.title}</h3>
                    <span className='experience__company-name'>
                      {item.company}
                    </span>
                  </div>
                  <div className='experience__header-right'>
                    <span className='experience__date-range'>
                      {item.period}
                    </span>
                    <div className='experience__expand-icon'>
                      {expandedItems.includes(index) ? '−' : '+'}
                    </div>
                  </div>
                </div>

                <div
                  className={`experience__card-content ${expandedItems.includes(index) ? 'expanded' : ''}`}
                >
                  <div className='experience__content-inner'>
                    <div className='experience__location'>
                      {renderIcon(HiLocationMarker, {
                        className: 'experience__icon',
                      })}
                      {item.location}
                    </div>

                    <div className='experience__website'>
                      {renderIcon(HiExternalLink, {
                        className: 'experience__icon',
                      })}
                      <a
                        href={getCompanyWebsite(item.company)}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item.company} Website
                        {renderIcon(HiExternalLink, {
                          className: 'external-link-icon',
                        })}
                      </a>
                    </div>

                    {item.achievements && item.achievements.length > 0 && (
                      <div className='experience__description'>
                        <h4>Role Description & Key Achievements:</h4>
                        <ul className='experience__achievements'>
                          {item.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className='experience__achievement'
                              >
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    <div className='experience__tech-skills'>
                      <h4>Technologies & Skills:</h4>
                      <div className='experience__badges'>
                        {getTechSkills(item.company).map(
                          (skill, skillIndex) => (
                            <span key={skillIndex} className='tech-badge'>
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
