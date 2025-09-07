# Project Structure

Comprehensive overview of the portfolio project organization and file structure.

## Directory Structure

```
portfolio/
├── public/                     # Static assets
│   ├── assets/                # Organized assets
│   │   ├── favicons/          # Favicon files (16x16 to 512x512)
│   │   ├── images/            # Profile pictures and graphics
│   │   └── icons/             # App icons and logos
│   ├── index.html             # HTML template with meta tags
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
│   │   ├── seo/               # SEO and structured data components
│   │   │   ├── SEO.tsx        # Dynamic meta tags with Open Graph
│   │   │   ├── StructuredData.tsx # JSON-LD schemas for rich snippets
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

### `/src/components/`

Organized by functionality with CSS Modules for styling:

- `common/` - Shared, reusable components
- `effects/` - Animation and visual effect components
- `layout/` - Page layout and navigation components
- `sections/` - Main portfolio sections (Hero, Work, etc.)
- `seo/` - SEO optimization and structured data
- `ui/` - Generic UI components and design system

### `/src/data/`

Modular data architecture with domain separation:

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
- `docs/SEO.md` - SEO optimization and social media
- `docs/CODE_QUALITY.md` - Code standards and automation

This structure promotes:

- **Maintainability** - Clear separation of concerns
- **Scalability** - Easy to add new features and sections
- **Developer Experience** - Intuitive organization and documentation
- **Performance** - Optimized build configuration and lazy loading
- **Quality** - Comprehensive testing and automation
