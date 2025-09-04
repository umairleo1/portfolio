import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useSectionTracking, useAnalytics } from '@/hooks/useAnalytics';
import { education, certifications } from '@/data';
import type { Certification } from '@/data/types';
import {
  HiAcademicCap,
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineTrophy,
} from 'react-icons/hi2';
import { renderIcon } from '@/utils/IconWrapper';
import styles from './Education.module.css';

const Education: React.FC = () => {
  const sectionRef = useSectionTracking('education');
  const { trackExternalLink } = useAnalytics();

  const handleCertificateClick = useCallback(
    (cert: Certification) => {
      if (cert.link && cert.link !== '') {
        trackExternalLink(
          cert.link,
          cert.title,
          'education_certificate',
          'certifications_grid'
        );
        window.open(cert.link, '_blank', 'noopener,noreferrer');
      }
    },
    [trackExternalLink]
  );

  return (
    <section
      ref={sectionRef}
      id='education'
      className={`${styles.education} section`}
    >
      <div className='container'>
        <div>
          <div className={styles.educationHeader}>
            <h2 className={`${styles.sectionTitle} chunky-underline`}>
              education & certifications
            </h2>
            <p className={styles.sectionSubtitle}>
              academic foundation and professional achievements
            </p>
          </div>

          <div className={styles.educationContent}>
            <div className={styles.educationAcademic}>
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
                    whileHover={{ scale: 1.02, y: -8 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={styles.degreeLevel}>
                      {edu.degree.includes('MSc') ? "MASTER'S" : "BACHELOR'S"}
                    </div>
                    <div className={styles.particles}></div>
                    <div className={styles.educationItemHint}>
                      ✨ hover to explore
                    </div>
                    <div className={styles.educationItemContent}>
                      <div className={styles.educationItemHeader}>
                        <h4 className={styles.educationItemDegree}>
                          {edu.degree}
                        </h4>
                        <div className={styles.educationItemPeriod}>
                          {renderIcon(HiOutlineCalendarDays)}
                          {edu.period}
                        </div>
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

                        <div className={styles.educationExpandedContent}>
                          <div className={styles.educationSkills}>
                            {edu.degree.includes('MSc') ? (
                              <>
                                <span className={styles.educationSkill}>
                                  Machine Learning
                                </span>
                                <span className={styles.educationSkill}>
                                  Data Visualization
                                </span>
                                <span className={styles.educationSkill}>
                                  Big Data
                                </span>
                                <span className={styles.educationSkill}>
                                  Anti Money Laundering
                                </span>
                                <span className={styles.educationSkill}>
                                  Python
                                </span>
                                <span className={styles.educationSkill}>R</span>
                              </>
                            ) : (
                              <>
                                <span className={styles.educationSkill}>
                                  Mobile Development
                                </span>
                                <span className={styles.educationSkill}>
                                  Web Technologies
                                </span>
                                <span className={styles.educationSkill}>
                                  Artificial Intelligence
                                </span>
                                <span className={styles.educationSkill}>
                                  Software Engineering
                                </span>
                                <span className={styles.educationSkill}>
                                  Java
                                </span>
                                <span className={styles.educationSkill}>
                                  JavaScript
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.educationCertifications}>
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
                    whileHover={{ scale: 1.02, y: -8 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => handleCertificateClick(cert)}
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
                    {cert.link && cert.link !== '' && (
                      <div className={styles.verifiedBadge}>VERIFIED</div>
                    )}
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
                        {cert.date && (
                          <p className={styles.certificationItemDate}>
                            {cert.date}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
