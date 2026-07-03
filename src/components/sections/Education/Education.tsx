import React from 'react';
import { useExpandable } from '@/hooks';
import { education, certifications } from '@/data';
import TrackedLink from '@/components/ui/TrackedLink';
import SectionHeader from '@/components/ui/SectionHeader';
import Section from '@/components/ui/Section';
import {
  HiAcademicCap,
  HiArrowUpRight,
  HiCheckBadge,
  HiOutlineCalendarDays,
  HiOutlineCheckBadge,
  HiOutlineMapPin,
  HiOutlineSparkles,
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
              <div
                key={index}
                className={`${styles.certificationItem} card`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {cert.link ? (
                  <div className={styles.verifiedBadge}>
                    {renderIcon(HiCheckBadge)}
                    verified
                  </div>
                ) : (
                  <div className={styles.awardBadge}>
                    {renderIcon(HiOutlineSparkles)}
                    award
                  </div>
                )}
                <div className={styles.certificationItemHeader}>
                  <div className={styles.certificationIcon}>
                    {renderIcon(
                      cert.link ? HiOutlineCheckBadge : HiOutlineTrophy
                    )}
                  </div>
                  <div className={styles.certificationInfo}>
                    <h4 className={styles.certificationItemTitle}>
                      {cert.title}
                    </h4>
                    <div className={styles.certificationMeta}>
                      <span className={styles.certificationItemIssuer}>
                        {cert.issuer}
                      </span>
                      {cert.date && (
                        <span className={styles.certificationItemDate}>
                          {cert.date}
                        </span>
                      )}
                    </div>
                    {cert.link && (
                      <TrackedLink
                        href={cert.link}
                        linkName={cert.title}
                        section='education_section'
                        category='certification_link'
                        className={styles.certificationLink}
                      >
                        view credential
                        {renderIcon(HiArrowUpRight, {
                          className: styles.certificationLinkIcon,
                        })}
                      </TrackedLink>
                    )}
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
