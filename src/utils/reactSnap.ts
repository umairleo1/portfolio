/**
 * React-snap detection and optimization utilities
 * Helps ensure all content is rendered during pre-rendering for optimal SEO
 */

/**
 * Detect if the app is being rendered by react-snap
 * React-snap sets navigator.userAgent to include "ReactSnap"
 */
export const isReactSnapRunning = (): boolean => {
  // Check for react-snap user agent
  if (typeof navigator !== 'undefined' && navigator.userAgent) {
    return navigator.userAgent.includes('ReactSnap');
  }
  return false;
};

/**
 * Get the optimal delay for content loading based on environment
 * Returns 0 during pre-rendering to ensure all content is captured
 */
export const getContentLoadDelay = (defaultDelay: number = 800): number => {
  return isReactSnapRunning() ? 0 : defaultDelay;
};

/**
 * Check if we should use lazy loading
 * Disable lazy loading during pre-rendering for complete SEO coverage
 */
export const shouldUseLazyLoading = (): boolean => {
  return !isReactSnapRunning();
};

/**
 * Wait for react-snap to complete its snapshot
 * This ensures dynamic content is fully loaded before snapshot
 */
export const waitForReactSnap = async (): Promise<void> => {
  if (!isReactSnapRunning()) {
    return Promise.resolve();
  }

  // Give react-snap extra time to capture all content
  return new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
};
