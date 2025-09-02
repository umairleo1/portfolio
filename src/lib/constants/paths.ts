import { personalInfo } from '@/data/personal/info';

// Asset paths constants using React's built-in PUBLIC_URL handling
export const getAssetPath = (path: string) => {
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

// External URLs - sourced from personal info data
export const EXTERNAL_URLS = {
  GITHUB: personalInfo.github,
  LINKEDIN: personalInfo.linkedin,
  EMAIL: `mailto:${personalInfo.email}`,
  TWITTER: personalInfo.twitter,
} as const;
