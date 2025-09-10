const fs = require('fs');
const path = require('path');

// Use environment variable - fallback is acceptable here since this is a build script
const baseUrl =
  process.env.REACT_APP_SITE_URL || 'https://umairleo1.github.io/portfolio/';
const buildDir = path.join(__dirname, '..', 'build');
const sitemapPath = path.join(buildDir, 'sitemap.xml');

// Define all portfolio sections/pages
const urls = [
  {
    loc: baseUrl,
    changefreq: 'monthly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0],
  },
];

// Generate XML sitemap
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Ensure build directory exists
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }

  // Write sitemap
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`✓ Sitemap generated at ${sitemapPath}`);
};

// Run if called directly
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };
