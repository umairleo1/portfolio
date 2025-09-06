import React from 'react';
import { projects } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import { FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import { renderIcon } from '@/utils/IconWrapper';
import { useAnalytics } from '@/hooks';
import TrackedLink from '@/components/ui/TrackedLink';
import Section from '@/components/ui/Section';
import styles from './Work.module.css';

const Work: React.FC = () => {
  // Analytics hooks
  const { trackProjectInteraction } = useAnalytics();

  // Handle project card interactions
  const handleProjectClick = (projectTitle: string, technologies: string[]) => {
    trackProjectInteraction(projectTitle, 'view', {
      projectCategory: 'web',
      technologies,
    });
  };

  const handleProjectLinkClick = (
    projectTitle: string,
    technologies: string[]
  ) => {
    trackProjectInteraction(projectTitle, 'click_demo', {
      projectCategory: 'web',
      technologies,
    });
  };

  return (
    <Section id='projects' className='darkBg'>
      <SectionHeader
        title='projects'
        subtitle='selected projects showcasing my technical expertise'
      />

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            onClick={() =>
              handleProjectClick(project.title, project.technologies)
            }
          >
            <div className={styles.projectCardImage}>
              <div className='project-icon'>{renderIcon(FaLaptopCode)}</div>
              <div className={styles.projectCardOverlay}>
                <span className={styles.projectCardView}>View Project</span>
              </div>
            </div>

            <div className={styles.projectCardContent}>
              <div className={styles.projectCardCategory}>Project</div>
              <h3 className={styles.projectCardTitle}>{project.title}</h3>
              <p className={styles.projectCardDescription}>
                {project.description}
              </p>

              <div className={styles.projectCardTech}>
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className={styles.techTag}>
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              <div className={styles.projectCardLinks}>
                {project.link &&
                  project.link !== '' &&
                  project.link !== '[App Link]' && (
                    <TrackedLink
                      href={project.link}
                      className={styles.projectLink}
                      linkName={project.title}
                      section='projects_section'
                      category='project_demo'
                      onClick={() =>
                        handleProjectLinkClick(
                          project.title,
                          project.technologies
                        )
                      }
                    >
                      {renderIcon(FaExternalLinkAlt, {
                        className: styles.projectLinkIcon,
                      })}
                      view project
                    </TrackedLink>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Work;
