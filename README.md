# Muhammad Umair - Software Engineer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github&logoColor=white)](https://umairleo1.github.io/portfolio)
[![Build Status](https://img.shields.io/github/actions/workflow/status/umairleo1/portfolio/deploy.yml?branch=main&style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/umairleo1/portfolio/actions)
[![Security Score](https://img.shields.io/badge/Security-A+-brightgreen?style=for-the-badge&logo=security&logoColor=white)](https://github.com/umairleo1/portfolio/security)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![CodeQL](https://img.shields.io/badge/CodeQL-Enabled-success?style=for-the-badge&logo=github&logoColor=white)](https://github.com/umairleo1/portfolio/security/code-scanning)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](http://makeapullrequest.com)

A modern, responsive portfolio website showcasing professional software engineering experience. Built with React 19, TypeScript, and CSS Modules featuring stunning animations, custom design system, and optimized performance.

## Live Demo

[**View Live Portfolio →**](https://umairleo1.github.io/portfolio)

## Features

### Design & UX

- **Modern Design System** - Centralized theme with 50+ CSS custom properties
- **Responsive Design** - Seamlessly adapts to all devices and screen sizes
- **Interactive Animations** - Smooth animations with floating elements and cursor trails
- **Professional Typography** - Roboto Mono for technical aesthetic
- **Consistent Styling** - CSS Modules for scoped styles and maintainability

### Technical Excellence

- **React 19** - Latest React with enhanced performance and concurrent features
- **TypeScript** - Full type safety with strict mode enabled
- **CSS Modules** - Scoped styling with professional architecture
- **Performance Optimized** - Code splitting, lazy loading, and optimized bundle size
- **Error Boundaries** - Graceful error handling and recovery
- **SEO Optimized** - Semantic HTML, proper meta tags, and structured data

### User Experience

- **Intuitive Navigation** - Smooth scrolling with active section highlighting
- **Lazy Loading** - Progressive component loading for optimal performance
- **Professional Sections** - Hero, Expertise, Work, Experience, Education, and Contact
- **Accessibility** - WCAG compliant with keyboard navigation support
- **Contact Form** - Functional form with validation and user feedback

## Architecture

### Tech Stack

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

### Design System

The project uses a centralized theme system with CSS custom properties for consistent styling:

```css
:root {
  /* Primary Colors */
  --primary-cyan: #66d9ed;
  --primary-cyan-rgb: 102, 217, 237;

  /* Background Colors */
  --dark-bg: #17161a;
  --dark-surface: #1a1a1a;
  --dark-card: #1e1e1e;

  /* Text Colors */
  --text-primary: #ffffff;
  --text-secondary: #888;
  --text-muted: #666;

  /* Spacing & Layout */
  --section-padding: 80px 0;
  --container-padding: 0 clamp(20px, 5vw, 80px);
  --max-width: min(1400px, 95vw);

  /* Border Radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;

  /* Transitions */
  --transition: all 0.3s ease;
  --transition-fast: all 0.2s ease;
  --transition-slow: all 0.4s ease;

  /* Shadows */
  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--border-subtle);
  --shadow-glow: 0 0 30px var(--primary-cyan-30);

  /* ... 50+ design tokens total */
}
```

### Browser Support

<div align="center">

![Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)

</div>

| Browser | Version | Support |
| ------- | ------- | ------- |
| Chrome  | 88+     | Full    |
| Firefox | 85+     | Full    |
| Safari  | 14+     | Full    |
| Edge    | 88+     | Full    |

## Project Structure

```
portfolio/
├── public/                     # Static assets
│   ├── assets/                # Organized assets
│   │   ├── favicons/          # Favicon files (16x16 to 512x512)
│   │   ├── images/            # Profile pictures and graphics
│   │   └── icons/             # App icons and logos
│   ├── index.html             # HTML template with meta tags
│   └── manifest.json          # PWA manifest configuration
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
│   │   └── ui/                # Reusable UI components
│   │       ├── Card/          # Reusable card component with variants
│   │       ├── Button/        # Button with loading states
│   │       ├── Badge/         # Skill badges with variants
│   │       ├── LogoScroll/    # Animated company logos
│   │       └── ScrollToBottom/# Scroll indicator
│   ├── data/                  # Static content and configuration
│   │   └── portfolio.ts       # Centralized portfolio data
│   ├── styles/                # Centralized styling system
│   │   ├── base/              # Global styles and theme
│   │   │   ├── globals.css    # Main theme variables & base styles
│   │   │   └── App.css        # App-wide component styles
│   │   └── README.md          # Design system documentation
│   ├── types/                 # TypeScript definitions
│   │   └── index.ts           # Common type definitions
│   ├── hooks/                 # Custom React hooks
│   │   ├── useThrottle.ts     # Throttled event handling
│   │   └── index.ts           # Hook exports
│   ├── utils/                 # Utility functions
│   │   ├── IconWrapper.tsx    # React Icons wrapper
│   │   ├── animations.ts      # Animation utilities
│   │   └── index.ts           # Utility exports
│   ├── config/                # Configuration files
│   │   ├── animations.ts      # Animation configurations
│   │   ├── env.ts             # Environment variables
│   │   └── index.ts           # Config exports
│   └── App.tsx                # Main application component
├── scripts/                   # Development automation
├── .gitignore                 # Git ignore patterns
├── .prettierrc                # Prettier configuration
├── eslint.config.js           # ESLint configuration
├── tsconfig.json              # TypeScript configuration
├── config-overrides.js        # react-app-rewired configuration
├── package.json               # Dependencies and scripts
├── LICENSE                    # MIT License
└── README.md                  # This documentation
```

## Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.9 or higher) - [Download here](https://nodejs.org/)
- **npm** (v10.0 or higher) - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/umairleo1/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Development Workflow

```bash
# Start development server with hot reload
npm start

# Start all development services (dev server + tests)
npm run start:all

# Run tests in watch mode
npm run test:watch

# Check code quality
npm run validate

# Build for production
npm run build

# Deploy via automated GitHub Actions CI/CD pipeline
# Push to main branch triggers automatic deployment
```

## Enterprise-Grade CI/CD Pipeline

### Automated Deployment & Quality Assurance

This project implements **industry-standard CI/CD** following 2025 security best practices with comprehensive documentation in [`.github/CICD.md`](.github/CICD.md):

<div align="center">

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![CodeQL](https://img.shields.io/badge/CodeQL-000000?style=for-the-badge&logo=github&logoColor=white)
![Trivy](https://img.shields.io/badge/Trivy-1904DA?style=for-the-badge&logo=aqua&logoColor=white)
![Lighthouse](https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=jest&logoColor=white)

</div>

### Security-First Approach (2025 Standards)

**Multi-layered security scanning** integrated into every deployment:

```yaml
CodeQL Analysis          # GitHub's semantic code analysis
Trivy Vulnerability Scan # Infrastructure & dependency scanning
SHA-Pinned Dependencies  # Immutable action versions
Minimal Permissions     # Least privilege access model
Security Event Logging  # SARIF format compliance
```

### Performance-Optimized Pipeline

**Build times consistently under 8 minutes** with advanced optimizations:

- **Parallel Job Execution**: Security, quality, and build run concurrently
- **Intelligent Caching**: NPM, build artifacts, and dependency caching
- **Matrix Testing**: Node.js 20 LTS & 22 Current
- **Optimized Dependencies**: `--prefer-offline` and retry mechanisms
- **Performance Monitoring**: Lighthouse CI with custom thresholds

### Automated Workflows

For detailed workflow documentation, configuration details, and troubleshooting, see [`.github/CICD.md`](.github/CICD.md).

#### 1. **Main Deployment** ([`deploy.yml`](.github/workflows/deploy.yml))

```bash
Trigger: Push to main branch
├── Security Analysis (CodeQL + Trivy)
├── Quality Gates (ESLint, TypeScript, Tests)
├── Optimized Build (Compression, cache)
├── GitHub Pages Deploy
└── Performance Audit (Lighthouse)
```

#### 2. **PR Quality Checks** ([`pr-check.yml`](.github/workflows/pr-check.yml))

```bash
Trigger: Pull Request events
├── Security Scan (Trivy vulnerability analysis)
├── Multi-Node Testing (20 LTS, 22 Current)
├── Bundle Size Analysis
└── Automated Status Reports
```

#### 3. **Dependency Updates** ([`dependabot.yml`](.github/dependabot.yml))

```bash
Schedule: Weekly on Mondays
├── NPM Dependencies (security-focused)
├── GitHub Actions updates
├── Automated PR creation
└── Maintainer assignment
```

### Quality Metrics & Monitoring

**Lighthouse Performance Standards:**

- Performance Score: ≥90
- Accessibility Score: ≥95
- Best Practices: ≥90
- SEO Score: ≥90

**Build Optimization Results:**

- Bundle Size: Monitored & optimized
- First Contentful Paint: <2s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## Code Quality Automation

The project includes **comprehensive code quality automation** with industry-standard tooling:

<div align="center">

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Husky](https://img.shields.io/badge/Husky-000000?style=for-the-badge&logo=git&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=jest&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

</div>

### Pre-commit Hooks (Husky + lint-staged)

**Automatic code quality enforcement** that runs before every commit:

```bash
# These run automatically before every commit:
ESLint auto-fix for TypeScript/JavaScript files
Prettier formatting for all supported files
Type checking with TypeScript compiler
Only processes staged files (fast and efficient)
```

**Configuration in `package.json`:**

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,scss,sass}": ["prettier --write"],
    "*.{json,md,yml,yaml}": ["prettier --write"]
  }
}
```

### Manual Quality Checks

```bash
# Comprehensive validation (used in CI/CD)
npm run validate               # Runs lint + type-check + tests

# Individual checks
npm run lint                   # ESLint with React/TypeScript rules
npm run lint:fix               # Auto-fix linting issues
npm run format                 # Format all files with Prettier
npm run format:check           # Verify formatting without changes
npm run type-check             # TypeScript compilation check
npm run test:ci                # Tests with coverage reports

# Security auditing
npm run security:audit         # Full dependency audit
npm run security:audit:prod    # Production dependencies only
npm run security:audit:ci      # Critical vulnerabilities only
```

### Benefits of Code Quality Automation

- **Never commit unformatted code** - Automatic Prettier formatting
- **Consistent code style** - ESLint enforces React/TypeScript best practices
- **Type safety** - TypeScript strict mode catches errors before runtime
- **Faster code reviews** - Automated formatting eliminates style discussions
- **CI/CD integration** - Same checks run locally and in GitHub Actions
- **Security monitoring** - Regular dependency vulnerability scanning

## Customization Guide

### Personal Information

Update your details in `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Professional Title',
  location: 'Your Location',
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  objective: 'Your professional objective...',
};
```

### Skills and Technologies

Customize your technical skills by category:

```typescript
export const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python'],
  frontEnd: ['React', 'Next.js', 'CSS Modules'],
  backEnd: ['Node.js', 'Express', 'MongoDB'],
  cloudAndIaC: ['AWS', 'Terraform', 'Docker'],
  // ... other categories
};
```

### Styling and Theme

The design system is centralized in `src/styles/base/globals.css`. Update CSS custom properties to customize the entire theme:

```css
:root {
  /* Primary Brand Color */
  --primary-cyan: #66d9ed; /* Change this to your brand color */
  --primary-cyan-rgb: 102, 217, 237; /* RGB version for opacity variants */

  /* Background Colors */
  --dark-bg: #17161a; /* Main background */
  --dark-surface: #1a1a1a; /* Card backgrounds */
  --dark-card: #1e1e1e; /* Elevated cards */

  /* Spacing System */
  --section-padding: 80px 0; /* Vertical section spacing */
  --border-radius-md: 8px; /* Default border radius */

  /* Animation Timing */
  --transition: all 0.3s ease; /* Standard transitions */
}
```

### Adding New Components

Follow the established CSS Modules pattern:

1. **Create component directory:** `src/components/ui/NewComponent/`

2. **Add required files:**

   ```
   NewComponent/
   ├── NewComponent.tsx           # Component logic
   ├── NewComponent.module.css    # Scoped styles
   └── index.ts                   # Barrel export
   ```

3. **Use CSS Modules syntax:**

   ```tsx
   import React from 'react';
   import styles from './NewComponent.module.css';

   const NewComponent: React.FC = () => {
     return (
       <div className={styles.container}>
         <h2 className={styles.title}>Content</h2>
       </div>
     );
   };

   export default NewComponent;
   ```

4. **Add to barrel exports in `src/components/index.ts`**

## Deployment

### Fully Automated GitHub Pages Deployment

**Zero manual work required!** The portfolio uses a professional CI/CD pipeline:

```bash
# Simply push your changes
git add .
git commit -m "feat: update portfolio content"
git push origin main

# Deployment happens automatically in ~3 minutes
```

### What Happens Automatically:

1. **Quality Validation** - TypeScript compilation, ESLint, Prettier, Tests
2. **Security Audit** - Dependency vulnerability scanning
3. **Production Build** - Optimized React build with code splitting
4. **Live Deployment** - Automatic GitHub Pages deployment
5. **Bundle Analysis** - Performance metrics and optimization

**Result:** Your portfolio is live at `https://umairleo1.github.io/portfolio`

### Custom Domain Setup

1. **Add CNAME file:**

   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Configure DNS:**
   - Add A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME record: `your-username.github.io`

3. **Enable in GitHub:**
   - Repository Settings → Pages → Custom domain

### Environment Variables

For sensitive configuration, create `.env.local`:

```bash
# Analytics and tracking
REACT_APP_ANALYTICS_ID=your-analytics-id

# Contact form integration
REACT_APP_CONTACT_API=your-contact-api-endpoint

# Feature flags
REACT_APP_ENABLE_ANALYTICS=true
```

## Performance

<div align="center">

![Lighthouse](https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white)
![Web Vitals](https://img.shields.io/badge/Web_Vitals-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Performance](https://img.shields.io/badge/Performance-95+-00d26a?style=for-the-badge)

</div>

### Bundle Analysis

- **Main Bundle**: 131.76 kB (gzipped)
- **CSS Bundle**: 13.13 kB (gzipped)
- **Lazy Chunks**: 2.66 kB (gzipped)
- **Total Initial**: ~148 kB (excellent for a feature-rich portfolio)

### Performance Optimizations

- **Code Splitting** - Components lazy load on demand
- **Image Optimization** - Responsive images with proper sizing
- **CSS Optimization** - CSS Modules eliminate unused styles
- **Bundle Optimization** - Tree shaking and minification
- **Lazy Loading** - Progressive component loading
- **Critical CSS** - Above-the-fold styles inlined

### Web Vitals Scores

| Metric                       | Score   | Status    |
| ---------------------------- | ------- | --------- |
| **First Contentful Paint**   | < 1.5s  | Excellent |
| **Largest Contentful Paint** | < 2.5s  | Excellent |
| **First Input Delay**        | < 100ms | Excellent |
| **Cumulative Layout Shift**  | < 0.1   | Excellent |
| **Time to Interactive**      | < 3s    | Excellent |

## Security & Quality

<div align="center">

![Security](https://img.shields.io/badge/Security-Audit_Passing-00d26a?style=for-the-badge&logo=githubactions&logoColor=white)
![CodeQL](https://img.shields.io/badge/CodeQL-Enabled-00d26a?style=for-the-badge&logo=github&logoColor=white)
![Dependabot](https://img.shields.io/badge/Dependabot-Enabled-00d26a?style=for-the-badge&logo=github&logoColor=white)

</div>

### Security Features

- **No Sensitive Data** - All secrets in environment variables
- **CSP Headers** - Content Security Policy for XSS protection
- **Dependency Scanning** - Automated vulnerability detection
- **Auto Updates** - Dependabot for security patches
- **Code Scanning** - GitHub CodeQL analysis

### Security Scripts

```bash
# Regular security auditing
npm run security:audit          # Development dependencies included
npm run security:audit:prod     # Production dependencies only
npm run security:audit:ci       # Critical vulnerabilities only
npm run security:fix            # Attempt automatic fixes
```

### Code Quality Standards

- **Pre-commit Hooks** - Husky + lint-staged automation
- **Automatic Formatting** - Prettier with industry standards
- **Linting** - ESLint with React/TypeScript/Accessibility rules
- **Type Safety** - TypeScript strict mode with full coverage
- **Testing** - Jest + React Testing Library + Coverage reports
- **CI/CD Validation** - All quality checks in GitHub Actions

## Available Scripts

### Development Scripts

| Script               | Description                     | Usage                        |
| -------------------- | ------------------------------- | ---------------------------- |
| `npm start`          | Start development server        | Primary development          |
| `npm run start:all`  | Start dev server + test watcher | Full development environment |
| `npm run dev`        | Alias for `start:all`           | Quick development start      |
| `npm test`           | Run tests interactively         | Testing with Jest UI         |
| `npm run test:watch` | Run tests in watch mode         | Background testing           |
| `npm run test:ci`    | Run tests with coverage         | CI/CD testing                |

### Build & Deploy Scripts

| Script                  | Description                     | Usage                |
| ----------------------- | ------------------------------- | -------------------- |
| `npm run build`         | Production build + optimization | Pre-deployment build |
| `npm run build:analyze` | Build with bundle analyzer      | Performance analysis |
| `npm run deploy`        | Deploy to GitHub Pages          | Manual deployment    |
| `npm run predeploy`     | Pre-deployment validation       | Automatic pre-deploy |

### Quality Assurance Scripts

| Script                 | Description            | Usage                  |
| ---------------------- | ---------------------- | ---------------------- |
| `npm run validate`     | Full validation suite  | Pre-commit validation  |
| `npm run lint`         | ESLint checking        | Code style validation  |
| `npm run lint:fix`     | Auto-fix ESLint issues | Code cleanup           |
| `npm run format`       | Prettier formatting    | Code formatting        |
| `npm run format:check` | Check formatting       | CI/CD formatting check |
| `npm run type-check`   | TypeScript compilation | Type safety validation |

### Utility Scripts

| Script                   | Description                | Usage                    |
| ------------------------ | -------------------------- | ------------------------ |
| `npm run clean`          | Clean build cache          | Fresh build preparation  |
| `npm run clean:install`  | Clean install dependencies | Dependency refresh       |
| `npm run analyze`        | Bundle size analysis       | Performance optimization |
| `npm run services:start` | Start concurrent services  | Advanced development     |
| `npm run services:stop`  | Stop all services          | Service management       |

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

---

<div align="center">

**Built with ❤️ using React 19, TypeScript & CSS Modules**

_Professional portfolio template for software engineers_

[⬆ Back to Top](#muhammad-umair---software-engineer-portfolio)

</div>
