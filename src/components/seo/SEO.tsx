import React from 'react';
import { Helmet } from 'react-helmet-async';
import { appConfig, personalInfo } from '@/data';
import { getOpenGraphDate } from '@/utils/dateUtils';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'profile';
}

const SEO: React.FC<SEOProps> = ({
  title = appConfig.seo.title,
  description = appConfig.seo.description,
  keywords = appConfig.seo.keywords,
  image = '/assets/images/social-preview-1200x630.jpg',
  url = appConfig.seo.url,
  type = 'website',
}) => {
  const fullTitle =
    title === appConfig.seo.title ? title : `${title} | ${appConfig.seo.title}`;
  const canonicalUrl = (() => {
    // Server-side rendering: always return configured URL
    if (typeof window === 'undefined') {
      return url;
    }

    try {
      const currentPath = window.location.pathname;
      const searchParams = window.location.search;
      const baseUrl = url.replace(/\/$/, ''); // Remove trailing slash for consistency

      // Handle GitHub Pages deployment path
      if (baseUrl.includes('/portfolio')) {
        // For GitHub Pages, the configured URL is the canonical URL
        // Only append additional paths if they exist beyond the base portfolio path
        if (currentPath === '/portfolio' || currentPath === '/portfolio/') {
          return `${baseUrl}/`; // Ensure trailing slash for consistency
        }

        // For sub-paths (if any), append them to the base URL
        if (
          currentPath.startsWith('/portfolio/') &&
          currentPath.length > '/portfolio/'.length
        ) {
          const subPath = currentPath.substring('/portfolio'.length);
          return `${baseUrl}${subPath}${searchParams}`;
        }

        // Default to base URL with trailing slash
        return `${baseUrl}/`;
      }

      // For non-GitHub Pages deployments
      if (currentPath === '/' || currentPath === '') {
        return `${baseUrl}/`;
      }

      // For other paths, maintain consistent URL structure
      return `${baseUrl}${currentPath}${searchParams}`;
    } catch (error) {
      // Fallback to configured URL if window access fails
      // Only log in development environment for debugging
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('Canonical URL generation failed:', error);
      }
      return url;
    }
  })();
  const imageUrl = image.startsWith('http')
    ? image
    : `${url.replace(/\/$/, '')}${image}`;
  const siteName = appConfig.seo.title;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />
      <meta name='author' content={personalInfo.name} />
      {/* Canonical URL - only override if different from index.html */}
      <link rel='canonical' href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} itemProp='image' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:type' content='image/jpeg' />
      <meta
        property='og:image:alt'
        content={`${personalInfo.name} - ${personalInfo.title} Portfolio`}
      />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:locale:alternate' content='en_GB' />

      {/* Twitter Card Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:creator'
        content={`@${personalInfo.twitter.split('/').pop()}`}
      />
      <meta
        name='twitter:site'
        content={`@${personalInfo.twitter.split('/').pop()}`}
      />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />
      <meta
        name='twitter:image:alt'
        content={`${personalInfo.name} - ${personalInfo.title} Portfolio`}
      />

      {/* SEO and Search Engine Tags */}
      <meta
        name='robots'
        content='index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
      />
      <meta name='theme-color' content='#1a1a1a' />
      <meta name='msapplication-TileColor' content='#1a1a1a' />

      {/* Performance and Caching */}
      <meta
        httpEquiv='Cache-Control'
        content='public, max-age=31536000, immutable'
      />
      <meta name='format-detection' content='telephone=no' />

      {/* WhatsApp Optimization */}
      <meta property='og:image:secure_url' content={imageUrl} />
      <meta property='og:updated_time' content={getOpenGraphDate()} />

      {/* Professional Portfolio Optimization */}
      <meta
        property='profile:first_name'
        content={personalInfo.name.split(' ')[0]}
      />
      <meta
        property='profile:last_name'
        content={personalInfo.name.split(' ')[1]}
      />
      <meta
        property='profile:username'
        content={personalInfo.github.split('/').pop() || 'portfolio'}
      />

      {/* Twitter/X Optimization */}
      <meta name='twitter:domain' content={appConfig.seo.domain} />
      <meta name='twitter:url' content={canonicalUrl} />
      <meta name='twitter:label1' content='Technologies' />
      <meta name='twitter:data1' content='React, TypeScript, Python, AWS' />
      <meta name='twitter:label2' content='Location' />
      <meta name='twitter:data2' content='London, UK' />

      {/* Additional Professional SEO Tags */}
      <meta name='application-name' content={siteName} />
      <meta name='apple-mobile-web-app-title' content={siteName} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='HandheldFriendly' content='true' />
      <meta name='MobileOptimized' content='width' />

      {/* Search Engine Verification */}
      <meta
        name='google-site-verification'
        content='skA8-7HLWl1U-rDcv7nR9Km2iM5mhUG1-penyn3jVQ4'
      />
      <meta name='msvalidate.01' content='verification-pending' />

      {/* Professional Portfolio Specific */}
      <meta name='classification' content='Business' />
      <meta
        name='category'
        content='Technology, AI Software Engineering, Portfolio'
      />
      <meta name='coverage' content='Worldwide' />
      <meta name='distribution' content='Global' />
      <meta name='rating' content='General' />
    </Helmet>
  );
};

export default SEO;
