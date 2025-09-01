import React from 'react';
import { projects } from '@/data';
import {
  FaGlobe,
  FaMobile,
  FaPlug,
  FaTools,
  FaLaptopCode,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { renderIcon } from '@/utils/IconWrapper';
import { useAnalytics, useSectionTracking } from '@/hooks/useAnalytics';
import styles from './Work.module.css';

const Work: React.FC = () => {
  // Analytics hooks
  const { trackProjectInteraction, trackExternalLink } = useAnalytics();
  const sectionRef = useSectionTracking('projects');

  // Note: Filtering functionality can be implemented when project categories are added to data
  const filteredProjects = projects;

  const getProjectIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'Web App': renderIcon(FaGlobe),
      Mobile: renderIcon(FaMobile),
      API: renderIcon(FaPlug),
      Tool: renderIcon(FaTools),
      default: renderIcon(FaLaptopCode),
    };
    return icons[category] || icons.default;
  };

  // Handle project card interactions
  const handleProjectView = (projectTitle: string, technologies: string[]) => {
    trackProjectInteraction(projectTitle, 'view', {
      projectCategory: 'web',
      technologies,
    });
  };

  const handleProjectClick = (
    projectTitle: string,
    url: string,
    technologies: string[]
  ) => {
    trackProjectInteraction(projectTitle, 'click_demo', {
      projectCategory: 'web',
      technologies,
      projectUrl: url,
    });
    trackExternalLink(url, projectTitle, 'projects_section', 'project_demo');
  };

  return (
    <section ref={sectionRef} id='projects' className={styles.work}>
      <div className='container'>
        <div>
          <div className={styles.header}>
            <h2 className={`${styles.sectionTitle} chunky-underline`}>
              projects
            </h2>
            <p className={styles.sectionSubtitle}>
              selected projects showcasing my technical expertise
            </p>
          </div>

          {/* Note: Filter buttons removed until project categorization is implemented */}

          <div className={styles.grid}>
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={styles.projectCard}
                onMouseEnter={() =>
                  handleProjectView(project.title, project.technologies)
                }
              >
                <div className={styles.projectCardImage}>
                  <div className='project-icon'>
                    {getProjectIcon('default')}
                  </div>
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
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={styles.projectLink}
                          onClick={() =>
                            handleProjectClick(
                              project.title,
                              project.link,
                              project.technologies
                            )
                          }
                        >
                          {renderIcon(FaExternalLinkAlt, {
                            className: styles.projectLinkIcon,
                          })}
                          view project
                        </a>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
