/* eslint-disable no-console */
import type { ReportCallback } from 'web-vitals';
import { trackWebVitals } from './utils/analytics';
import { env } from './config/env';

// Enhanced Web Vitals reporting with Google Analytics integration
const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  // Custom callback to send vitals to Google Analytics
  const analyticsCallback = (metric: any) => {
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

    // Send to Google Analytics if enabled
    if (env.ENABLE_PERFORMANCE_MONITORING) {
      trackWebVitals(
        metric.name as 'FCP' | 'LCP' | 'FID' | 'CLS' | 'TTFB',
        metric.value,
        getRating(metric.name, metric.value)
      );
    }

    // Send to external endpoint if configured
    if (env.WEB_VITALS_ENDPOINT) {
      fetch(env.WEB_VITALS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          rating: getRating(metric.name, metric.value),
          delta: metric.delta,
          id: metric.id,
          url: window.location.href,
          timestamp: Date.now(),
          user_agent: navigator.userAgent,
          connection:
            (navigator as any)?.connection?.effectiveType || 'unknown',
        }),
      }).catch((error) => {
        if (env.ENABLE_ANALYTICS_DEBUG) {
          console.error('Failed to send Web Vitals to endpoint:', error);
        }
      });
    }

    // Call custom callback if provided
    if (onPerfEntry && typeof onPerfEntry === 'function') {
      onPerfEntry(metric);
    }
  };

  // Load and initialize Web Vitals
  if (typeof window !== 'undefined') {
    import('web-vitals')
      .then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(analyticsCallback);
        onINP(analyticsCallback);
        onFCP(analyticsCallback);
        onLCP(analyticsCallback);
        onTTFB(analyticsCallback);

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
