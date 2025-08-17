import React from 'react';
import { skills } from '@/data/portfolio';
import { FaReact, FaServer, FaCloud, FaTools } from 'react-icons/fa';
import { renderIcon } from '@/utils/IconWrapper';
import '@/styles/components/Expertise.css';

const Expertise: React.FC = () => {
  const categories = [
    {
      icon: renderIcon(FaReact),
      title: 'Frontend Development',
      description:
        'Creating responsive and interactive user interfaces with modern technologies',
      skills: skills.frontEnd,
    },
    {
      icon: renderIcon(FaServer),
      title: 'Backend Development',
      description: 'Building scalable server-side applications and APIs',
      skills: skills.backEnd,
    },
    {
      icon: renderIcon(FaCloud),
      title: 'Cloud & Infrastructure',
      description: 'Managing cloud infrastructure and deployment',
      skills: skills.cloudAndIaC,
    },
    {
      icon: renderIcon(FaTools),
      title: 'DevOps & Monitoring',
      description: 'CI/CD pipelines and system observability',
      skills: skills.devOpsAndObservability,
    },
  ];

  const stats = [
    { value: '3+', label: 'years experience' },
    { value: '20+', label: 'projects completed' },
    { value: '10+', label: 'technologies mastered' },
    { value: '100%', label: 'client satisfaction' },
  ];

  return (
    <section id='expertise' className='expertise'>
      <div className='container'>
        <div className='expertise__header' data-aos='fade-up'>
          <h2 className='expertise__title'>expertise</h2>
          <p className='expertise__subtitle'>
            specialized in modern web technologies and full-stack development
          </p>
        </div>

        <div className='expertise__content'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='expertise__category'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <span className='expertise__category-icon'>{category.icon}</span>
              <h3 className='expertise__category-title'>{category.title}</h3>
              <p className='expertise__category-description'>
                {category.description}
              </p>
              <div className='expertise__skills'>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className='skill-tag'
                    data-aos='fade-in'
                    data-aos-delay={index * 100 + skillIndex * 50}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className='expertise__stats'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className='stat-item'
              data-aos='zoom-in'
              data-aos-delay={index * 100}
            >
              <div className='stat-item__value'>{stat.value}</div>
              <div className='stat-item__label'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
