# Project Structure

Comprehensive overview of the portfolio project organization and file structure.

## Directory Structure

```
portfolio-website/
├── public/                     # Static assets
│   ├── assets/                # Organized assets
│   │   ├── favicons/          # Favicon files (16x16 to 512x512)
│   │   ├── images/            # Profile pictures and social media images
│   │   │   └── social-preview-1200x630.jpg # Optimized Open Graph image
│   │   └── icons/             # App icons and logos
│   ├── .htaccess              # Apache server configuration for SEO & performance
│   ├── index.html             # Enhanced HTML template with professional SEO meta tags
│   ├── manifest.json          # PWA manifest configuration
│   ├── robots.txt             # SEO crawler directives
│   └── CNAME                  # Custom domain configuration (when needed)
├── src/
│   ├── components/            # React components with CSS Modules
│   │   ├── common/            # Shared components
│   │   │   ├── ErrorBoundary/ # Error handling with analytics integration
│   │   │   ├── LoadingSpinner/# Loading states with animations
│   │   │   ├── SectionLoader/ # Section loading component
│   │   │   └── AnalyticsProvider/# Global analytics tracking provider
│   │   ├── effects/           # Animation components
│   │   │   ├── CursorTrail/   # Mouse cursor trail effect
│   │   │   └── FloatingElements/# Background floating animations
│   │   ├── layout/            # Layout components
│   │   │   ├── Header/        # Navigation with scroll detection
│   │   │   └── Footer/        # Footer with tech stack icons
│   │   ├── sections/          # Main page sections
│   │   │   ├── Hero/          # Landing section with animations
│   │   │   ├── Expertise/     # Skills showcase with categories
│   │   │   ├── Education/     # Education & certifications
│   │   │   ├── Work/          # Work showcase with projects
│   │   │   ├── Experience/    # Professional experience timeline
│   │   │   └── Contact/       # Contact information
│   │   ├── seo/               # Enterprise-grade SEO optimization components
│   │   │   ├── SEO.tsx        # Professional meta tags with enhanced social media support
│   │   │   ├── StructuredData.tsx # Comprehensive JSON-LD schemas (Person, WebPage, FAQ, Breadcrumb)
│   │   │   ├── WebVitalsOptimizer.tsx # Core Web Vitals optimization
│   │   │   └── index.ts       # SEO components barrel export
│   │   └── ui/                # Reusable UI components
│   │       ├── Card/          # Reusable card component with variants
│   │       ├── Button/        # Button with loading states
│   │       ├── Badge/         # Skill badges with variants
│   │       ├── LogoScroll/    # Animated company logos
│   │       ├── ScrollToBottom/# Scroll indicator
│   │       ├── Section/       # Analytics-enabled section wrapper
│   │       ├── SectionHeader/ # Reusable section header component
│   │       └── TrackedLink/   # External link tracking component
│   ├── data/                  # Modular data architecture with domain separation
│   │   ├── index.ts           # Main barrel export for all data
│   │   ├── config/            # Application configuration
│   │   │   └── app.ts         # SEO, environment, and site configuration
│   │   ├── types/             # TypeScript type definitions
│   │   │   └── index.ts       # Comprehensive data types
│   │   ├── personal/          # Personal information and interests
│   │   │   ├── index.ts       # Personal data barrel export
│   │   │   ├── info.ts        # Personal details and contact info
│   │   │   └── interests.ts   # Personal interests and languages
│   │   ├── professional/      # Professional experience and skills
│   │   │   ├── index.ts       # Professional data barrel export
│   │   │   ├── skills.ts      # Technical skills by category
│   │   │   ├── experience.ts  # Work experience and achievements
│   │   │   ├── education.ts   # Educational background
│   │   │   └── certifications.ts # Professional certifications
│   │   └── showcase/          # Portfolio and project data
│   │       ├── index.ts       # Showcase data barrel export
│   │       ├── projects.ts    # Featured projects with details
│   │       └── achievements.ts # Professional achievements
│   ├── hooks/                 # Custom React hooks with TypeScript
│   │   ├── useAnalytics.ts    # Analytics tracking with privacy compliance
│   │   ├── useIntersectionObserver.ts # Viewport detection for animations
│   │   ├── useLocalStorage.ts # Local storage with TypeScript safety
│   │   ├── useScrollDirection.ts # Scroll direction detection
│   │   ├── useThrottle.ts     # Performance throttling utility
│   │   └── index.ts           # Hooks barrel export
│   ├── styles/                # Global styles and CSS modules
│   │   ├── globals.css        # Global CSS variables and base styles
│   │   ├── components.css     # Shared component styles
│   │   └── utilities.css      # Utility classes for common patterns
│   ├── utils/                 # Utility functions with full TypeScript typing
│   │   ├── IconWrapper.tsx    # React Icons wrapper
│   │   ├── animations.ts      # Animation utilities
│   │   ├── analytics.ts       # GA4 analytics with error handling & privacy
│   │   ├── version.ts         # Dynamic version management for releases
│   │   └── index.ts           # Utility exports
│   ├── lib/                   # Library utilities and constants
│   │   └── constants/         # Application constants and configuration
│   ├── App.tsx                # Main application component with providers
│   ├── App.module.css         # Application-level styles
│   ├── index.tsx              # React application entry point
│   └── index.css              # Global styles and CSS reset
├── docs/                      # Comprehensive documentation
│   ├── SETUP.md               # Installation and configuration guide
│   ├── CUSTOMIZATION.md       # Personalization instructions
│   ├── ANALYTICS.md           # Google Analytics integration guide
│   └── SEMANTIC_RELEASE.md    # Automated release management guide
├── scripts/                   # Development automation
│   ├── generate-sitemap.js    # Automatic SEO sitemap generation
│   ├── detect-domain.js       # Intelligent CI/CD domain detection
│   └── validate-release-setup.sh # Release configuration validation
├── .env.example               # Environment variables template with secrets
├── .env.production            # Production public configuration (committed)
├── CHANGELOG.md               # Automated release notes and version history
├── CODE_OF_CONDUCT.md         # Community guidelines and standards
├── .env.local                 # Local secrets and overrides (gitignored)
├── .gitignore                 # Git ignore patterns with environment setup
├── .gitmessage                # Conventional commit template for semantic release
├── .lighthouserc.json         # Lighthouse CI configuration for performance
├── .prettierrc                # Prettier code formatting configuration
├── .releaserc.json            # Semantic release automation configuration
├── config-overrides.js        # react-app-rewired webpack configuration
├── eslint.config.js           # ESLint linting rules and configuration
├── package.json               # Dependencies, scripts, and project metadata
├── tsconfig.json              # TypeScript compiler configuration
├── LICENSE                    # MIT License terms
└── README.md                  # Project documentation and setup guide
```

## Key Directories

### `/public/`

**Enhanced Static Assets with Professional SEO:**

- `.htaccess` - **Professional server configuration** for:
  - HTTP 206 response prevention (fixes social media crawling issues)
  - Advanced caching headers with immutable content
  - Security headers (X-Frame-Options, CSP, XSS protection)
  - HTTPS enforcement and canonical URL redirects
  - Performance optimizations (Gzip compression)
- `index.html` - **Enterprise-grade SEO template** with:
  - Professional Open Graph tags with profile schema
  - Enhanced Twitter Card metadata with labels
  - Mobile optimization tags for app-like experience
  - Security and performance meta tags

### `/src/components/`

Organized by functionality with CSS Modules for styling:

- `common/` - Shared, reusable components
- `effects/` - Animation and visual effect components
- `layout/` - Page layout and navigation components
- `sections/` - Main portfolio sections (Hero, Work, etc.)
- `seo/` - **Enterprise SEO optimization** with comprehensive structured data
- `ui/` - Generic UI components and design system

### `/src/data/`

Modular data architecture with domain separation:

- `config/` - **Application and SEO configuration** (URLs, meta data)
- `personal/` - Personal information and interests
- `professional/` - Experience, skills, education
- `showcase/` - Projects and achievements
- `types/` - TypeScript definitions

### `/src/hooks/`

Custom React hooks with TypeScript:

- Analytics integration
- Performance optimizations
- UI state management
- Browser API abstractions

### `/src/utils/`

Utility functions and helpers:

- Animation utilities
- Analytics tracking
- Version management
- Common utilities

## Configuration Files

### Core Configuration

- `.releaserc.json` - Semantic release automation
- `tsconfig.json` - TypeScript compilation settings
- `eslint.config.js` - Code quality and linting rules
- `.prettierrc` - Code formatting standards

### Environment & Secrets

- `.env.example` - Environment variable template
- `.env.production` - Production configuration (committed)
- `.env.local` - Local development secrets (gitignored)

### Build & Development

- `config-overrides.js` - Webpack customization via react-app-rewired
- `.lighthouserc.json` - Performance monitoring configuration
- `.gitmessage` - Conventional commit template

## Documentation Organization

### Primary Documentation

- `README.md` - Project overview and quick start
- `CHANGELOG.md` - Automated release history
- `CODE_OF_CONDUCT.md` - Community standards

### Detailed Guides

- `docs/SETUP.md` - Installation and configuration
- `docs/CUSTOMIZATION.md` - Content and styling customization
- `docs/ANALYTICS.md` - Analytics integration and insights
- `docs/SEMANTIC_RELEASE.md` - Release automation and versioning
- `docs/DEPLOYMENT.md` - Deployment and CI/CD pipeline
- `docs/SEO.md` - **Comprehensive SEO implementation guide** (95+ Lighthouse scores)
- `docs/CODE_QUALITY.md` - Code standards and automation
- `docs/PROJECT_STRUCTURE.md` - **This document** - Complete project organization

## SEO Architecture Enhancements

### **Professional SEO Implementation**

The portfolio now features enterprise-grade SEO architecture:

#### **Static SEO Foundation (`public/`)**

- **`.htaccess`** - Professional server configuration:
  ```apache
  # Prevents HTTP 206 responses that break social media crawlers
  Header set Accept-Ranges none
  # Advanced caching with immutable content strategy
  Header set Cache-Control "public, max-age=31536000, immutable"
  # Security headers for professional deployment
  Header always set X-Frame-Options "SAMEORIGIN"
  ```
- **Enhanced `index.html`** - Professional meta tag foundation with:
  - Correct `og:type="profile"` for personal portfolios
  - Enhanced Twitter labels with technology and location data
  - Professional mobile optimization tags
  - Security and performance meta directives

#### **Dynamic SEO Components (`src/components/seo/`)**

- **`SEO.tsx`** - Dynamic meta tag management with:
  - Canonical URL handling to prevent duplicate content
  - Image preloading for social media previews
  - Professional social media optimization
  - Mobile-first responsive meta tags
- **`StructuredData.tsx`** - Comprehensive JSON-LD schemas:
  - **Person Schema** - Professional profile with credentials
  - **WebPage Schema** - Page-specific structured data
  - **FAQ Schema** - Enhanced search visibility
  - **Breadcrumb Schema** - Navigation structure
  - **Professional Service Schema** - Business presence

#### **SEO Configuration (`src/data/config/`)**

- **Environment-driven URLs** - Seamless GitHub Pages ↔ Custom Domain migration
- **Professional metadata** - Optimized titles, descriptions, keywords
- **Social media optimization** - Enhanced Open Graph and Twitter Cards

### **Performance & Security Integration**

- **HTTP 206 Prevention** - Fixes social media crawler issues
- **Immutable Caching Strategy** - Optimal performance for static assets
- **Security Headers** - Professional-grade protection
- **HTTPS Enforcement** - SEO ranking factor compliance

This structure promotes:

- **Maintainability** - Clear separation of concerns
- **Scalability** - Easy to add new features and sections
- **Developer Experience** - Intuitive organization and documentation
- **Performance** - Optimized build configuration and lazy loading
- **Quality** - Comprehensive testing and automation
- **Professional SEO** - Enterprise-grade optimization (95+ Lighthouse scores)
- **Security-First** - Comprehensive header protection
- **Mobile-Optimized** - Progressive Web App capabilities
