# Muhammad Umair - Software Engineer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A modern, responsive portfolio website showcasing professional software engineering experience. Built with React 19, TypeScript, and cutting-edge web technologies featuring stunning animations, glassmorphism design, and optimized performance.

![Portfolio Preview](./docs/images/preview.png)

## 🚀 Live Demo

[**View Live Portfolio →**](https://umairleo1.github.io/portfolio)

## ✨ Features

### 🎨 Design & UX

- **Modern Glassmorphism UI** - Professional design with backdrop filters and transparency effects
- **Responsive Design** - Seamlessly adapts to all devices and screen sizes
- **Interactive Animations** - Smooth AOS (Animate On Scroll) with floating elements
- **Professional Typography** - Carefully selected fonts and spacing for optimal readability
- **Custom Favicon** - Unique "MU" branded SVG favicon

### 🛠️ Technical Excellence

- **React 19** - Latest React with enhanced performance and concurrent features
- **TypeScript** - Full type safety and enhanced developer experience
- **Modern CSS** - CSS Grid, Flexbox, custom properties, and advanced animations
- **Performance Optimized** - Code splitting, lazy loading, and optimized bundle size
- **SEO Optimized** - Semantic HTML, proper meta tags, and structured data

### 📱 User Experience

- **Intuitive Navigation** - Smooth scrolling with active section highlighting
- **Contact Form** - Functional form with validation and user feedback
- **Professional Sections** - Hero, Expertise, Work, Experience, and Contact
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support

## 🏗️ Architecture

### Tech Stack

| Category        | Technologies                                               |
| --------------- | ---------------------------------------------------------- |
| **Frontend**    | React 19, TypeScript 4.9, CSS3                             |
| **Icons**       | React Icons with custom wrapper for React 19 compatibility |
| **Animations**  | AOS (Animate On Scroll), Custom CSS animations             |
| **Build Tools** | react-app-rewired, Create React App, Webpack               |
| **Development** | ESLint 8.57, Prettier, Husky, lint-staged, Hot Reloading   |
| **Deployment**  | GitHub Pages, GitHub Actions                               |

### Browser Support

| Browser | Version   |
| ------- | --------- |
| Chrome  | Latest ✅ |
| Firefox | Latest ✅ |
| Safari  | Latest ✅ |
| Edge    | Latest ✅ |

## 📁 Project Structure

```
portfolio/
├── 📁 public/                    # Static assets
│   ├── 📁 assets/               # Organized assets
│   │   ├── 🎨 favicons/        # Favicon files
│   │   ├── 🖼️ images/          # Profile pictures
│   │   ├── 🎯 icons/           # App icons
│   │   └── 🎨 svg/             # SVG graphics
│   ├── 📄 index.html           # HTML template
│   └── 📋 manifest.json        # PWA manifest
├── 📁 src/
│   ├── 📁 components/          # React components
│   │   ├── 📁 layout/          # Layout components
│   │   │   ├── 🧭 Header/      # Navigation with profile picture
│   │   │   └── 🦶 Footer/      # Footer with tech stack icons
│   │   ├── 📁 sections/        # Main page sections
│   │   │   ├── 🏠 Hero/        # Landing section with animations
│   │   │   ├── 👤 About/       # About section
│   │   │   ├── 💼 Expertise/   # Skills and technologies
│   │   │   ├── 🚀 Work/        # Work showcase
│   │   │   ├── 📁 Projects/    # Projects portfolio
│   │   │   ├── 📈 Experience/  # Professional experience
│   │   │   └── 📞 Contact/     # Contact form
│   │   ├── 📁 effects/         # Animation components
│   │   │   ├── ✨ FloatingElements/ # Hero section animations
│   │   │   ├── 🎯 CursorTrail/  # Mouse cursor trail
│   │   │   └── 🌌 ThreeBackground/ # 3D background
│   │   └── 📁 ui/              # UI components
│   ├── 📁 data/                # Static content
│   │   └── 📊 portfolio.ts     # Portfolio data and content
│   ├── 📁 styles/              # Component styles
│   │   └── 📁 components/      # Component-specific CSS
│   ├── 📁 types/               # TypeScript definitions
│   │   └── 📝 index.ts         # Common type definitions
│   ├── 📁 lib/                 # Utilities and constants
│   │   └── 📁 constants/       # Asset paths and config
│   ├── 📁 contexts/            # React contexts
│   ├── 📁 hooks/               # Custom React hooks
│   ├── 📁 utils/               # Utility functions
│   ├── 📁 config/              # Configuration files
│   └── 📱 App.tsx              # Main application component
├── 📁 docs/                    # Documentation
├── 📁 scripts/                 # Development scripts
├── 🚫 .gitignore              # Git ignore patterns
├── 📄 LICENSE                 # MIT License
├── 📦 package.json           # Dependencies and scripts
├── ⚙️ tsconfig.json          # TypeScript configuration
├── ⚙️ config-overrides.js    # react-app-rewired config
└── 📚 README.md              # Project documentation
```

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.9 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
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
# Start all development services (recommended)
npm run start:all

# Run tests in watch mode
npm run test:watch

# Check code quality (before committing)
npm run validate

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Code Quality Automation

The project includes **automatic pre-commit hooks** that ensure code quality:

```bash
# These run automatically before every commit:
- ESLint auto-fix for TypeScript/JavaScript files
- Prettier formatting for all supported files
- Only processes staged files (fast and efficient)

# Manual quality checks (also available):
npm run lint          # Check for linting errors
npm run lint:fix       # Auto-fix linting issues
npm run format         # Format all files
npm run format:check   # Verify formatting
npm run type-check     # TypeScript validation
```

**Benefits:**

- ✅ **Never commit unformatted code**
- ✅ **Automatic error fixing**
- ✅ **Consistent code style across team**
- ✅ **Faster code reviews**

## 🎨 Customization Guide

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
  twitter: 'https://twitter.com/your-handle',
  objective: 'Your professional objective...',
};
```

### Skills and Technologies

Customize your technical skills:

```typescript
export const skills = {
  frontEnd: ['React', 'TypeScript', 'CSS3', '...'],
  backEnd: ['Node.js', 'Python', 'Java', '...'],
  cloudAndIaC: ['AWS', 'Terraform', 'Docker', '...'],
  // ... other categories
};
```

### Experience and Projects

Add your professional experience:

```typescript
export const experience = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'Location',
    period: 'Start - End',
    achievements: [
      'Achievement 1 with measurable impact',
      'Achievement 2 with specific technologies',
    ],
  },
];
```

### Styling and Theme

Customize the visual appearance:

1. **Colors** - Update CSS custom properties in `src/styles/globals.css`:

   ```css
   :root {
     --primary-cyan: #66d9ed;
     --dark-bg: #171620;
     --text-primary: #ffffff;
     /* ... other variables */
   }
   ```

2. **Typography** - Modify font imports and declarations
3. **Animations** - Adjust AOS settings in `src/App.tsx`

## 🚢 Deployment

### GitHub Pages (Recommended)

1. **Update package.json homepage**

   ```json
   {
     "homepage": "https://your-username.github.io/portfolio"
   }
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Custom Domain

1. **Add CNAME file**

   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Configure DNS**
   - Add A records pointing to GitHub Pages IPs
   - Or add CNAME record pointing to `your-username.github.io`

3. **Enable in GitHub Settings**
   - Go to repository Settings → Pages
   - Configure custom domain

### Environment Variables

For sensitive data, use environment variables:

```bash
# Create .env.local file
REACT_APP_CONTACT_EMAIL=your-email@example.com
REACT_APP_ANALYTICS_ID=your-analytics-id
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](./docs/CONTRIBUTING.md) for details.

### Development Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- **TypeScript** - All code must be properly typed
- **ESLint** - Follow the established linting rules
- **Prettier** - Code must be formatted consistently (automated via pre-commit)
- **Testing** - New features require appropriate tests
- **Pre-commit hooks** - Automatic formatting and linting before commits

## 📋 Available Scripts

| Script                        | Description                                 |
| ----------------------------- | ------------------------------------------- |
| `npm start`                   | Start development server                    |
| `npm run build`               | Create production build                     |
| `npm test`                    | Run test suite                              |
| `npm run deploy`              | Deploy to GitHub Pages                      |
| `npm run lint`                | Run ESLint                                  |
| `npm run lint:fix`            | Auto-fix ESLint issues                      |
| `npm run format`              | Format code with Prettier                   |
| `npm run format:check`        | Check Prettier formatting                   |
| `npm run type-check`          | Run TypeScript type checking                |
| `npm run validate`            | Run all quality checks (lint + type + test) |
| `npm run security:audit`      | Security audit (shows dev warnings)         |
| `npm run security:audit:prod` | Security audit (production only)            |
| `npm run start:all`           | Start all development services              |
| `npm run stop:all`            | Stop all running services                   |

## 🔧 Browser Compatibility

Supports all modern browsers with the following minimum versions:

- **Chrome**: 88+
- **Firefox**: 85+
- **Safari**: 14+
- **Edge**: 88+

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: < 1MB gzipped
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 🛡️ Security & Quality

### Security

- **No sensitive data** in repository
- **Environment variables** for configuration
- **CSP headers** for security
- **Regular dependency updates**

### Code Quality

- **Pre-commit hooks** - Husky + lint-staged
- **Automatic formatting** - Prettier with industry standards
- **Linting** - ESLint with React/TypeScript rules
- **Type safety** - Full TypeScript coverage
- **Testing** - Jest + React Testing Library
- **Security auditing** - npm audit with professional configuration
- **CI/CD validation** - All checks run on GitHub Actions

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use

## 🙏 Acknowledgments

- **React Team** - For the incredible React framework
- **TypeScript Team** - For enhanced JavaScript development
- **React Icons** - For comprehensive icon library
- **AOS Library** - For smooth scroll animations
- **Create React App** - For zero-configuration setup

## 📞 Contact & Support

**Muhammad Umair** - Software Engineer

- 📧 **Email**: [umair.leo17@gmail.com](mailto:umair.leo17@gmail.com)
- 💼 **LinkedIn**: [muhammad-umair-amin](https://www.linkedin.com/in/muhammad-umair-amin/)
- 🐙 **GitHub**: [umairleo1](https://github.com/umairleo1)
- 🐦 **Twitter**: [@UmairLeo7](https://x.com/UmairLeo7)

### Getting Help

- 🐛 **Bug Reports**: [Open an issue](https://github.com/umairleo1/portfolio-website/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/umairleo1/portfolio-website/discussions)
- 💬 **Questions**: [Ask in discussions](https://github.com/umairleo1/portfolio-website/discussions)

## ⭐ Show Your Support

If this project helped you or you found it interesting:

1. **Give it a ⭐** on GitHub
2. **Fork it** for your own use
3. **Share it** with others
4. **Contribute** to make it better

---

<div align="center">

**Built with ❤️ by Muhammad Umair using React 19 & TypeScript**

[⬆ Back to Top](#muhammad-umair---software-engineer-portfolio)

</div>
