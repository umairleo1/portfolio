import React, { useState } from 'react';
import { projects } from '@/data/portfolio';
import { FaGlobe, FaMobile, FaPlug, FaTools, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import { renderIcon } from '@/utils/IconWrapper';
import '@/styles/components/Work.css';

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web App', 'Mobile', 'API', 'Tool'];
  
  // For now, show all projects since the data structure doesn't include categories
  const filteredProjects = projects;

  const getProjectIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'Web App': renderIcon(FaGlobe),
      'Mobile': renderIcon(FaMobile),
      'API': renderIcon(FaPlug),
      'Tool': renderIcon(FaTools),
      'default': renderIcon(FaLaptopCode)
    };
    return icons[category] || icons.default;
  };

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="work__header" data-aos="fade-up">
          <h2 className="work__title">work</h2>
          <p className="work__subtitle">
            selected projects showcasing my technical expertise
          </p>
        </div>

        <div className="work__filters" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="work__grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="project-card__image">
                <div className="project-icon">{getProjectIcon('Web App')}</div>
                <div className="project-card__overlay">
                  <span className="project-card__view">View Project</span>
                </div>
              </div>
              
              <div className="project-card__content">
                <div className="project-card__category">Web App</div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                
                <div className="project-card__tech">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag">+{project.technologies.length - 4}</span>
                  )}
                </div>
                
                <div className="project-card__links">
                  {project.link && project.link !== "" && project.link !== "[App Link]" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {renderIcon(FaExternalLinkAlt, { className: 'project-link__icon' })}
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