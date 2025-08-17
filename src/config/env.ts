// Environment configuration
export const env = {
  // App Configuration
  APP_NAME: process.env.REACT_APP_NAME || 'Muhammad Umair Portfolio',
  APP_VERSION: process.env.REACT_APP_VERSION || '1.0.0',
  APP_ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT || 'development',

  // Contact Form Configuration
  EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  EMAILJS_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',

  // Analytics
  GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GOOGLE_ANALYTICS_ID || '',

  // GitHub Configuration
  GITHUB_USERNAME: process.env.REACT_APP_GITHUB_USERNAME || 'umairleo1',
  GITHUB_TOKEN: process.env.REACT_APP_GITHUB_TOKEN || '',

  // Social Media Links
  GITHUB_URL:
    process.env.REACT_APP_GITHUB_URL || 'https://github.com/umairleo1',
  LINKEDIN_URL: process.env.REACT_APP_LINKEDIN_URL || '',
  EMAIL: process.env.REACT_APP_EMAIL || 'umair.leo17@gmail.com',

  // Deployment
  BASE_URL:
    process.env.REACT_APP_BASE_URL || 'https://umairleo1.github.io/portfolio',

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
    'GITHUB_USERNAME',
    'EMAIL',
  ];

  const missingVars = requiredVars.filter(
    (varName) => !env[varName] || env[varName] === ''
  );

  if (missingVars.length > 0 && env.isProduction()) {
    // Only warn in development, throw error in production
    throw new Error(
      `Missing required environment variables in production: ${missingVars.join(', ')}`
    );
  }
};

// Initialize validation on module load
validateEnv();
