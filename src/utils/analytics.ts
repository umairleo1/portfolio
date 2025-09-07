/* eslint-disable no-console, no-unused-vars */
import { env } from '@/config/env';
import { getVersionForAnalytics } from './version';

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

// Professional initialization state management
let initializationPromise: Promise<void> | null = null;
let isInitialized = false;
const offlineEventQueue: Array<{
  eventName: string;
  parameters: Record<string, unknown>;
}> = [];

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
  // FIX: Prevent race conditions from multiple concurrent initializations
  if (initializationPromise) {
    return initializationPromise;
  }

  if (isInitialized) {
    return Promise.resolve();
  }

  initializationPromise = new Promise<void>((resolve, reject) => {
    let scriptLoadTimeout: NodeJS.Timeout | null = null;
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
        // FIX: Clear timeout to prevent memory leak
        if (scriptLoadTimeout) {
          clearTimeout(scriptLoadTimeout);
          scriptLoadTimeout = null;
        }

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
          version: getVersionForAnalytics(),
          user_agent:
            typeof navigator !== 'undefined' &&
            navigator.userAgent?.includes('Mobile')
              ? 'mobile'
              : 'desktop',
        });

        if (env.ENABLE_ANALYTICS_DEBUG) {
          console.log('Google Analytics initialized successfully');
        }

        isInitialized = true;
        resolve();
      };

      script.onerror = (error) => {
        // FIX: Clear timeout and reset state on error
        if (scriptLoadTimeout) {
          clearTimeout(scriptLoadTimeout);
          scriptLoadTimeout = null;
        }
        isInitialized = false;
        initializationPromise = null;
        console.error('Failed to load Google Analytics:', error);
        reject(new Error('GA_SCRIPT_LOAD_FAILED'));
      };

      // FIX: CSP-safe script injection with better DOM handling
      // Check if script already exists (prevent duplicates)
      const existingScript = document.querySelector(
        `script[src*="${env.GOOGLE_ANALYTICS_ID}"]`
      );
      if (existingScript) {
        isInitialized = true;
        if (scriptLoadTimeout) clearTimeout(scriptLoadTimeout);
        resolve();
        return;
      }

      // CSP nonce support
      const metaNonce = document.querySelector('meta[name="csp-nonce"]');
      if (metaNonce) {
        script.nonce = metaNonce.getAttribute('content') || '';
      }

      // Safe DOM insertion with fallbacks
      const insertionPoint =
        document.head ||
        document.getElementsByTagName('head')[0] ||
        document.body ||
        document.documentElement;

      if (!insertionPoint) {
        if (scriptLoadTimeout) clearTimeout(scriptLoadTimeout);
        isInitialized = false;
        initializationPromise = null;
        throw new Error('Cannot find DOM insertion point for GA script');
      }

      insertionPoint.appendChild(script);

      // FIX: Memory leak prevention - clear timeout on success/error
      scriptLoadTimeout = setTimeout(() => {
        if (!window.gtag) {
          isInitialized = false;
          initializationPromise = null;
          reject(new Error('GA_INIT_TIMEOUT'));
        }
      }, 10000);
    } catch (error) {
      // FIX: Reset state on initialization failure
      if (scriptLoadTimeout) clearTimeout(scriptLoadTimeout);
      isInitialized = false;
      initializationPromise = null;
      console.error('Google Analytics initialization failed:', error);
      reject(error);
    }
  });

  return initializationPromise;
};

// Process any queued offline events when back online
const processOfflineEvents = (): void => {
  if (offlineEventQueue.length === 0) return;

  console.log(`Processing ${offlineEventQueue.length} queued analytics events`);

  while (offlineEventQueue.length > 0) {
    const queuedEvent = offlineEventQueue.shift();
    if (queuedEvent && window.gtag) {
      try {
        window.gtag('event', queuedEvent.eventName, queuedEvent.parameters);
      } catch (error) {
        console.warn('Failed to send queued analytics event:', error);
      }
    }
  }
};

// Set up online/offline event listeners
if (typeof window !== 'undefined' && 'addEventListener' in window) {
  window.addEventListener('online', processOfflineEvents);
}

// FIX: Enhanced page view tracking with performance metrics
export const trackPageView = (
  path?: string,
  title?: string,
  referrer?: string
): void => {
  if (!isTrackingEnabled()) return;

  const pagePath =
    path ||
    (typeof window !== 'undefined'
      ? window.location.pathname + window.location.search
      : '/unknown');
  const pageTitle =
    title ||
    (typeof document !== 'undefined' ? document.title : 'Unknown Page');

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
      user_agent:
        typeof navigator !== 'undefined' &&
        navigator.userAgent?.includes('Mobile')
          ? 'mobile'
          : 'desktop',
      screen_resolution:
        typeof window !== 'undefined' && window.screen
          ? `${window.screen.width}x${window.screen.height}`
          : 'unknown',
      language:
        typeof navigator !== 'undefined' && navigator.language
          ? navigator.language
          : 'unknown',
    });

    if (env.ENABLE_ANALYTICS_DEBUG) {
      console.log('Page view tracked:', { pagePath, pageTitle });
    }
  } catch (error) {
    console.error('Page view tracking failed:', error);
  }
};

// FIX: Professional event tracking with comprehensive validation
export const trackEvent = (
  eventName: string,
  parameters: EventParameters = {},
  options: TrackingOptions = {}
): void => {
  // Handle offline events by queueing
  if (
    typeof navigator !== 'undefined' &&
    'onLine' in navigator &&
    !navigator.onLine
  ) {
    offlineEventQueue.push({
      eventName,
      parameters: { ...parameters, ...parameters.custom_parameters },
    });
    return;
  }

  if (!isTrackingEnabled()) return;

  try {
    // Validate event name
    if (!eventName || typeof eventName !== 'string') {
      throw new Error('Invalid event name provided');
    }

    // FIX: Enhanced parameter sanitization with circular reference protection
    const sanitizedParams: Record<string, unknown> = {
      // GA4 standard parameters
      value:
        typeof parameters.value === 'number' ? parameters.value : undefined,
      // Custom parameters
      event_category: parameters.event_category || 'general',
      event_label: parameters.event_label,
      non_interaction: options.nonInteraction || false,
      transport_type: options.transport || 'beacon',
    };

    // Safely merge custom parameters with circular reference protection
    if (parameters.custom_parameters) {
      try {
        const customParams = JSON.parse(
          JSON.stringify(parameters.custom_parameters)
        );
        Object.assign(sanitizedParams, customParams);
      } catch (error) {
        console.warn(
          'Circular reference detected in GA parameters, skipping custom parameters'
        );
      }
    }

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

// FIX: Enhanced tracking validation with bot detection and offline handling
const isTrackingEnabled = (): boolean => {
  // Basic environment checks
  if (
    !env.GOOGLE_ANALYTICS_ID ||
    env.isTest() ||
    typeof window === 'undefined' ||
    !window.gtag
  ) {
    return false;
  }

  // Bot detection to prevent analytics pollution
  if (typeof navigator !== 'undefined') {
    const userAgent = navigator.userAgent.toLowerCase();
    const botPatterns = [
      /bot/,
      /spider/,
      /crawler/,
      /scraper/,
      /lighthouse/,
      /chrome-lighthouse/,
      /googlebot/,
      /bingbot/,
      /facebookexternalhit/,
      /whatsapp/,
      /telegram/,
      /discord/,
    ];

    if (botPatterns.some((pattern) => pattern.test(userAgent))) {
      return false;
    }
  }

  // Check if online (will queue events if offline)
  if (
    typeof navigator !== 'undefined' &&
    'onLine' in navigator &&
    !navigator.onLine
  ) {
    return false; // Events will be queued
  }

  return true;
};

// FIX: Enhanced user interaction tracking with safety checks
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
      page_path:
        typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      tab_visibility:
        typeof document !== 'undefined'
          ? document.hidden
            ? 'hidden'
            : 'visible'
          : 'unknown',
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
      viewport_size:
        typeof window !== 'undefined'
          ? `${window.innerWidth}x${window.innerHeight}`
          : 'unknown',
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
        page_context:
          context ||
          (typeof window !== 'undefined'
            ? window.location.pathname
            : 'unknown'),
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
