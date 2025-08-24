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

// External URLs
export const EXTERNAL_URLS = {
  GITHUB: 'https://github.com/umairleo1',
  LINKEDIN: 'https://linkedin.com/in/yourprofile',
  EMAIL: 'mailto:umair.leo17@gmail.com',
} as const;
