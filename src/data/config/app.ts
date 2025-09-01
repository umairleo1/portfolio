import type { AppConfig } from '../types';
import { personalInfo } from '../personal/info';

/**
 * Application configuration including navigation, social links, and SEO
 * Used throughout the application for consistent configuration
 * Public configuration that's used across the portfolio website
 */
export const appConfig: AppConfig = {
  resume: {
    url: 'https://www.overleaf.com/read/wjrbmcpzjgnq#8d4ec7',
    downloadUrl: '/resume.pdf',
  },
  navigation: {
    items: [
      { label: 'skills', href: '#skills' },
      { label: 'education', href: '#education' },
      { label: 'projects', href: '#projects' },
      { label: 'experience', href: '#experience' },
      { label: 'contact', href: '#contact' },
    ],
  },
  social: {
    github: personalInfo.github,
    linkedin: personalInfo.linkedin,
    twitter: personalInfo.twitter,
    email: personalInfo.email,
  },
  seo: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description:
      'Experienced Software Engineer based in London, UK. Passionate about building scalable, high-performance applications and turning innovative ideas into robust software solutions.',
    keywords: [
      'Software Engineer',
      'React Developer',
      'Python Developer',
      'AWS',
      'TypeScript',
      'Full Stack Developer',
      'London',
      'UK',
    ],
  },
};
