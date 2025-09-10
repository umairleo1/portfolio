/**
 * Professional date utility functions for SEO and meta tags
 * Follows Google's guidelines for dateModified and lastmod timestamps
 */

/**
 * Get the current date in ISO 8601 format with timezone
 * Google recommends including timezone information when specifying times
 */
export const getCurrentISODate = (): string => {
  return new Date().toISOString();
};

/**
 * Get the current date in ISO 8601 format without time (YYYY-MM-DD)
 * Useful for sitemap lastmod and basic dateModified
 */
export const getCurrentDateOnly = (): string => {
  return new Date().toISOString().split('T')[0] as string;
};

/**
 * Get a formatted date for Open Graph updated_time
 * Format: YYYY-MM-DDTHH:mm:ss.sssZ (full ISO with milliseconds)
 */
export const getOpenGraphDate = (): string => {
  return new Date().toISOString();
};

/**
 * Get structured data date format
 * Google recommends ISO 8601 format for structured data
 */
export const getStructuredDataDate = (): string => {
  return new Date().toISOString();
};

/**
 * Get build time date - should be set during build process
 * This represents when the content was last significantly updated
 */
export const getBuildTimeDate = (): string => {
  // Use environment variable if set during build, otherwise current time
  return process.env.REACT_APP_BUILD_TIME ?? new Date().toISOString();
};

/**
 * Get sitemap lastmod date
 * Google says: "lastmod should reflect when content significantly changed"
 */
export const getSitemapDate = (): string => {
  return getCurrentDateOnly();
};

/**
 * Portfolio-specific date - represents last meaningful portfolio update
 * This should only update when portfolio content significantly changes
 */
export const getPortfolioLastModified = (): string => {
  // For professional portfolios, use build time to represent actual updates
  return getBuildTimeDate();
};
