import { useEffect } from 'react';
import { appConfig } from '@/data';

interface SectionSEOOptions {
  title?: string;
  description?: string;
  section?: string;
}

/**
 * Hook for section-specific SEO updates
 * Updates document title and meta description when section comes into view
 */
export const useSectionSEO = (options: SectionSEOOptions) => {
  const { title, description, section } = options;

  useEffect(() => {
    if (!title && !description) return;

    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription?.getAttribute('content') || '';

    // Update title
    if (title) {
      const fullTitle = `${title} | ${appConfig.seo.title}`;
      document.title = fullTitle;
    }

    // Update description
    if (description && metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Cleanup on unmount or section change
    return () => {
      document.title = originalTitle;
      if (metaDescription && originalDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
    };
  }, [title, description, section]);
};
