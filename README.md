# Professional Portfolio Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github&logoColor=white)](https://umairleo1.github.io/portfolio)
[![Build Status](https://img.shields.io/github/actions/workflow/status/umairleo1/portfolio/deploy.yml?branch=main&style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/umairleo1/portfolio/actions)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)

A modern, responsive portfolio website template for software engineers. Built with React 19, TypeScript, and CSS Modules featuring professional design, enterprise-grade analytics, and optimized performance.

## Live Demo

[**View Live Portfolio →**](https://umairleo1.github.io/portfolio)

## Features

- **Modern Tech Stack** - React 19, TypeScript, CSS Modules
- **Responsive Design** - Mobile-first with smooth animations
- **SEO Optimized** - 95+ Lighthouse scores with structured data
- **Analytics Ready** - Enterprise GA4 with privacy compliance
- **Automated Releases** - Semantic versioning with conventional commits
- **CI/CD Automated** - GitHub Actions deployment with quality gates

## Quick Start

### Prerequisites

- Node.js 20.9.0 or higher
- npm 10.0.0 or higher
- Git for version control

### Installation

```bash
# Clone repository
git clone https://github.com/umairleo1/portfolio.git
cd portfolio

# Install dependencies
npm ci

# Configure environment (professional setup)
cp .env.example .env.local
# Edit .env.local with your actual secret values

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
# Development
npm start                    # Start development server
npm run dev                  # Start dev server + test watcher
npm run start:all           # Start all development services

# Building (Intelligent Build System)
npm run build               # Intelligent auto-detection (GitHub Pages/Custom Domain)
npm run build:github-pages  # Force GitHub Pages build
npm run build:custom-domain # Force custom domain build
npm run build:analyze       # Build with bundle analysis
npm run build:sitemap       # Generate sitemap.xml for SEO

# Testing & Quality
npm test                    # Run tests interactively
npm run test:ci             # Run tests with coverage
npm run lint                # Check code quality
npm run lint:fix            # Fix linting issues
npm run type-check          # TypeScript compilation check
npm run validate            # Run all quality checks

# Release Management
npm run release:validate    # Validate semantic release setup
npm run release:dry         # Test release without executing
npm run version:check       # Check current version

# Utilities
npm run format              # Format code with Prettier
npm run clean               # Clean build artifacts
npm run analyze             # Analyze bundle size
```

## Configuration

### Environment Setup (Professional Architecture)

The project uses a professional multi-environment configuration system:

```bash
.env.example       # Template for developers (committed)
.env.production    # Production public config (committed)
.env.local         # Your local secrets (gitignored)
```

**Key Features:**

- **Intelligent CI/CD** - Automatically detects GitHub Pages vs Custom Domain
- **Environment-specific URLs** - Seamless migration to custom domains
- **Security-first** - Real secrets never committed to repository
- **Team-friendly** - Consistent production configuration

### Custom Domain Migration

When ready for a custom domain:

1. **Update environment:**

   ```bash
   # .env.production
   REACT_APP_SITE_URL=https://yourcustomdomain.com
   ```

2. **Add CNAME file:**

   ```bash
   echo "yourcustomdomain.com" > public/CNAME
   ```

3. **Update package.json:**

   ```json
   "homepage": "https://yourcustomdomain.com"
   ```

4. **Deploy** - CI/CD automatically detects and builds for custom domain!

For detailed setup instructions see [`docs/SETUP.md`](docs/SETUP.md).

## Analytics & Insights

Enterprise-grade Google Analytics 4 implementation with comprehensive tracking, GDPR compliance, and professional insights for career optimization.

**Key Features:**

- Complete user journey tracking with scroll depth and time-based engagement
- Contact form funnel analysis with abandonment tracking
- Project interaction analytics with technology metadata
- React error boundary integration with automatic error reporting
- Web Vitals monitoring for performance optimization
- Privacy-compliant consent management with update functionality

For complete analytics documentation including setup, business value, and implementation details, see [`docs/ANALYTICS.md`](docs/ANALYTICS.md).

## Architecture & Code Quality

### DRY Principle Implementation

The project follows strict DRY principles with comprehensive reusable components and patterns:

**Reusable UI Components:**

- `Section` - Analytics-enabled section wrapper with consistent styling
- `SectionHeader` - Standardized section headers with title and subtitle
- `TrackedLink` - Analytics-integrated external link component
- `Card`, `Badge`, `Button` - Consistent design system components

**Reusable Hooks:**

- `useExpandable` - Expand/collapse functionality for sections
- `useAnalytics` - Comprehensive analytics tracking
- `useSectionSEO` - Dynamic SEO optimization per section
- `useThrottle` - Performance-optimized event handling

**Design System:**

- CSS Modules for component isolation
- Centralized styling patterns in `styles/components/`
- Consistent animation utilities and theme variables
- Mobile-first responsive design patterns

### Code Quality Standards

- TypeScript strict mode with comprehensive type safety
- ESLint + Prettier automated code formatting
- Component-driven architecture with clear separation of concerns
- Performance-optimized with lazy loading and code splitting

## Customization

For complete customization instructions including personal information updates, portfolio content management, styling, and deployment configuration, see [`docs/CUSTOMIZATION.md`](docs/CUSTOMIZATION.md).

## Tech Stack

<div align="center">

[![My Skills](https://skillicons.dev/icons?i=react,typescript,css,html,js,nodejs,npm,webpack,github,githubactions,vscode,git,jest,prettier,eslint&theme=dark)](https://skillicons.dev)

</div>

| Category        | Technologies                                           |
| --------------- | ------------------------------------------------------ |
| **Frontend**    | React 19, TypeScript 4.9, CSS Modules, HTML5           |
| **Icons**       | React Icons with type-safe wrapper                     |
| **Animations**  | Framer Motion, Custom CSS animations                   |
| **Build Tools** | react-app-rewired, Create React App, Webpack           |
| **Development** | ESLint 9.33, Prettier 3.0, Husky 9.1, lint-staged 16.1 |
| **Testing**     | Jest, React Testing Library, Coverage Reports          |
| **Deployment**  | GitHub Pages, GitHub Actions, CI/CD Pipeline           |

## Project Structure

Organized architecture with component-driven design, modular data structure, and comprehensive documentation.

For complete project structure documentation including file organization, component hierarchy, and development patterns, see [`docs/PROJECT_STRUCTURE.md`](docs/PROJECT_STRUCTURE.md).

## Documentation

- **[`CHANGELOG.md`](CHANGELOG.md)** - Automated release notes and version history
- **[`docs/SETUP.md`](docs/SETUP.md)** - Complete installation and configuration guide
- **[`docs/CUSTOMIZATION.md`](docs/CUSTOMIZATION.md)** - Personalization and content management
- **[`docs/ANALYTICS.md`](docs/ANALYTICS.md)** - Analytics integration and business insights
- **[`docs/SEMANTIC_RELEASE.md`](docs/SEMANTIC_RELEASE.md)** - Automated release management and versioning
- **[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)** - Deployment and custom domain migration guide
- **[`docs/SEO.md`](docs/SEO.md)** - Comprehensive SEO implementation guide
- **[`docs/CODE_QUALITY.md`](docs/CODE_QUALITY.md)** - Code quality automation and standards
- **[`.github/CICD.md`](.github/CICD.md)** - CI/CD pipeline and deployment automation
- **[`CONTRIBUTING.md`](CONTRIBUTING.md)** - Development and contribution guidelines
- **[`SECURITY.md`](SECURITY.md)** - Security policy and vulnerability reporting
- **[`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)** - Community standards and behavior guidelines

## Versioning System

Automated versioning with Semantic Release and Conventional Commits. Push to main with conventional commit format for automatic version bumps and deployments.

**Quick Reference:**

- `feat:` → Minor version + Release
- `fix:` → Patch version + Release
- `feat!:` → Major version + Release
- `docs:`, `chore:` → No release

**Current Version:** See [CHANGELOG.md](CHANGELOG.md) for latest release notes.

For complete versioning documentation including commit formats, release process, and commands, see [`docs/SEMANTIC_RELEASE.md`](docs/SEMANTIC_RELEASE.md).

## CI/CD Pipeline

Enterprise-grade automated deployment with security scanning, quality gates, and performance monitoring. 95+ Lighthouse scores maintained automatically.

For complete CI/CD documentation including workflow configuration and troubleshooting, see [`.github/CICD.md`](.github/CICD.md).

## Code Quality

Automated quality assurance with pre-commit hooks, ESLint, Prettier, TypeScript strict mode, and comprehensive testing.

For complete code quality documentation including automation setup and standards, see [`docs/CODE_QUALITY.md`](docs/CODE_QUALITY.md).

## Deployment

Fully automated GitHub Pages deployment. Simply push to main branch for automatic deployment in ~3 minutes.

**Zero manual work required** - Quality validation, security audit, production build, and live deployment all happen automatically.

## Performance

Optimized for 95+ Lighthouse scores with code splitting, CSS Modules bundling, and Web Vitals monitoring. Initial bundle ~148 kB gzipped.

## Security

Comprehensive security with environment-based secrets management, automated vulnerability scanning, CodeQL analysis, and CSP headers.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-feature`)
3. **Make** your changes following the code style
4. **Test** your changes (`npm run validate`)
5. **Commit** your changes (`git commit -m 'feat: add new feature'`)
6. **Push** to the branch (`git push origin feature/new-feature`)
7. **Open** a Pull Request

All contributions require TypeScript strict mode, CSS Modules, test coverage, and pass automated quality gates including security audits and bundle analysis.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:

- **Commercial use** - Use in commercial projects
- **Modification** - Adapt and customize freely
- **Distribution** - Share and redistribute
- **Private use** - Use privately without restrictions
- **Attribution required** - Include original license notice

## Contact & Support

**Muhammad Umair** - Software Engineer

<div align="center">

[![Email](https://img.shields.io/badge/Email-umair.leo17%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:umair.leo17@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-muhammad--umair--amin-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/muhammad-umair-amin/)
[![GitHub](https://img.shields.io/badge/GitHub-umairleo1-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/umairleo1)
[![Twitter](https://img.shields.io/badge/Twitter-%40UmairLeo7-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/UmairLeo7)

</div>

### Getting Help

- **Bug Reports**: [Open an issue](https://github.com/umairleo1/portfolio/issues/new?template=bug_report.md)
- **Feature Requests**: [Start a discussion](https://github.com/umairleo1/portfolio/discussions/new?category=ideas)
- **Questions**: [Ask in discussions](https://github.com/umairleo1/portfolio/discussions/new?category=q-a)
- **Direct Contact**: [umair.leo17@gmail.com](mailto:umair.leo17@gmail.com)

## Support

If this project helped you, please star the repository and consider contributing. Sponsorship helps maintain and improve this template for the developer community.

[![Sponsor](https://img.shields.io/badge/Sponsor-ea4aaa?style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/umairleo1)

---

<div align="center">

**Built with React 19, TypeScript & CSS Modules**

_Professional portfolio template for software engineers_

[⬆ Back to Top](#professional-portfolio-template)

</div>
