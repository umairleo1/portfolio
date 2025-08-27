import React from 'react';
import { personalInfo } from '@/data';
import { FaLinkedinIn, FaGithub, FaTwitter, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { renderIcon } from '@/utils/IconWrapper';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id='footer'>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.main}>
            <h3 className={styles.title}>Thanks for visiting!</h3>
            <p className={styles.message}>
              Let's build something amazing together. Feel free to reach out.
            </p>
          </div>

          <div className={styles.links}>
            <a href={`mailto:${personalInfo.email}`} className={styles.link}>
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              {renderIcon(FaLinkedinIn, { className: styles.icon })}
              linkedin
            </a>
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              {renderIcon(FaGithub, { className: styles.icon })}
              github
            </a>
            <a
              href={personalInfo.twitter}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              {renderIcon(FaTwitter, { className: styles.icon })}
              twitter
            </a>
          </div>

          <div className={styles.bottom}>
            <p className={styles.text}>
              © {currentYear} {personalInfo.name.toLowerCase()}. built with
              react & typescript.
            </p>
            <div className={styles.tech}>
              {renderIcon(FaReact, {
                className: styles.techIcon,
                title: 'React',
              })}
              {renderIcon(SiTypescript, {
                className: styles.techIcon,
                title: 'TypeScript',
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
