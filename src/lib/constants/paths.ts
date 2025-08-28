import { env } from '@/config/env';

// Asset paths constants using React's built-in PUBLIC_URL handling
const getAssetPath = (path: string) => {
  return `${process.env.PUBLIC_URL || ''}${path}`;
};

export const ASSET_PATHS = {
  // Images
  PROFILE_MAIN: getAssetPath('/assets/images/profile-main.jpg'),
  PROFILE_FALLBACK: getAssetPath('/assets/images/profile-fallback.jpg'),

  // Favicons
  FAVICON_ICO: getAssetPath('/assets/favicons/favicon.ico'),
  FAVICON_SVG: getAssetPath('/assets/favicons/favicon.svg'),
} as const;

// Navigation paths
export const NAVIGATION_PATHS = {
  HOME: '#home',
  ABOUT: '#about',
  EXPERIENCE: '#experience',
  PROJECTS: '#projects',
  CONTACT: '#contact',
} as const;

// External URLs - sourced from environment variables
export const EXTERNAL_URLS = {
  GITHUB: env.GITHUB_URL,
  LINKEDIN: env.LINKEDIN_URL,
  EMAIL: `mailto:${env.EMAIL}`,
  TWITTER: env.TWITTER_URL,
  ...(env.STACKOVERFLOW_URL && { STACKOVERFLOW: env.STACKOVERFLOW_URL }),
  ...(env.MEDIUM_URL && { MEDIUM: env.MEDIUM_URL }),
  ...(env.DEV_TO_URL && { DEV_TO: env.DEV_TO_URL }),
} as const;
