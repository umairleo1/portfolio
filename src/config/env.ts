// Environment configuration
export const env = {
  // App Configuration
  APP_NAME:
    process.env.REACT_APP_NAME ||
    'Muhammad Umair - Software Engineer Portfolio',
  APP_VERSION: process.env.REACT_APP_VERSION || '1.0.0',
  APP_ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT || 'development',
  APP_DESCRIPTION:
    process.env.REACT_APP_DESCRIPTION ||
    'Modern React portfolio website showcasing software engineering expertise',
  APP_AUTHOR: process.env.REACT_APP_AUTHOR || 'Muhammad Umair',
  APP_LOCATION: process.env.REACT_APP_LOCATION || 'London, United Kingdom',

  // Personal Information
  FULL_NAME: process.env.REACT_APP_FULL_NAME || 'Muhammad Umair',
  PROFESSIONAL_TITLE:
    process.env.REACT_APP_PROFESSIONAL_TITLE || 'Software Engineer',
  EMAIL: process.env.REACT_APP_EMAIL || '',
  PHONE: process.env.REACT_APP_PHONE || '',

  // Analytics & Tracking
  GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GOOGLE_ANALYTICS_ID || '',
  GTM_ID: process.env.REACT_APP_GTM_ID || '',
  CLARITY_ID: process.env.REACT_APP_CLARITY_ID || '',

  // Contact Form Services
  EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  EMAILJS_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
  FORMSPREE_ENDPOINT: process.env.REACT_APP_FORMSPREE_ENDPOINT || '',

  // Social Media & Professional Links
  GITHUB_USERNAME: process.env.REACT_APP_GITHUB_USERNAME || '',
  GITHUB_URL: process.env.REACT_APP_GITHUB_URL || '',
  LINKEDIN_URL: process.env.REACT_APP_LINKEDIN_URL || '',
  TWITTER_URL: process.env.REACT_APP_TWITTER_URL || '',
  STACKOVERFLOW_URL: process.env.REACT_APP_STACKOVERFLOW_URL || '',
  MEDIUM_URL: process.env.REACT_APP_MEDIUM_URL || '',
  DEV_TO_URL: process.env.REACT_APP_DEV_TO_URL || '',

  // Resume & Portfolio Assets
  RESUME_URL: process.env.REACT_APP_RESUME_URL || '',
  RESUME_DOWNLOAD_URL:
    process.env.REACT_APP_RESUME_DOWNLOAD_URL || '/resume.pdf',
  PORTFOLIO_REPO: process.env.REACT_APP_PORTFOLIO_REPO || '',

  // API Integrations
  GITHUB_TOKEN: process.env.REACT_APP_GITHUB_TOKEN || '',
  DEVTO_API_KEY: process.env.REACT_APP_DEVTO_API_KEY || '',
  MEDIUM_RSS_URL: process.env.REACT_APP_MEDIUM_RSS_URL || '',

  // SEO & Metadata
  SEO_KEYWORDS: process.env.REACT_APP_SEO_KEYWORDS || '',
  SEO_DESCRIPTION: process.env.REACT_APP_SEO_DESCRIPTION || '',
  CANONICAL_URL: process.env.REACT_APP_CANONICAL_URL || '',

  // Security & Privacy
  CSP_REPORT_URI: process.env.REACT_APP_CSP_REPORT_URI || '',
  SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN || '',

  // Performance & Monitoring
  WEB_VITALS_ENDPOINT: process.env.REACT_APP_WEB_VITALS_ENDPOINT || '',
  PERFORMANCE_API_ENDPOINT:
    process.env.REACT_APP_PERFORMANCE_API_ENDPOINT || '',

  // Development Tools
  ENABLE_DEBUG_MODE: process.env.REACT_APP_ENABLE_DEBUG_MODE === 'true',
  ENABLE_PERFORMANCE_MONITORING:
    process.env.REACT_APP_ENABLE_PERFORMANCE_MONITORING === 'true',
  ENABLE_ANALYTICS_DEBUG:
    process.env.REACT_APP_ENABLE_ANALYTICS_DEBUG === 'true',

  // Feature Flags
  ENABLE_CONTACT_FORM: process.env.REACT_APP_ENABLE_CONTACT_FORM !== 'false',
  ENABLE_RESUME_DOWNLOAD:
    process.env.REACT_APP_ENABLE_RESUME_DOWNLOAD !== 'false',
  ENABLE_DARK_MODE: process.env.REACT_APP_ENABLE_DARK_MODE !== 'false',
  ENABLE_ANIMATIONS: process.env.REACT_APP_ENABLE_ANIMATIONS !== 'false',
  ENABLE_CURSOR_EFFECTS:
    process.env.REACT_APP_ENABLE_CURSOR_EFFECTS !== 'false',

  // Deployment
  BASE_URL: process.env.REACT_APP_BASE_URL || '',
  DOMAIN: process.env.REACT_APP_DOMAIN || '',

  // Helper functions
  isDevelopment: () => process.env.NODE_ENV === 'development',
  isProduction: () => process.env.NODE_ENV === 'production',
  isTest: () => process.env.NODE_ENV === 'test',
} as const;

// Type for environment variables
export type EnvConfig = typeof env;

// Validation function to check required environment variables
export const validateEnv = (): void => {
  const requiredVars: (keyof typeof env)[] = [
    'APP_NAME',
    'FULL_NAME',
    'PROFESSIONAL_TITLE',
    'EMAIL',
    'GITHUB_USERNAME',
    'GITHUB_URL',
    'LINKEDIN_URL',
  ];

  const missingVars = requiredVars.filter(
    (varName) => !env[varName] || env[varName] === ''
  );

  if (missingVars.length > 0) {
    if (env.isProduction()) {
      throw new Error(
        `Missing required environment variables in production: ${missingVars.join(', ')}`
      );
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        `⚠️ Missing environment variables (using fallbacks): ${missingVars.join(', ')}`
      );
    }
  }
};

// Initialize validation on module load
validateEnv();
