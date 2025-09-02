# Deployment Guide

Comprehensive deployment instructions for the professional portfolio with intelligent CI/CD system.

## Overview

The portfolio includes an **enterprise-grade intelligent deployment system** that automatically detects and configures builds for different deployment targets:

- **GitHub Pages** - Automatic deployment with `/portfolio` path
- **Custom Domain** - Seamless migration with root path configuration
- **CI/CD Intelligence** - Automatic detection and optimization

## Intelligent Build System

### Automatic Detection

The build system intelligently detects your deployment target:

```bash
npm run build  # Automatically detects deployment type
```

**Detection Logic:**

1. **CNAME file exists** → Custom Domain build
2. **Homepage field is custom** → Custom Domain build
3. **GitHub Pages URL** → GitHub Pages build

### Manual Override Commands

For specific deployment requirements:

```bash
npm run build:github-pages   # Force GitHub Pages build
npm run build:custom-domain  # Force custom domain build
npm run build:sitemap        # Generate sitemap only
```

## GitHub Pages Deployment

### Automatic Deployment (Current Setup)

**Current Configuration:**

- Repository: `umairleo1/portfolio`
- Branch: `main`
- Path: `/portfolio`
- URL: `https://umairleo1.github.io/portfolio`

**Deployment Process:**

1. Push code to `main` branch
2. GitHub Actions triggers build
3. Intelligent detection → GitHub Pages build
4. Deploy to `gh-pages` branch
5. Site available at GitHub Pages URL

**No manual steps required!**

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml (automatic)
- name: Build
  run: npm run build # Uses intelligent detection

- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./build
```

## Custom Domain Migration

### Step-by-Step Migration

When ready to migrate to a custom domain:

#### 1. Environment Configuration

Update `.env.production`:

```bash
# Before (GitHub Pages)
REACT_APP_SITE_URL=https://umairleo1.github.io/portfolio

# After (Custom Domain)
REACT_APP_SITE_URL=https://yourcustomdomain.com
REACT_APP_SITE_NAME=Your Site Name
REACT_APP_SITE_DOMAIN=yourcustomdomain.com
```

#### 2. DNS Configuration

Set up DNS records with your domain provider:

**For Apex Domain (example.com):**

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

**For Subdomain (www.example.com):**

```
CNAME  www  username.github.io
```

#### 3. GitHub Repository Settings

1. Go to repository Settings → Pages
2. Source: Deploy from a branch (`gh-pages`)
3. Custom domain: Enter your domain (`example.com`)
4. Enforce HTTPS: Enabled

#### 4. Add CNAME File

```bash
echo "yourcustomdomain.com" > public/CNAME
```

#### 5. Update Package.json

```json
{
  "homepage": "https://yourcustomdomain.com"
}
```

#### 6. Deploy

```bash
git add .
git commit -m "feat: migrate to custom domain"
git push
```

**The intelligent CI/CD system automatically:**

- Detects custom domain setup
- Uses appropriate build configuration
- Generates correct sitemap URLs
- Applies proper asset paths

### Domain Verification

After deployment, verify:

1. **DNS Propagation**: `dig yourcustomdomain.com`
2. **SSL Certificate**: Check HTTPS works
3. **Redirect Setup**: www → apex or vice versa
4. **Sitemap URLs**: Check `https://yourcustomdomain.com/sitemap.xml`

## Environment Management

### Professional Architecture

```bash
├── .env.example        # Template for developers (committed)
├── .env.production     # Production public config (committed)
└── .env.local          # Local secrets (gitignored)
```

### Environment Variables by Context

**Production Environment (`.env.production`):**

```bash
# Public configuration - safe to commit
REACT_APP_SITE_URL=https://umairleo1.github.io/portfolio
REACT_APP_SITE_NAME=Muhammad Umair - Software Engineer
REACT_APP_SITE_DOMAIN=umairleo1.github.io
NODE_ENV=production
```

**Local Development (`.env.local`):**

```bash
# Private configuration - never committed
REACT_APP_GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"
REACT_APP_EMAILJS_SERVICE_ID="service_xxxxxx"
REACT_APP_EMAILJS_TEMPLATE_ID="template_xxxxxx"
REACT_APP_EMAILJS_PUBLIC_KEY="your_public_key"
REACT_APP_GITHUB_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxx"
```

## Build Process Details

### Intelligent Detection Script

`scripts/detect-domain.js` performs:

1. **Environment Analysis**
   - Checks for CNAME file existence
   - Analyzes homepage field in package.json
   - Determines deployment target

2. **Build Configuration**
   - Sets appropriate PUBLIC_URL
   - Configures asset paths
   - Selects build strategy

3. **Logging & Transparency**
   - Shows detection logic
   - Displays chosen configuration
   - Provides build command visibility

### Build Output

**GitHub Pages Build:**

```bash
Domain Detection:
   CNAME file exists: false
   Homepage: https://umairleo1.github.io/portfolio
   Custom domain detected: false
Running: PUBLIC_URL=/portfolio react-app-rewired build
```

**Custom Domain Build:**

```bash
Domain Detection:
   CNAME file exists: true
   Homepage: https://yourcustomdomain.com
   Custom domain detected: true
Running: react-app-rewired build
```

## SEO & Analytics

### Automatic SEO Updates

The deployment system automatically updates:

- **Sitemap URLs** - Uses environment-based URLs
- **Structured Data** - Updates canonical URLs
- **Meta Tags** - Dynamic site URL references
- **Analytics** - Maintains tracking continuity

### Search Console Updates

After custom domain migration:

1. **Add New Property** in Google Search Console
2. **Verify Ownership** with HTML file or DNS
3. **Submit New Sitemap** - `https://yourcustomdomain.com/sitemap.xml`
4. **301 Redirects** - Set up from old URLs (if needed)

## Troubleshooting

### Common Issues

**Build Fails with Domain Detection:**

- Check CNAME file format (no protocols, just domain)
- Verify package.json homepage field syntax
- Use manual override: `npm run build:github-pages`

**Custom Domain Shows 404:**

- Verify DNS propagation: `nslookup yourcustomdomain.com`
- Check GitHub Pages settings
- Ensure CNAME file is in `public/` folder

**Assets Load with Wrong Paths:**

- Check PUBLIC_URL in build output
- Verify intelligent detection chose correct mode
- Use browser dev tools to inspect asset URLs

**SEO URLs Still Show Old Domain:**

- Check `.env.production` configuration
- Verify sitemap.xml has updated URLs
- Clear browser cache and CDN cache

### Manual Verification Commands

```bash
# Check DNS
dig yourcustomdomain.com
nslookup yourcustomdomain.com

# Test builds
npm run build:github-pages    # Force GitHub Pages
npm run build:custom-domain   # Force Custom Domain

# Verify sitemap
curl https://yourcustomdomain.com/sitemap.xml

# Check SSL
curl -I https://yourcustomdomain.com
```

## Advanced Configuration

### Multiple Environments

For staging/development deployments:

```bash
# .env.staging
REACT_APP_SITE_URL=https://staging.example.com

# .env.development
REACT_APP_SITE_URL=http://localhost:3000
```

### Custom Build Strategies

Override detection with environment variables:

```bash
FORCE_CUSTOM_DOMAIN=true npm run build    # Force custom domain
FORCE_GITHUB_PAGES=true npm run build     # Force GitHub Pages
```

## Monitoring & Analytics

### Deployment Health Checks

After deployment, monitor:

1. **Site Accessibility** - All pages load correctly
2. **Asset Loading** - Images, CSS, JS load from correct paths
3. **SEO Functionality** - Sitemap accessible, meta tags correct
4. **Analytics** - Google Analytics tracking works
5. **Performance** - Core Web Vitals maintain standards

### Performance Monitoring

The deployment includes automatic performance monitoring:

- **Lighthouse CI** - Automated performance scoring
- **Core Web Vitals** - Real user monitoring
- **Bundle Analysis** - Build size tracking
- **Error Tracking** - Runtime error monitoring

This intelligent deployment system ensures seamless transitions between GitHub Pages and custom domains while maintaining enterprise-grade reliability and performance.
