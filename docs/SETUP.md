# Setup Guide

Complete installation and configuration instructions for the portfolio application.

## Prerequisites

- Node.js 20.9.0 or higher
- npm 10.0.0 or higher
- Git for version control

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/umairleo1/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Professional Environment Configuration

The project uses a **professional multi-environment setup**:

```bash
.env.example       # Template for developers (committed)
.env.production    # Production public config (committed)
.env.local         # Your local secrets (gitignored)
```

**Setup your local environment:**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual secret values:

```bash
# Environment
NODE_ENV=development

# Local Development Overrides (optional)
# REACT_APP_SITE_URL=http://localhost:3000
# REACT_APP_SITE_NAME=Muhammad Umair - Portfolio (Dev)

# Required Secrets (Add your actual values)
REACT_APP_GOOGLE_ANALYTICS_ID="G-XXXXXXXXXX"
REACT_APP_EMAILJS_SERVICE_ID="service_xxxxxx"
REACT_APP_EMAILJS_TEMPLATE_ID="template_xxxxxx"
REACT_APP_EMAILJS_PUBLIC_KEY="your_public_key"
REACT_APP_GITHUB_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxx"
```

**Environment File Structure:**

- **`.env.production`** → Production URLs and site config (safe to commit)
- **`.env.local`** → Your private secrets (never committed)
- **`.env.example`** → Template for other developers

**Benefits:**

- **Security-first** - Secrets never committed to repository
- **CI/CD ready** - Production config automatically available
- **Team-friendly** - Consistent configuration for all developers
- **Custom domain ready** - Easy URL migration

### 4. Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Intelligent Production Build

**Automatic Detection (Recommended):**

```bash
npm run build  # Automatically detects GitHub Pages vs Custom Domain
```

**Manual Override Commands:**

```bash
npm run build:github-pages   # Force GitHub Pages build
npm run build:custom-domain  # Force custom domain build
```

The build system **intelligently detects** your deployment target:

- **GitHub Pages**: Uses `/portfolio` path prefix
- **Custom Domain**: Uses root path
- **Automatic**: Based on CNAME file or homepage field

## Professional Environment Architecture

```bash
├── .env.example        # Template for developers (committed)
├── .env.production     # Production public config (committed)
└── .env.local          # Your local secrets (gitignored)
```

**Environment Loading Order:**

1. `.env.production` → Base production configuration
2. `.env.local` → Your local overrides and secrets

**Custom Domain Migration:**
When ready for a custom domain, just update 3 things:

1. `.env.production` → Change REACT_APP_SITE_URL
2. Add `public/CNAME` file
3. Update `package.json` homepage
4. Deploy → **Automatic detection handles everything else!**

## Available Scripts

**Development:**

```bash
npm start                    # Development server
npm run dev                  # Dev server + test watcher
npm run start:all           # All development services
```

**Building (Intelligent System):**

```bash
npm run build               # Intelligent auto-detection
npm run build:github-pages  # Force GitHub Pages build
npm run build:custom-domain # Force custom domain build
npm run build:analyze       # Bundle size analysis
npm run build:sitemap       # Generate SEO sitemap
```

**Testing & Quality:**

```bash
npm test                    # Run tests interactively
npm run test:ci             # Tests with coverage
npm run lint                # ESLint check
npm run lint:fix            # Auto-fix ESLint issues
npm run type-check          # TypeScript compilation check
npm run validate            # Run all quality checks

# Release Management Scripts (see docs/SEMANTIC_RELEASE.md)
npm run release:validate    # Validate semantic release setup
npm run release:dry         # Test release without executing
npm run version:check       # Check current version
```

**Utilities:**

```bash
npm run format              # Prettier formatting
npm run clean               # Clean build artifacts
npm run analyze             # Bundle analysis
```

## Development Tools

- **Hot Reload** - Automatic browser refresh on file changes
- **Error Overlay** - In-browser error display during development
- **TypeScript** - Real-time type checking
- **ESLint** - Code quality and consistency checking
- **Prettier** - Automatic code formatting

## Troubleshooting

### Common Issues

**Port 3000 already in use:**

```bash
npx kill-port 3000
npm start
```

**Node modules issues:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript compilation errors:**

```bash
npm run type-check
```

**Build failures:**

```bash
npm run clean
npm run build
```

## Additional Documentation

- **[`../README.md`](../README.md)** - Project overview and quick start
- **[`CUSTOMIZATION.md`](CUSTOMIZATION.md)** - Personalization and content management
- **[`ANALYTICS.md`](ANALYTICS.md)** - Analytics integration and business insights
- **[`DEPLOYMENT.md`](DEPLOYMENT.md)** - Comprehensive deployment and domain migration guide
- **[`CODE_QUALITY.md`](CODE_QUALITY.md)** - Code quality automation and standards
- **[`../.github/CICD.md`](../.github/CICD.md)** - CI/CD pipeline and deployment automation
- **[`../CONTRIBUTING.md`](../CONTRIBUTING.md)** - Development and contribution guidelines
- **[`../SECURITY.md`](../SECURITY.md)** - Security policy and vulnerability reporting
