import type { AppConfig } from '../types';
import { env } from '@/config/env';
import { personalInfo } from '../personal/info';

/**
 * Application configuration including navigation, social links, and SEO
 * Used throughout the application for consistent configuration
 * Values are sourced from environment variables for security and flexibility
 */
export const appConfig: AppConfig = {
  resume: {
    url: env.RESUME_URL,
    downloadUrl: env.RESUME_DOWNLOAD_URL,
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
    github: env.GITHUB_URL,
    linkedin: env.LINKEDIN_URL,
    twitter: env.TWITTER_URL,
    email: env.EMAIL,
    ...(env.STACKOVERFLOW_URL && { stackoverflow: env.STACKOVERFLOW_URL }),
    ...(env.MEDIUM_URL && { medium: env.MEDIUM_URL }),
    ...(env.DEV_TO_URL && { devTo: env.DEV_TO_URL }),
  },
  seo: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: env.SEO_DESCRIPTION || personalInfo.objective,
    keywords: env.SEO_KEYWORDS
      ? env.SEO_KEYWORDS.split(',').map((k) => k.trim())
      : [
          'Software Engineer',
          'React Developer',
          'Python Developer',
          'AWS',
          'TypeScript',
          'Full Stack Developer',
        ],
  },
};
