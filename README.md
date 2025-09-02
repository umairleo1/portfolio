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
- **Analytics Ready** - Google Analytics 4 integration
- **CI/CD Automated** - GitHub Actions deployment

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

Enterprise-grade Google Analytics 4 implementation with privacy compliance and professional insights for career optimization.

For complete analytics documentation including setup, business value, and implementation details, see [`docs/ANALYTICS.md`](docs/ANALYTICS.md).

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
│   │   │   ├── ErrorBoundary/ # Error handling component
│   │   │   ├── LoadingSpinner/# Loading states with animations
│   │   │   └── SectionLoader/ # Section loading component
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
│   │       └── ScrollToBottom/# Scroll indicator
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
│   │   ├── projects/          # Portfolio projects and categorization
│   │   │   ├── index.ts       # Projects data barrel export
│   │   │   ├── projects.ts    # Project details and achievements
│   │   │   └── categories.ts  # Project categorization system
│   │   ├── companies/         # Company information and branding
│   │   │   ├── index.ts       # Companies data barrel export
│   │   │   └── companies.ts   # Company logos and associated skills
│   │   └── config/            # Application configuration
│   │       ├── index.ts       # Configuration barrel export
│   │       └── app.ts         # App settings, navigation, and SEO
│   ├── styles/                # Centralized styling system
│   │   ├── base/              # Global styles and theme
│   │   │   ├── globals.css    # Main theme variables & base styles
│   │   │   ├── App.css        # App-wide component styles
│   │   │   └── accessibility.css # Accessibility and screen reader styles
│   │   └── README.md          # Design system documentation
│   ├── types/                 # TypeScript definitions
│   │   └── index.ts           # Common type definitions
│   ├── hooks/                 # Custom React hooks
│   │   ├── useThrottle.ts     # Throttled event handling
│   │   ├── useSectionSEO.ts   # Dynamic SEO meta updates per section
│   │   ├── useAnalytics.ts    # Google Analytics event tracking
│   │   └── index.ts           # Hook exports
│   ├── utils/                 # Utility functions
│   │   ├── IconWrapper.tsx    # React Icons wrapper
│   │   ├── animations.ts      # Animation utilities
│   │   ├── analytics.ts       # Google Analytics integration
│   │   └── index.ts           # Utility exports
│   ├── lib/                   # Library utilities and constants
│   │   └── constants/         # Application constants and configuration
│   │       ├── index.ts       # Constants barrel export
│   │       └── paths.ts       # Asset paths and URL utilities
│   ├── config/                # Configuration files
│   │   ├── animations.ts      # Animation configurations
│   │   ├── env.ts             # Environment variables with validation
│   │   └── index.ts           # Config exports
│   └── App.tsx                # Main application component
├── docs/                      # Documentation
│   ├── SETUP.md               # Installation and configuration guide
│   ├── CUSTOMIZATION.md       # Personalization instructions
│   └── ANALYTICS.md           # Google Analytics integration guide
├── scripts/                   # Development automation
│   ├── generate-sitemap.js    # Automatic SEO sitemap generation
│   └── detect-domain.js       # Intelligent CI/CD domain detection
├── .env.example               # Environment template for developers
├── .env.production            # Production public configuration (committed)
├── .env.local                 # Local secrets and overrides (gitignored)
├── .gitignore                 # Git ignore patterns with environment setup
├── .lighthouserc.json         # Lighthouse CI configuration
├── .prettierrc                # Prettier configuration
├── eslint.config.js           # ESLint configuration
├── tsconfig.json              # TypeScript configuration
├── config-overrides.js        # react-app-rewired configuration
├── package.json               # Dependencies and scripts with intelligent builds
├── LICENSE                    # MIT License
└── README.md                  # This documentation
```

## Documentation

- **[`docs/SETUP.md`](docs/SETUP.md)** - Complete installation and configuration guide
- **[`docs/CUSTOMIZATION.md`](docs/CUSTOMIZATION.md)** - Personalization and content management
- **[`docs/ANALYTICS.md`](docs/ANALYTICS.md)** - Analytics integration and business insights
- **[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)** - Deployment and custom domain migration guide
- **[`docs/SEO.md`](docs/SEO.md)** - Comprehensive SEO implementation guide
- **[`docs/CODE_QUALITY.md`](docs/CODE_QUALITY.md)** - Code quality automation and standards
- **[`.github/CICD.md`](.github/CICD.md)** - CI/CD pipeline and deployment automation
- **[`CONTRIBUTING.md`](CONTRIBUTING.md)** - Development and contribution guidelines
- **[`SECURITY.md`](SECURITY.md)** - Security policy and vulnerability reporting
- **[`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)** - Community standards and behavior guidelines

## CI/CD Pipeline

Enterprise-grade automated deployment with security scanning, quality gates, and performance monitoring.

**Features:**

- Automated GitHub Pages deployment
- Security scanning (CodeQL + Trivy)
- Performance auditing (Lighthouse)
- Quality validation (ESLint, TypeScript, Tests)
- Bundle size monitoring

**Performance Standards:** 95+ Lighthouse scores across all metrics

For detailed workflow documentation, configuration, and troubleshooting, see [`.github/CICD.md`](.github/CICD.md).

## Code Quality

<div align="center">

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Husky](https://img.shields.io/badge/Husky-000000?style=for-the-badge&logo=git&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=jest&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

</div>

**Automated Quality Assurance:**

- Pre-commit hooks (Husky + lint-staged)
- ESLint with React/TypeScript rules
- Prettier auto-formatting
- TypeScript strict mode
- Jest testing with coverage reports
- Security dependency auditing

For comprehensive code quality automation details, see [`docs/CODE_QUALITY.md`](docs/CODE_QUALITY.md).

## Deployment

Fully automated GitHub Pages deployment. Simply push to main branch for automatic deployment in ~3 minutes.

**Zero manual work required** - Quality validation, security audit, production build, and live deployment all happen automatically.

## Performance

<div align="center">

![Lighthouse](https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white)
![Web Vitals](https://img.shields.io/badge/Web_Vitals-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Performance](https://img.shields.io/badge/Performance-95+-00d26a?style=for-the-badge)

</div>

**Optimizations:**

- Code splitting with lazy loading
- CSS Modules for optimal bundling
- Image optimization and responsive sizing
- Web Vitals monitoring integration
- Total initial bundle: ~148 kB (gzipped)

**Lighthouse Scores:** 95+ across all metrics (Performance, Accessibility, Best Practices, SEO)

## Security

<div align="center">

![Security](https://img.shields.io/badge/Security-Audit_Passing-00d26a?style=for-the-badge&logo=githubactions&logoColor=white)
![CodeQL](https://img.shields.io/badge/CodeQL-Enabled-00d26a?style=for-the-badge&logo=github&logoColor=white)
![Dependabot](https://img.shields.io/badge/Dependabot-Enabled-00d26a?style=for-the-badge&logo=github&logoColor=white)

</div>

**Security Features:**

- Environment variable-based secrets management
- Automated dependency vulnerability scanning
- GitHub CodeQL analysis
- Dependabot auto-updates
- CSP headers for XSS protection

## Deployment

Fully automated GitHub Pages deployment. Simply push to main branch for automatic deployment in ~3 minutes.

**Zero manual work required** - Quality validation, security audit, production build, and live deployment all happen automatically.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes following the code style
4. **Test** your changes (`npm run validate`)
5. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
6. **Push** to the branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

### Contribution Guidelines

- **TypeScript** - All code must be properly typed with strict mode
- **CSS Modules** - Use scoped styling only, no global CSS
- **ESLint** - Follow established linting rules (auto-fixed by pre-commit)
- **Prettier** - Code formatting is automated via pre-commit hooks
- **Testing** - New features require appropriate test coverage
- **Documentation** - Update documentation for significant changes

### Code Review Process

When you create a PR, automated checks will:

- Run full test suite with coverage reports
- Validate TypeScript compilation
- Check code formatting and linting
- Perform security audit for vulnerabilities
- Analyze bundle size impact
- Block merge if any checks fail

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:

- **Commercial use** - Use in commercial projects
- **Modification** - Adapt and customize freely
- **Distribution** - Share and redistribute
- **Private use** - Use privately without restrictions
- **Attribution required** - Include original license notice

## Contact & Support

**Muhammad Umair** - Senior Software Engineer

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

## Acknowledgments

Special thanks to the open-source community and these amazing projects:

- **React Team** - For the incredible React framework and ecosystem
- **TypeScript Team** - For enhanced JavaScript development experience
- **CSS Modules Community** - For scoped styling solution
- **Framer Motion** - For smooth, professional animations
- **Create React App** - For zero-configuration setup and tooling
- **React Icons** - For comprehensive icon library
- **ESLint & Prettier** - For code quality and consistency tools

## Show Your Support

If this project helped you or you found it interesting:

1. **Star the repository** on GitHub
2. **Fork it** for your own portfolio
3. **Share it** with fellow developers
4. **Contribute** to make it even better
5. **Leave feedback** in discussions

### Support Development

If you find this template valuable and want to support its continued development:

[![Sponsor](https://img.shields.io/badge/Sponsor-ea4aaa?style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/umairleo1)

Your sponsorship helps maintain this project and create more open-source tools for developers.

---

<div align="center">

**Built with React 19, TypeScript & CSS Modules**

_Professional portfolio template for software engineers_

[⬆ Back to Top](#professional-portfolio-template)

</div>
