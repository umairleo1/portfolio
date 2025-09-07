/**
 * Application version management utility
 * Provides centralized access to version information from environment variables
 */

/**
 * Get application version for analytics tracking
 */
export const getVersionForAnalytics = (): string => {
  return process.env.REACT_APP_VERSION || 'dev';
};
