import React from 'react';
import { personalInfo } from '@/data';
import { FaLinkedinIn, FaGithub, FaTwitter, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { renderIcon } from '@/utils/IconWrapper';
import TrackedLink from '@/components/ui/TrackedLink';
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
            <TrackedLink
              href={personalInfo.linkedin}
              className={styles.link}
              linkName='LinkedIn'
              section='footer'
              category='social_links'
            >
              {renderIcon(FaLinkedinIn, { className: styles.icon })}
              linkedin
            </TrackedLink>
            <TrackedLink
              href={personalInfo.github}
              className={styles.link}
              linkName='GitHub'
              section='footer'
              category='social_links'
            >
              {renderIcon(FaGithub, { className: styles.icon })}
              github
            </TrackedLink>
            <TrackedLink
              href={personalInfo.twitter}
              className={styles.link}
              linkName='Twitter'
              section='footer'
              category='social_links'
            >
              {renderIcon(FaTwitter, { className: styles.icon })}
              twitter
            </TrackedLink>
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
