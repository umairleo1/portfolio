/* eslint-disable no-console */
import type { ReportCallback, Metric } from 'web-vitals';
import { trackWebVitals } from './utils/analytics';
import { env } from './config/env';
import { shouldInitializeAnalytics } from './utils/analyticsHelpers';

// Enhanced Web Vitals reporting with Google Analytics integration
const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  // Custom callback to send vitals to Google Analytics
  const analyticsCallback = (metric: Metric) => {
    // Determine rating based on thresholds
    const getRating = (
      name: string,
      value: number
    ): 'good' | 'needs-improvement' | 'poor' => {
      const thresholds = {
        FCP: { good: 1800, poor: 3000 },
        LCP: { good: 2500, poor: 4000 },
        FID: { good: 100, poor: 300 },
        CLS: { good: 0.1, poor: 0.25 },
        TTFB: { good: 800, poor: 1800 },
        INP: { good: 200, poor: 500 },
      }[name] || { good: 0, poor: Infinity };

      if (value <= thresholds.good) return 'good';
      if (value <= thresholds.poor) return 'needs-improvement';
      return 'poor';
    };

    // Send to Google Analytics (only in production)
    if (shouldInitializeAnalytics() && env.GOOGLE_ANALYTICS_ID) {
      // Map INP to FID for GA4 compatibility since trackWebVitals expects FID
      const metricName = metric.name === 'INP' ? 'FID' : metric.name;
      trackWebVitals(
        metricName as 'FCP' | 'LCP' | 'FID' | 'CLS' | 'TTFB',
        metric.value,
        getRating(metric.name, metric.value)
      );
    }

    // Call custom callback if provided
    if (onPerfEntry && typeof onPerfEntry === 'function') {
      onPerfEntry(metric as any);
    }
  };

  // Load and initialize Web Vitals
  if (typeof window !== 'undefined') {
    import('web-vitals')
      .then((webVitals) => {
        const { onCLS, onFCP, onLCP, onTTFB, onINP } = webVitals;

        onCLS(analyticsCallback);
        onFCP(analyticsCallback);
        onLCP(analyticsCallback);
        onTTFB(analyticsCallback);

        // Track INP for interaction monitoring (FID is deprecated in favor of INP)
        onINP(analyticsCallback);

        // Try to import FID if available (for backwards compatibility)
        if ('onFID' in webVitals) {
          (webVitals as any).onFID(analyticsCallback);
        }

        if (env.ENABLE_ANALYTICS_DEBUG) {
          console.log('Web Vitals monitoring initialized');
        }
      })
      .catch((error) => {
        if (env.ENABLE_ANALYTICS_DEBUG) {
          console.error('Failed to load Web Vitals:', error);
        }
      });
  }
};

export default reportWebVitals;
