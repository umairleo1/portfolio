import React from 'react';
import { Helmet } from 'react-helmet-async';
import { appConfig } from '@/data';

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
  image = '/assets/og-image.jpg',
  url = 'https://umairleo1.github.io/portfolio',
  type = 'website',
}) => {
  const fullTitle =
    title === appConfig.seo.title ? title : `${title} | ${appConfig.seo.title}`;
  const canonicalUrl = `${url}${window.location.pathname}`;
  const imageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />
      <meta name='author' content='Muhammad Umair' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='canonical' href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:site_name' content='Muhammad Umair Portfolio' />

      {/* Twitter Card Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@umairleo17' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl} />

      {/* Additional Meta Tags */}
      <meta name='robots' content='index, follow' />
      <meta name='language' content='en' />
      <meta name='theme-color' content='#1a1a1a' />
      <meta name='msapplication-TileColor' content='#1a1a1a' />
    </Helmet>
  );
};

export default SEO;
