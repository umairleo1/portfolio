// Asset paths constants
export const ASSET_PATHS = {
  // Images
  PROFILE_PICTURE: `${process.env.PUBLIC_URL}/assets/images/profile-picture.jpg`,
  PROFILE_AVATAR: `${process.env.PUBLIC_URL}/assets/images/profile-avatar.jpg`,

  // Icons
  LOGO_192: `${process.env.PUBLIC_URL}/assets/icons/logo192.png`,
  LOGO_512: `${process.env.PUBLIC_URL}/assets/icons/logo512.png`,

  // Favicons
  FAVICON_ICO: `${process.env.PUBLIC_URL}/assets/favicons/favicon.ico`,
  FAVICON_SVG: `${process.env.PUBLIC_URL}/assets/favicons/favicon.svg`,

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
