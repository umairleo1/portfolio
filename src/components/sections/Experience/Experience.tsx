import React from 'react';
import { useExpandable } from '@/hooks';
import { experience, companies } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import Section from '@/components/ui/Section';
import TrackedLink from '@/components/ui/TrackedLink';
import { HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { renderIcon } from '@/utils/IconWrapper';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  const { isExpanded, toggle } = useExpandable({
    mode: 'multiple',
    initialExpanded: [0],
  });

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
    <Section id='experience' className='darkBg'>
      <SectionHeader
        title='professional experience'
        subtitle='career journey and key achievements'
      />

      <div className={styles.accordion}>
        {experience.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader} onClick={() => toggle(index)}>
              <div className={styles.headerLeft}>
                <h3 className={styles.jobTitle}>{item.title}</h3>
                <span className={styles.companyName}>{item.company}</span>
              </div>
              <div className={styles.headerRight}>
                <span className={styles.dateRange}>{item.period}</span>
                <div className={styles.expandIcon}>
                  {isExpanded(index) ? '−' : '+'}
                </div>
              </div>
            </div>

            <div
              className={`${styles.cardContent} ${isExpanded(index) ? styles.expanded : ''}`}
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
                  <TrackedLink
                    href={getCompanyWebsite(item.company)}
                    linkName={`${item.company} Website`}
                    section='experience_section'
                    category='company_website'
                  >
                    {item.company} Website
                    {renderIcon(HiExternalLink, {
                      className: styles.externalLinkIcon,
                    })}
                  </TrackedLink>
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
                    {getTechSkills(item.company).map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.techBadge}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
