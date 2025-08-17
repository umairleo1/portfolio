export * from './paths';

// App constants
export const APP_CONFIG = {
  NAME: 'Muhammad Umair Portfolio',
  DESCRIPTION:
    'Modern React portfolio website showcasing software engineering expertise',
  VERSION: '1.0.0',
  AUTHOR: 'Muhammad Umair',
} as const;

// Animation constants
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
  },
  EASING: {
    DEFAULT: [0.4, 0, 0.2, 1],
    BOUNCE: [0.68, -0.55, 0.265, 1.55],
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;
