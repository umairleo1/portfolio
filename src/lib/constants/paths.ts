// Asset paths constants
// For GitHub Pages deployment, we use the base path from package.json homepage
const getAssetPath = (path: string) => {
  // In production (GitHub Pages), use /portfolio prefix
  if (process.env.NODE_ENV === 'production') {
    return `/portfolio${path}`;
  }
  // In development, use process.env.PUBLIC_URL or fallback to root
  return `${process.env.PUBLIC_URL || ''}${path}`;
};

export const ASSET_PATHS = {
  // Images
  PROFILE_PICTURE: getAssetPath('/assets/images/profile-picture.jpg'),
  PROFILE_AVATAR: getAssetPath('/assets/images/profile-avatar.jpg'),

  // Icons
  LOGO_192: getAssetPath('/assets/icons/logo192.png'),
  LOGO_512: getAssetPath('/assets/icons/logo512.png'),

  // Favicons
  FAVICON_ICO: getAssetPath('/assets/favicons/favicon.ico'),
  FAVICON_SVG: getAssetPath('/assets/favicons/favicon.svg'),

  // SVG Assets
  REACT_LOGO: '@/assets/svg/logos/react-logo.svg',
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
