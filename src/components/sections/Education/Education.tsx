import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, certifications } from '@/data';
import {
  HiAcademicCap,
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineTrophy,
} from 'react-icons/hi2';
import { renderIcon } from '@/utils/IconWrapper';
import styles from './Education.module.css';

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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id='education' className={`${styles.education} section`}>
      <div className='container'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            className={styles.educationHeader}
            variants={itemVariants}
          >
            <h2 className={`${styles.sectionTitle} chunky-underline`}>
              education & certifications
            </h2>
            <p className={styles.sectionSubtitle}>
              academic foundation and professional achievements
            </p>
          </motion.div>

          <div className={styles.educationContent}>
            <motion.div
              className={styles.educationAcademic}
              variants={itemVariants}
            >
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionHeading}>
                  {renderIcon(HiAcademicCap, { className: styles.sectionIcon })}
                  Academic Education
                </h3>
              </div>

              <div className={styles.educationTimeline}>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className={`${styles.educationItem} card`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.educationItemContent}>
                      <div className={styles.educationItemHeader}>
                        <h4 className={styles.educationItemDegree}>
                          {edu.degree}
                        </h4>
                        <span className={styles.educationItemPeriod}>
                          {renderIcon(HiOutlineCalendarDays)}
                          {edu.period}
                        </span>
                      </div>

                      <div className={styles.educationItemDetails}>
                        <p className={styles.educationItemInstitution}>
                          <strong>{edu.institution}</strong>
                        </p>
                        <p className={styles.educationItemLocation}>
                          {renderIcon(HiOutlineMapPin)}
                          {edu.location}
                        </p>
                        {edu.specialization && (
                          <p className={styles.educationItemSpecialization}>
                            <span className={styles.label}>
                              Specialization:
                            </span>{' '}
                            {edu.specialization}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.educationCertifications}
              variants={itemVariants}
            >
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionHeading}>
                  {renderIcon(HiOutlineTrophy, {
                    className: styles.sectionIcon,
                  })}
                  Professional Certifications
                </h3>
              </div>

              <div className={styles.certificationsGrid}>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className={`${styles.certificationItem} card`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      if (cert.link && cert.link !== '') {
                        window.open(cert.link, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    style={{
                      cursor:
                        cert.link && cert.link !== '' ? 'pointer' : 'default',
                    }}
                    title={
                      cert.link && cert.link !== ''
                        ? `View ${cert.title} certificate`
                        : cert.title
                    }
                  >
                    <div className={styles.certificationItemContent}>
                      <div className={styles.certificationItemHeader}>
                        <div className={styles.certificationIcon}>
                          {renderIcon(HiOutlineTrophy)}
                        </div>
                        <div className={styles.certificationInfo}>
                          <h4 className={styles.certificationItemTitle}>
                            {cert.title}
                          </h4>
                          <p className={styles.certificationItemIssuer}>
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      {cert.date && (
                        <p className={styles.certificationItemDate}>
                          {renderIcon(HiOutlineCalendarDays)}
                          {cert.date}
                        </p>
                      )}
                    </div>
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
