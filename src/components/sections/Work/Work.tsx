import React, { useState } from 'react';
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
  const [activeFilter, setActiveFilter] = useState('All');

  // Analytics hooks
  const { trackProjectInteraction, trackExternalLink } = useAnalytics();
  const sectionRef = useSectionTracking('projects');

  const filters = ['All', 'Web App', 'Mobile', 'API', 'Tool'];

  // For now, show all projects since the data structure doesn't include categories
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

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    trackProjectInteraction('filter_change', 'view', {
      projectCategory: filter.toLowerCase(),
    });
  };

  return (
    <section ref={sectionRef} id='projects' className={styles.work}>
      <div className='container'>
        <div className={styles.header} data-aos='fade-up'>
          <h2 className={`${styles.sectionTitle} chunky-underline`}>
            projects
          </h2>
          <p className={styles.sectionSubtitle}>
            selected projects showcasing my technical expertise
          </p>
        </div>

        <div className={styles.filters} data-aos='fade-up' data-aos-delay='100'>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterBtnActive : ''}`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter.toLowerCase()}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              onMouseEnter={() =>
                handleProjectView(project.title, project.technologies)
              }
            >
              <div className={styles.projectCardImage}>
                <div className='project-icon'>{getProjectIcon('Web App')}</div>
                <div className={styles.projectCardOverlay}>
                  <span className={styles.projectCardView}>View Project</span>
                </div>
              </div>

              <div className={styles.projectCardContent}>
                <div className={styles.projectCardCategory}>Web App</div>
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
    </section>
  );
};

export default Work;
