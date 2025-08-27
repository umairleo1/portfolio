import type { AppConfig } from '../types';
import { personalInfo } from '../personal/info';

/**
 * Application configuration including navigation, social links, and SEO
 * Used throughout the application for consistent configuration
 */
export const appConfig: AppConfig = {
  resume: {
    url: 'https://www.overleaf.com/read/cvskqhhwffsm#9221f8',
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
    description: personalInfo.objective,
    keywords: [
      'Software Engineer',
      'React Developer',
      'Python Developer',
      'AWS',
      'TypeScript',
      'Full Stack Developer',
    ],
  },
};
