import { useEffect } from 'react';

/**
 * Core Web Vitals optimization component
 * Implements performance optimizations for better SEO rankings
 */
const WebVitalsOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImageLink = document.createElement('link');
      heroImageLink.rel = 'preload';
      heroImageLink.as = 'image';
      heroImageLink.href = '/assets/images/profile-main.jpg';
      document.head.appendChild(heroImageLink);

      // Preload critical fonts if any
      const fontLink = document.createElement('link');
      fontLink.rel = 'preconnect';
      fontLink.href = 'https://fonts.gstatic.com';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
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

    // Run optimizations
    preloadCriticalResources();
    optimizeCLS();
    optimizeFID();

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
