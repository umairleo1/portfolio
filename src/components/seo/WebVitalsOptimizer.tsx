import { useEffect } from 'react';

/**
 * Core Web Vitals optimization component
 * Implements performance optimizations for better SEO rankings
 */
const WebVitalsOptimizer = () => {
  useEffect(() => {
    // Preconnect to external resources only
    const preconnectResources = () => {
      // Preconnect to font resources (avoid duplicates)
      const existingFontPreconnect = document.querySelector(
        'link[rel="preconnect"][href="https://fonts.gstatic.com"]'
      );
      if (!existingFontPreconnect) {
        const fontLink = document.createElement('link');
        fontLink.rel = 'preconnect';
        fontLink.href = 'https://fonts.gstatic.com';
        fontLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink);
      }
    };

    // Optimize Cumulative Layout Shift (CLS)
    const optimizeCLS = () => {
      // Add loading="eager" and explicit dimensions to above-fold images
      const heroImages = document.querySelectorAll(
        '.hero img, [data-priority="high"] img'
      );
      heroImages.forEach((img) => {
        if (img instanceof HTMLImageElement) {
          img.loading = 'eager';
          img.decoding = 'sync';
        }
      });

      // Reserve space for dynamic content
      const dynamicElements = document.querySelectorAll('[data-dynamic]');
      dynamicElements.forEach((el) => {
        if (el instanceof HTMLElement && !el.style.minHeight) {
          el.style.minHeight = '200px'; // Reserve space to prevent layout shift
        }
      });
    };

    // Optimize First Input Delay (FID)
    const optimizeFID = () => {
      // Defer non-critical JavaScript
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        if (script instanceof HTMLScriptElement) {
          script.defer = true;
        }
      });

      // Use requestIdleCallback for non-critical work
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          // Initialize non-critical analytics or features here
          // Non-critical tasks initialized during idle time
        });
      }
    };

    // Run optimizations with delay to ensure DOM is ready
    const initOptimizations = () => {
      optimizeCLS();
      optimizeFID();
      // Preconnect to external resources
      preconnectResources();
    };

    // Run after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initOptimizations);
    } else {
      initOptimizations();
    }

    // Set up intersection observer for lazy loading
    const lazyImages = document.querySelectorAll('img[data-lazy]');
    if ('IntersectionObserver' in window && lazyImages.length > 0) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    }
  }, []);

  return null; // This component doesn't render anything
};

export default WebVitalsOptimizer;
