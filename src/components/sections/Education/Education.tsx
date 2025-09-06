import React from 'react';
import { useExpandable } from '@/hooks';
import { education, certifications } from '@/data';
import TrackedLink from '@/components/ui/TrackedLink';
import SectionHeader from '@/components/ui/SectionHeader';
import Section from '@/components/ui/Section';
import {
  HiAcademicCap,
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineTrophy,
} from 'react-icons/hi2';
import { renderIcon } from '@/utils/IconWrapper';
import styles from './Education.module.css';

const Education: React.FC = () => {
  const { isExpanded: isEducationExpanded, toggle: toggleEducation } =
    useExpandable();

  return (
    <Section id='education' className={`${styles.education} darkBg section`}>
      <SectionHeader
        title='education & certifications'
        subtitle='academic foundation and professional achievements'
      />

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
              <div key={index} className={styles.educationWrapper}>
                <div className={styles.degreeLevel}>{edu.level}</div>
                <div
                  className={`${styles.educationItem} card ${isEducationExpanded(index) ? styles.expanded : ''}`}
                  onClick={() => toggleEducation(index)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className={styles.particles}></div>
                  <div className={styles.educationItemHint}>
                    <span className={styles.mobileText}>
                      {isEducationExpanded(index)
                        ? '✨ tap to collapse'
                        : '✨ tap to explore'}
                    </span>
                    <span className={styles.desktopText}>
                      ✨ hover to explore
                    </span>
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
                          <span className={styles.label}>Specialization:</span>{' '}
                          {edu.specialization}
                        </p>
                      )}

                      <div className={styles.educationExpandedContent}>
                        <div className={styles.educationSkills}>
                          {edu.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className={styles.educationSkill}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div key={index} className={styles.certificationWrapper}>
                {cert.link && (
                  <div className={styles.verifiedBadge}>VERIFIED</div>
                )}
                <div
                  className={`${styles.certificationItem} card`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className={styles.certificationItemHeader}>
                    <div className={styles.certificationIcon}>
                      {renderIcon(HiOutlineTrophy)}
                    </div>
                    <div className={styles.certificationInfo}>
                      {cert.link ? (
                        <TrackedLink
                          href={cert.link}
                          linkName={cert.title}
                          section='education_section'
                          category='certification_link'
                        >
                          <h4 className={styles.certificationItemTitle}>
                            {cert.title}
                          </h4>
                        </TrackedLink>
                      ) : (
                        <h4 className={styles.certificationItemTitle}>
                          {cert.title}
                        </h4>
                      )}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
