import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { FaLinkedinIn, FaGithub, FaTwitter, FaReact } from 'react-icons/fa';
import { SiThreedotjs, SiTypescript } from 'react-icons/si';
import { renderIcon } from '@/utils/IconWrapper';
import '@/styles/components/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer' id='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__main'>
            <h3 className='footer__title'>Thanks for visiting!</h3>
            <p className='footer__message'>
              Let's build something amazing together. Feel free to reach out.
            </p>
          </div>

          <div className='footer__links'>
            <a href={`mailto:${personalInfo.email}`} className='footer__link'>
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='footer__link'
            >
              {renderIcon(FaLinkedinIn, { className: 'footer__icon' })}
              linkedin
            </a>
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='footer__link'
            >
              {renderIcon(FaGithub, { className: 'footer__icon' })}
              github
            </a>
            <a
              href={personalInfo.twitter}
              target='_blank'
              rel='noopener noreferrer'
              className='footer__link'
            >
              {renderIcon(FaTwitter, { className: 'footer__icon' })}
              twitter
            </a>
          </div>

          <div className='footer__bottom'>
            <p className='footer__text'>
              © {currentYear} {personalInfo.name.toLowerCase()}. built with
              react, typescript & three.js.
            </p>
            <div className='footer__tech'>
              {renderIcon(FaReact, { className: 'tech-icon', title: 'React' })}
              {renderIcon(SiTypescript, {
                className: 'tech-icon',
                title: 'TypeScript',
              })}
              {renderIcon(SiThreedotjs, {
                className: 'tech-icon',
                title: 'Three.js',
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
