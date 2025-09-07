// Environment configuration - only for secrets and environment-specific values
export const env = {
  // Environment
  isDevelopment: () => process.env.NODE_ENV === 'development',
  isProduction: () => process.env.NODE_ENV === 'production',
  isTest: () => process.env.NODE_ENV === 'test',

  // Real Secrets (from environment variables)
  GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GOOGLE_ANALYTICS_ID || '',
  EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  EMAILJS_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
  // GITHUB_TOKEN removed for security - tokens should never be exposed in client builds

  // Development Tools
  ENABLE_ANALYTICS_DEBUG: process.env.NODE_ENV === 'development',
} as const;

// Type for environment variables
export type EnvConfig = typeof env;

// Validation function to check optional secrets
export const validateEnv = (): void => {
  const optionalSecrets: (keyof typeof env)[] = [
    'GOOGLE_ANALYTICS_ID',
    'EMAILJS_SERVICE_ID',
    'EMAILJS_TEMPLATE_ID',
    'EMAILJS_PUBLIC_KEY',
  ];

  if (!env.isProduction()) {
    const missingSecrets = optionalSecrets.filter(
      (varName) => !env[varName] || env[varName] === ''
    );

    if (missingSecrets.length > 0) {
      // eslint-disable-next-line no-console
      console.warn(
        `Optional secrets not configured: ${missingSecrets.join(', ')}`
      );
    }
  }
};

// Initialize validation on module load
validateEnv();
