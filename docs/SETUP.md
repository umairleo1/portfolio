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

### 3. Environment Configuration

```bash
cp .env.example .env
```

Edit `.env` with your configuration values:

```bash
# Environment
NODE_ENV=development

# Required Secrets
REACT_APP_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
```

**Note:** All public information (personal details, social links, resume URLs, etc.) is stored in the `src/data` folder for better organization and consistency. Only secrets need environment variables.

### 4. Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build

```bash
npm run build
```

The build folder contains optimized production-ready files.

## Environment Files

- `.env` - Your personal configuration (ignored by git)
- `.env.example` - Template with all available variables
- `.env.local` - Local development overrides (ignored by git)

## Available Scripts

```bash
npm start                    # Development server
npm run build               # Production build
npm run build:analyze       # Bundle analysis
npm run test               # Run tests
npm run test:coverage      # Test coverage report
npm run lint              # ESLint check
npm run lint:fix         # Auto-fix ESLint issues
npm run type-check       # TypeScript compilation check
npm run format           # Prettier formatting
npm run clean           # Clean build artifacts
npm run security:audit  # Security vulnerability check
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
- **[`CODE_QUALITY.md`](CODE_QUALITY.md)** - Code quality automation and standards
- **[`../.github/CICD.md`](../.github/CICD.md)** - CI/CD pipeline and deployment automation
- **[`../CONTRIBUTING.md`](../CONTRIBUTING.md)** - Development and contribution guidelines
- **[`../SECURITY.md`](../SECURITY.md)** - Security policy and vulnerability reporting
