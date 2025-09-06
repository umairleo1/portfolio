/* eslint-disable no-console, no-unused-vars */
import { env } from '@/config/env';

// Enhanced Google Analytics interface for professional implementation
interface GtagFunction {
  (..._args: unknown[]): void;
}

declare global {
  interface Window {
    gtag: GtagFunction;
    dataLayer: unknown[];
  }
}

// Analytics configuration constants
const GA_CONFIG = {
  // Privacy and GDPR compliance settings
  PRIVACY_SETTINGS: {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    restricted_data_processing: true,
  },

  // Cookie and security settings
  COOKIE_SETTINGS: {
    cookie_flags: 'secure;samesite=strict',
    cookie_domain: 'auto',
    cookie_expires: 63072000, // 2 years
  },

  // Performance settings
  PERFORMANCE_SETTINGS: {
    send_page_view: false, // Manual page view tracking
    transport_type: 'beacon',
    custom_map: {
      custom_parameter_1: 'user_engagement_score',
    },
  },
} as const;

// Event parameter validation
interface EventParameters {
  event_category?: string;
  event_label?: string | undefined;
  value?: number | undefined;
  custom_parameters?: Record<string, unknown>;
  user_properties?: Record<string, unknown>;
}

// Enhanced tracking interface
interface TrackingOptions {
  nonInteraction?: boolean;
  transport?: 'beacon' | 'xhr' | 'image';
  hitCallback?: () => void;
}

// Consent management for GDPR compliance
export const setConsentSettings = (
  analytics: boolean = true,
  marketing: boolean = false
): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'default', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  });

  if (env.ENABLE_ANALYTICS_DEBUG) {
    console.log('🔒 GA Consent Settings:', { analytics, marketing });
  }
};

// Update consent settings (for GDPR compliance when users change preferences)
export const updateConsentSettings = (
  analytics: boolean,
  marketing: boolean = false
): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  if (env.ENABLE_ANALYTICS_DEBUG) {
    console.log('🔒 GA Consent Updated:', { analytics, marketing });
  }
};

// Initialize Google Analytics with professional configuration
export const initGA = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      // Validation checks
      if (!env.GOOGLE_ANALYTICS_ID) {
        if (env.isDevelopment()) {
          console.warn('Google Analytics ID not configured');
          return resolve();
        }
        throw new Error(
          'GA_ID_MISSING: Google Analytics ID is required in production'
        );
      }

      if (env.isTest()) {
        console.log('Analytics disabled in test environment');
        return resolve();
      }

      // Initialize dataLayer before script loads
      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        function (..._args: unknown[]) {
          window.dataLayer.push(arguments);
        };

      // Set consent before script loads (GDPR compliance)
      setConsentSettings();

      // Create and load GA script with error handling
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${env.GOOGLE_ANALYTICS_ID}`;

      script.onload = () => {
        // Configure GA after script loads
        window.gtag('js', new Date());

        // Enhanced configuration with all professional settings
        window.gtag('config', env.GOOGLE_ANALYTICS_ID, {
          // Privacy settings (GDPR/CCPA compliance)
          ...GA_CONFIG.PRIVACY_SETTINGS,

          // Cookie settings (security)
          ...GA_CONFIG.COOKIE_SETTINGS,

          // Performance settings
          ...GA_CONFIG.PERFORMANCE_SETTINGS,

          // Site-specific settings
          site_speed_sample_rate: env.isProduction() ? 10 : 100,
          custom_map: {
            custom_parameter_1: 'engagement_time',
            custom_parameter_2: 'scroll_depth',
          },

          // Debug mode for development
          debug_mode: env.ENABLE_ANALYTICS_DEBUG,
        });

        // Set user properties for better segmentation
        window.gtag('set', 'user_properties', {
          environment: env.isProduction() ? 'production' : 'development',
          version: '1.0.0',
          user_agent:
            typeof navigator !== 'undefined' &&
            navigator.userAgent?.includes('Mobile')
              ? 'mobile'
              : 'desktop',
        });

        if (env.ENABLE_ANALYTICS_DEBUG) {
          console.log('Google Analytics initialized successfully');
        }

        resolve();
      };

      script.onerror = (error) => {
        console.error('Failed to load Google Analytics:', error);
        reject(new Error('GA_SCRIPT_LOAD_FAILED'));
      };

      // Add script to document
      const head = document.head || document.getElementsByTagName('head')[0];
      if (head) {
        head.appendChild(script);
      } else {
        throw new Error('Cannot find document head element');
      }

      // Timeout fallback
      setTimeout(() => {
        if (!window.gtag) {
          reject(new Error('GA_INIT_TIMEOUT'));
        }
      }, 10000);
    } catch (error) {
      console.error('Google Analytics initialization failed:', error);
      reject(error);
    }
  });
};

// Enhanced page view tracking with performance metrics
export const trackPageView = (
  path?: string,
  title?: string,
  referrer?: string
): void => {
  if (!isTrackingEnabled()) return;

  const pagePath = path || window.location.pathname + window.location.search;
  const pageTitle = title || document.title;

  try {
    // Standard page view
    window.gtag('config', env.GOOGLE_ANALYTICS_ID, {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
      ...(referrer && { page_referrer: referrer }),
    });

    // Enhanced data for professional analytics
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.href,
      engagement_time_msec: 0,
      user_agent: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop',
      screen_resolution:
        typeof window !== 'undefined' && window.screen
          ? `${window.screen.width}x${window.screen.height}`
          : 'unknown',
      language:
        typeof navigator !== 'undefined' ? navigator.language : 'unknown',
    });

    if (env.ENABLE_ANALYTICS_DEBUG) {
      console.log('Page view tracked:', { pagePath, pageTitle });
    }
  } catch (error) {
    console.error('Page view tracking failed:', error);
  }
};

// Professional event tracking with validation and error handling
export const trackEvent = (
  eventName: string,
  parameters: EventParameters = {},
  options: TrackingOptions = {}
): void => {
  if (!isTrackingEnabled()) return;

  try {
    // Validate event name
    if (!eventName || typeof eventName !== 'string') {
      throw new Error('Invalid event name provided');
    }

    // Sanitize and prepare parameters (GA4 format)
    const sanitizedParams: Record<string, unknown> = {
      // GA4 standard parameters
      value:
        typeof parameters.value === 'number' ? parameters.value : undefined,
      // Custom parameters
      event_category: parameters.event_category || 'general',
      event_label: parameters.event_label,
      non_interaction: options.nonInteraction || false,
      transport_type: options.transport || 'beacon',
      ...parameters.custom_parameters,
    };

    // Remove undefined values
    Object.keys(sanitizedParams).forEach((key) => {
      if (sanitizedParams[key] === undefined) {
        delete sanitizedParams[key];
      }
    });

    // Send event
    window.gtag('event', eventName, sanitizedParams);

    // Execute callback if provided
    if (options.hitCallback) {
      setTimeout(options.hitCallback, 100);
    }

    if (env.ENABLE_ANALYTICS_DEBUG) {
      console.log('Event tracked:', eventName, sanitizedParams);
    }
  } catch (error) {
    console.error('Event tracking failed:', error);
    // Ensure callback still executes on error
    if (options.hitCallback) {
      setTimeout(options.hitCallback, 100);
    }
  }
};

// Utility function to check if tracking is enabled
const isTrackingEnabled = (): boolean => {
  return !!(
    env.GOOGLE_ANALYTICS_ID &&
    !env.isTest() &&
    typeof window !== 'undefined' &&
    window.gtag
  );
};

// Enhanced user interaction tracking
export const trackInteraction = (
  action: string,
  category: string = 'user_interaction',
  label?: string,
  value?: number,
  customData?: Record<string, unknown>
): void => {
  trackEvent(action, {
    event_category: category,
    event_label: label,
    value,
    custom_parameters: {
      interaction_timestamp: Date.now(),
      page_path: window.location.pathname,
      ...customData,
    },
  });
};

// Professional section view tracking with scroll depth
export const trackSectionView = (
  sectionName: string,
  scrollDepth?: number,
  timeOnSection?: number
): void => {
  trackEvent('section_view', {
    event_category: 'content_engagement',
    event_label: sectionName,
    value: Math.round(scrollDepth || 0),
    custom_parameters: {
      section_name: sectionName,
      scroll_depth_percentage: scrollDepth,
      time_on_section_ms: timeOnSection,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    },
  });
};

// Enhanced contact form tracking with form analytics
export const trackContactForm = (
  method: 'start' | 'submit' | 'error' | 'success' | 'abandon',
  formData?: {
    formType?: string;
    completionTime?: number;
    errorField?: string;
    validationErrors?: string[];
  }
): void => {
  trackEvent('contact_form_interaction', {
    event_category: 'form_engagement',
    event_label: method,
    value: formData?.completionTime || 0,
    custom_parameters: {
      form_type: formData?.formType || 'contact',
      completion_time_ms: formData?.completionTime,
      error_field: formData?.errorField,
      validation_errors: formData?.validationErrors?.join(','),
      form_step: method,
    },
  });
};

// Professional external link tracking with context
export const trackExternalLink = (
  url: string,
  linkText?: string,
  context?: string,
  position?: string
): void => {
  // Safely parse URL
  let hostname: string;
  try {
    hostname = new URL(url).hostname;
  } catch {
    hostname = 'unknown';
  }

  trackEvent(
    'external_link_click',
    {
      event_category: 'outbound_links',
      event_label: linkText || hostname,
      custom_parameters: {
        link_text: linkText,
        link_context: context,
        link_position: position,
        destination_domain: hostname,
        referrer_page:
          typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      },
    },
    {
      transport: 'beacon', // Ensure tracking before navigation
      nonInteraction: false,
    }
  );
};

// Enhanced project interaction tracking
export const trackProjectInteraction = (
  projectName: string,
  action: 'view' | 'click_demo' | 'click_code' | 'hover' | 'share',
  metadata?: {
    projectCategory?: string;
    technologies?: string[];
    projectUrl?: string;
    interactionDuration?: number;
  }
): void => {
  trackEvent('project_engagement', {
    event_category: 'portfolio_interaction',
    event_label: projectName,
    value: metadata?.interactionDuration || 0,
    custom_parameters: {
      project_name: projectName,
      interaction_type: action,
      project_category: metadata?.projectCategory,
      technologies_used: metadata?.technologies?.join(','),
      project_url: metadata?.projectUrl,
      interaction_duration_ms: metadata?.interactionDuration,
    },
  });
};

// Professional download tracking with file analytics
export const trackDownload = (
  fileName: string,
  fileType: string = 'document',
  fileSize?: number,
  downloadContext?: string
): void => {
  trackEvent(
    'file_download',
    {
      event_category: 'document_engagement',
      event_label: fileName,
      value: Math.round((fileSize || 0) / 1024), // Size in KB
      custom_parameters: {
        file_name: fileName,
        file_type: fileType,
        file_size_bytes: fileSize,
        download_context: downloadContext,
        user_agent:
          typeof navigator !== 'undefined' &&
          navigator.userAgent?.includes('Mobile')
            ? 'mobile'
            : 'desktop',
      },
    },
    {
      transport: 'beacon',
    }
  );
};

// Performance and Web Vitals tracking
export const trackWebVitals = (
  metric: 'FCP' | 'LCP' | 'FID' | 'CLS' | 'TTFB',
  value: number,
  rating: 'good' | 'needs-improvement' | 'poor'
): void => {
  trackEvent(
    'web_vitals',
    {
      event_category: 'performance',
      event_label: metric,
      value: Math.round(value),
      custom_parameters: {
        metric_name: metric,
        metric_value: value,
        metric_rating: rating,
        connection_type:
          (navigator as unknown as { connection?: { effectiveType?: string } })
            ?.connection?.effectiveType || 'unknown',
      },
    },
    {
      nonInteraction: true,
    }
  );
};

// User engagement tracking
export const trackEngagement = (
  engagementType: 'scroll_depth' | 'time_on_page' | 'click_depth',
  value: number,
  context?: string
): void => {
  trackEvent(
    'user_engagement',
    {
      event_category: 'engagement_metrics',
      event_label: engagementType,
      value: Math.round(value),
      custom_parameters: {
        engagement_type: engagementType,
        engagement_value: value,
        page_context: context || window.location.pathname,
        session_duration: Date.now() - (performance.timeOrigin || 0),
      },
    },
    {
      nonInteraction: true,
    }
  );
};

// Error tracking for debugging
export const trackError = (
  errorType: string,
  errorMessage: string,
  errorStack?: string,
  context?: string
): void => {
  trackEvent(
    'application_error',
    {
      event_category: 'error_tracking',
      event_label: errorType,
      custom_parameters: {
        error_type: errorType,
        error_message: errorMessage.substring(0, 150), // Limit length
        error_stack: errorStack?.substring(0, 500), // Limit length
        error_context: context,
        user_agent:
          typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
        page_url:
          typeof window !== 'undefined' ? window.location.href : 'unknown',
      },
    },
    {
      nonInteraction: true,
    }
  );
};
