import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSectionTracking } from '@/hooks/useAnalytics';
import { experience, companies } from '@/data';
import { HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { renderIcon } from '@/utils/IconWrapper';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const sectionRef = useSectionTracking('experience');
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
    <section ref={sectionRef} id='experience' className={styles.experience}>
      <div className='container'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <h2 className={`${styles.sectionTitle} chunky-underline`}>
              professional experience
            </h2>
            <p className={styles.sectionSubtitle}>
              career journey and key achievements
            </p>
          </motion.div>

          <div className={styles.accordion}>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                variants={itemVariants}
              >
                <div
                  className={styles.cardHeader}
                  onClick={() => toggleExpanded(index)}
                >
                  <div className={styles.headerLeft}>
                    <h3 className={styles.jobTitle}>{item.title}</h3>
                    <span className={styles.companyName}>{item.company}</span>
                  </div>
                  <div className={styles.headerRight}>
                    <span className={styles.dateRange}>{item.period}</span>
                    <div className={styles.expandIcon}>
                      {expandedItems.includes(index) ? '−' : '+'}
                    </div>
                  </div>
                </div>

                <div
                  className={`${styles.cardContent} ${expandedItems.includes(index) ? styles.expanded : ''}`}
                >
                  <div className={styles.contentInner}>
                    <div className={styles.location}>
                      {renderIcon(HiLocationMarker, {
                        className: styles.icon,
                      })}
                      {item.location}
                    </div>

                    <div className={styles.website}>
                      {renderIcon(HiExternalLink, {
                        className: styles.icon,
                      })}
                      <a
                        href={getCompanyWebsite(item.company)}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item.company} Website
                        {renderIcon(HiExternalLink, {
                          className: styles.externalLinkIcon,
                        })}
                      </a>
                    </div>

                    {item.achievements && item.achievements.length > 0 && (
                      <div className={styles.description}>
                        <h4>Role Description & Key Achievements:</h4>
                        <ul className={styles.achievements}>
                          {item.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className={styles.achievement}
                              >
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    <div className={styles.techSkills}>
                      <h4>Technologies & Skills:</h4>
                      <div className={styles.badges}>
                        {getTechSkills(item.company).map(
                          (skill, skillIndex) => (
                            <span key={skillIndex} className={styles.techBadge}>
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
