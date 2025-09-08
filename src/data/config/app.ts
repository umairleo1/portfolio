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
    title:
      process.env.REACT_APP_SITE_NAME ||
      `${personalInfo.name} - ${personalInfo.title}`,
    url:
      process.env.REACT_APP_SITE_URL ||
      'https://umairleo1.github.io/portfolio/',
    domain: process.env.REACT_APP_SITE_DOMAIN || 'umairleo1.github.io',
    description:
      'Full-Stack Software Engineer | React • Python • AWS. Delivered 50+ high-performance applications, reduced load times by 60%, and architected systems serving 1M+ users. Available for exciting opportunities.',
    keywords: [
      'Software Engineer',
      'React Native Developer',
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
