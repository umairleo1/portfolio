# Contributing to Muhammad Umair's Portfolio

Thank you for your interest in contributing to this portfolio project! This guide will help you get started with contributing to this modern React 19 + TypeScript + CSS Modules portfolio.

## Getting Started

For detailed setup instructions, see [`docs/SETUP.md`](docs/SETUP.md).

### Quick Setup

1. **Fork the repository** on GitHub
2. **Clone and setup**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   npm ci
   cp .env.example .env
   npm start
   ```
3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Project Architecture

### Tech Stack

- **Frontend**: React 19, TypeScript 4.9, CSS Modules
- **Animations**: Framer Motion
- **Build**: react-app-rewired, Webpack
- **Quality**: ESLint 9.33, Prettier 3.0, Husky 9.1, lint-staged 16.1
- **Testing**: Jest, React Testing Library

### CSS Modules Structure

All components use CSS Modules for scoped styling:

```
Component/
├── Component.tsx           # Component logic
├── Component.module.css    # Scoped styles using design tokens
└── index.ts               # Barrel export
```

### Design System

The project uses a centralized design system with 50+ CSS custom properties in `src/styles/base/globals.css`. Always use design tokens instead of hardcoded values:

```css
/* ✅ Correct - Use design tokens */
.container {
  background: var(--dark-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-md);
  transition: var(--transition);
}

/* ❌ Incorrect - Don't hardcode values */
.container {
  background: #1a1a1a;
  border: 1px solid rgba(102, 217, 237, 0.1);
  border-radius: 8px;
}
```

## Code Quality Standards

### Automatic Code Quality

This project has **comprehensive automation** that runs before every commit:

- **ESLint** - Automatically fixes TypeScript/JavaScript issues
- **Prettier** - Formats all code consistently
- **TypeScript** - Strict mode type checking
- **Pre-commit hooks** - Runs on staged files only (fast!)

### Manual Quality Checks

```bash
# Run all quality checks (used in CI/CD)
npm run validate

# Individual checks
npm run lint              # ESLint with React/TypeScript rules
npm run lint:fix          # Auto-fix linting issues
npm run format            # Format with Prettier
npm run type-check        # TypeScript compilation
npm run test:ci           # Tests with coverage
```

### Component Development Guidelines

1. **TypeScript First**

   ```tsx
   interface ComponentProps {
     title: string;
     isActive?: boolean;
     onClick?: () => void;
   }

   const Component: React.FC<ComponentProps> = ({
     title,
     isActive = false,
     onClick,
   }) => {
     return (
       <div className={styles.container}>
         <h2 className={styles.title}>{title}</h2>
       </div>
     );
   };
   ```

2. **CSS Modules with Design Tokens**

   ```css
   .container {
     background: var(--dark-surface);
     border: 1px solid var(--border-subtle);
     padding: clamp(16px, 4vw, 24px);
     transition: var(--transition);
   }

   .container:hover {
     transform: var(--hover-lift);
     border-color: var(--border-strong);
   }
   ```

3. **Performance Considerations**
   - Use `React.memo` for expensive components
   - Prefer CSS transforms over layout changes
   - Lazy load non-critical components

## Contribution Guidelines

### Types of Contributions

- **Bug Fixes** - Fix existing issues
- **Features** - Add new functionality
- **Documentation** - Improve docs
- **Performance** - Optimize code
- **Design** - UI/UX improvements
- **Testing** - Add or improve tests

### Code Style Requirements

- **TypeScript** - All code must be properly typed
- **CSS Modules** - Use scoped styling only
- **Design Tokens** - Use CSS custom properties from globals.css
- **Responsive** - Mobile-first design approach
- **Accessible** - Follow WCAG guidelines
- **Performance** - Consider bundle size and runtime performance

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
type(scope): description

# Examples:
feat(header): add mobile navigation menu
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(hero): improve responsive layout on mobile
refactor(utils): optimize icon wrapper performance
test(components): add tests for Card component
chore(deps): update dependencies to latest versions
```

**Types:**

- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code formatting, UI changes
- `refactor` - Code restructuring without functionality changes
- `test` - Adding or updating tests
- `chore` - Maintenance tasks, dependency updates
- `perf` - Performance improvements

## Pull Request Process

### Before Submitting

1. **Test thoroughly**
   - Test on Chrome, Firefox, Safari
   - Test on mobile and desktop
   - Verify all animations work smoothly
   - Check console for errors/warnings

2. **Run quality checks**

   ```bash
   npm run validate  # Runs lint + type-check + tests
   npm run build     # Verify production build works
   ```

3. **Update documentation** if needed

### Pull Request Checklist

- [ ] Code follows project conventions (CSS Modules, TypeScript, design tokens)
- [ ] Components are responsive across all devices
- [ ] No console errors or warnings
- [ ] All existing functionality still works
- [ ] Performance impact considered
- [ ] Accessibility guidelines followed
- [ ] Code is self-documenting or properly commented
- [ ] PR description clearly explains changes

### PR Description Template

```markdown
## Summary

Brief description of changes made.

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing

- [ ] Tested on Chrome/Firefox/Safari
- [ ] Tested on mobile devices
- [ ] Verified responsive design
- [ ] No console errors
- [ ] All existing tests pass

## Screenshots (if applicable)

[Add screenshots of UI changes]

## Performance Impact

- Bundle size change: [+/-X kB]
- New dependencies: [list any new deps]
- Runtime performance: [any considerations]

## Checklist

- [ ] Self-reviewed code
- [ ] Added/updated tests if needed
- [ ] Updated documentation if needed
- [ ] Follows design system patterns
- [ ] Accessible to screen readers
```

## Development Workflow

### Daily Development

```bash
# Start development environment
npm start

# In another terminal, run tests in watch mode
npm run test:watch

# Make your changes...
# Pre-commit hooks will automatically run linting and formatting
```

### Working with the Design System

1. **Use existing design tokens** from `src/styles/base/globals.css`
2. **Follow the CSS Modules pattern** for new components
3. **Check the styles README** at `src/styles/README.md` for detailed guidance
4. **Maintain consistency** with existing component patterns

### Performance Guidelines

- **Bundle Impact** - Check bundle size with `npm run build:analyze`
- **Code Splitting** - Lazy load heavy components
- **CSS Performance** - Use CSS transforms, avoid layout thrashing
- **Image Optimization** - Use appropriate formats and sizes
- **Accessibility** - Test with screen readers, keyboard navigation

## Design Guidelines

### Visual Design Principles

- **Dark Theme** - Professional dark color scheme with cyan accents
- **Typography** - Roboto Mono for technical aesthetic
- **Spacing** - Consistent spacing using design tokens
- **Animations** - Smooth, purposeful animations that enhance UX
- **Responsive** - Mobile-first, works on all screen sizes

### Component Design Patterns

1. **Consistent Hover Effects** - Use `--hover-lift` for cards
2. **Smooth Transitions** - Use `--transition` variables
3. **Proper Spacing** - Use `--section-padding`, `--container-padding`
4. **Semantic Colors** - Use `--border-subtle`, `--overlay-medium`, etc.

## Reporting Issues

### Bug Reports

Include:

1. **Steps to reproduce**
2. **Expected vs actual behavior**
3. **Browser/OS information**
4. **Screenshots if applicable**
5. **Console errors**

### Feature Requests

Include:

1. **Problem statement** - What problem does this solve?
2. **Proposed solution** - How should it work?
3. **Use cases** - Who would benefit?
4. **Design considerations** - Any mockups or references?

## Security

### Reporting Security Issues

**Do NOT report security issues in public.** Instead:

1. Email: umair.leo17@gmail.com
2. Subject: "SECURITY: [brief description]"
3. Include detailed description and reproduction steps

### Security Guidelines

- Never commit sensitive data (API keys, passwords)
- Use environment variables for configuration
- Validate inputs and follow secure coding practices
- Report vulnerabilities responsibly

## Community

### Getting Help

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and general discussion
- **Email** - umair.leo17@gmail.com for direct contact

### Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). Be respectful and inclusive in all interactions.

## Recognition

Contributors are recognized through:

- **GitHub Contributors** - Automatically listed by GitHub
- **Release Notes** - Mentioned in relevant releases
- **README Credits** - Major contributors acknowledged
- **Social Media** - Shared on professional networks

## Documentation

For comprehensive project documentation:

- **[`README.md`](README.md)** - Project overview and quick start
- **[`docs/SETUP.md`](docs/SETUP.md)** - Detailed setup and installation guide
- **[`docs/CUSTOMIZATION.md`](docs/CUSTOMIZATION.md)** - How to personalize the portfolio
- **[`docs/ANALYTICS.md`](docs/ANALYTICS.md)** - Analytics integration and insights
- **[`docs/CODE_QUALITY.md`](docs/CODE_QUALITY.md)** - Code quality automation and standards
- **[`.github/CICD.md`](.github/CICD.md)** - CI/CD pipeline and deployment automation

## Resources

### Learning Resources

- [React 19 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Modules Guide](https://github.com/css-modules/css-modules)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Development Tools

- [React DevTools](https://react-devtools-tutorial.vercel.app/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [VS Code Extensions](https://marketplace.visualstudio.com/) - ES7+ React/Redux/React-Native snippets

---

**Thank you for contributing to making this portfolio better!**

Your contributions help showcase modern React development practices and inspire other developers in the community.

Questions? Feel free to reach out via [GitHub Discussions](https://github.com/umairleo1/portfolio/discussions) or email.
