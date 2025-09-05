/**
 * Centralized Animation Variants and Constants
 *
 * Common animation patterns used across components to maintain consistency
 * and reduce duplication. All animations follow the same easing curve for
 * a cohesive user experience.
 */

// Standard easing curve used throughout the application
export const EASING = [0.4, 0, 0.2, 1] as const;

// Standard animation durations
export const DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
} as const;

// Common card animation variants
export const cardAnimations = {
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: DURATIONS.fast,
      ease: EASING,
    },
  },
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.slow,
      ease: EASING,
    },
  },
} as const;

// Staggered animation helper
export const getStaggeredDelay = (index: number, baseDelay: number = 0.1) => ({
  delay: index * baseDelay,
});

// Icon animation variants
export const iconAnimations = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: DURATIONS.fast,
      ease: EASING,
    },
  },
} as const;

// Badge/tag animation variants
export const badgeAnimations = {
  hover: {
    scale: 1.05,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING,
    },
  },
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING,
    },
  },
} as const;

// CSS animation class names for non-Framer Motion animations
export const CSS_ANIMATIONS = {
  slideInUp: 'slideInUp',
  fadeIn: 'fadeIn',
  scaleIn: 'scaleIn',
} as const;

// CSS animation timing for consistency with JS animations
export const CSS_TIMING = {
  duration: `${DURATIONS.slow}s`,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;
