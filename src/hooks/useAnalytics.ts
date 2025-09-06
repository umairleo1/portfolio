import { useCallback, useEffect, useRef } from 'react';
import {
  trackSectionView,
  trackContactForm,
  trackProjectInteraction,
  trackEngagement,
  trackExternalLink,
} from '@/utils/analytics';

// Custom hook for performance-optimized analytics tracking
export const useAnalytics = () => {
  return {
    // Section view tracking with performance optimization
    trackSectionView: useCallback(
      (sectionName: string, scrollDepth?: number, timeOnSection?: number) => {
        // Debounce to avoid excessive calls
        trackSectionView(sectionName, scrollDepth, timeOnSection);
      },
      []
    ),

    // Contact form tracking
    trackContactForm: useCallback(
      (
        method: 'start' | 'submit' | 'error' | 'success' | 'abandon',
        formData?: {
          formType?: string;
          completionTime?: number;
          errorField?: string;
          validationErrors?: string[];
        }
      ) => {
        trackContactForm(method, formData);
      },
      []
    ),

    // Project interaction tracking
    trackProjectInteraction: useCallback(
      (
        projectName: string,
        action: 'view' | 'click_demo' | 'click_code' | 'hover' | 'share',
        metadata?: {
          projectCategory?: string;
          technologies?: string[];
          projectUrl?: string;
          interactionDuration?: number;
        }
      ) => {
        trackProjectInteraction(projectName, action, metadata);
      },
      []
    ),

    // External link tracking
    trackExternalLink: useCallback(
      (url: string, linkText?: string, context?: string, position?: string) => {
        trackExternalLink(url, linkText, context, position);
      },
      []
    ),

    // Engagement tracking
    trackEngagement: useCallback(
      (
        engagementType: 'scroll_depth' | 'time_on_page' | 'click_depth',
        value: number,
        context?: string
      ) => {
        trackEngagement(engagementType, value, context);
      },
      []
    ),
  };
};

// Hook for intersection observer-based section tracking
export const useSectionTracking = (sectionName: string) => {
  const sectionRef = useRef<HTMLElement>(null);
  const entryTimeRef = useRef<number>(0);
  const hasTrackedRef = useRef<boolean>(false);
  const { trackSectionView } = useAnalytics();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedRef.current) {
            // Mark section entry but don't track yet
            entryTimeRef.current = Date.now();
            hasTrackedRef.current = true;
          } else if (
            !entry.isIntersecting &&
            hasTrackedRef.current &&
            entryTimeRef.current > 0
          ) {
            // Track section with complete data on exit
            const timeOnSection = Date.now() - entryTimeRef.current;
            if (timeOnSection > 1000) {
              // Only track if viewed for more than 1 second
              const maxScroll =
                document.documentElement.scrollHeight - window.innerHeight;
              const scrollDepth =
                maxScroll <= 0
                  ? 100
                  : Math.round((window.scrollY / maxScroll) * 100);
              trackSectionView(sectionName, scrollDepth, timeOnSection);
            }
            // Reset tracking state
            hasTrackedRef.current = false;
            entryTimeRef.current = 0;
          }
        });
      },
      {
        threshold: 0.3, // Track when 30% of section is visible
        rootMargin: '0px 0px -10% 0px', // Slight margin for better UX
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [sectionName, trackSectionView]);

  return sectionRef;
};

// Hook for scroll depth tracking
export const useScrollDepthTracking = () => {
  const maxScrollDepthRef = useRef<number>(0);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const { trackEngagement } = useAnalytics();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        animationFrameRef.current = requestAnimationFrame(() => {
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrollDepth =
            maxScroll <= 0
              ? 100
              : Math.round((window.scrollY / maxScroll) * 100);

          // Only track milestones (25%, 50%, 75%, 90%, 100%)
          const milestones = [25, 50, 75, 90, 100];
          const currentMilestone = milestones.find(
            (milestone) =>
              scrollDepth >= milestone && maxScrollDepthRef.current < milestone
          );

          if (currentMilestone) {
            maxScrollDepthRef.current = currentMilestone;
            trackEngagement(
              'scroll_depth',
              currentMilestone,
              window.location.pathname
            );
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle scroll events for performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [trackEngagement]);
};

// Hook for time-based engagement tracking
export const useTimeTracking = () => {
  const startTimeRef = useRef<number>(Date.now());
  const { trackEngagement } = useAnalytics();

  useEffect(() => {
    const intervals = [30000, 60000, 180000, 300000]; // 30s, 1m, 3m, 5m
    const trackedIntervals = new Set<number>();

    const checkTimeEngagement = () => {
      const timeOnPage = Date.now() - startTimeRef.current;

      intervals.forEach((interval) => {
        if (timeOnPage >= interval && !trackedIntervals.has(interval)) {
          trackedIntervals.add(interval);
          trackEngagement('time_on_page', interval, window.location.pathname);
        }
      });
    };

    const intervalId = setInterval(checkTimeEngagement, 10000); // Check every 10 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [trackEngagement]);
};
