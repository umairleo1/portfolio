# Contributing to Muhammad Umair's Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines for contributing to the codebase.

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**
- Basic knowledge of React, TypeScript, and CSS

### Development Setup

1. **Fork the repository**

   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Create a new branch for your feature**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Contribution Guidelines

### Code Style

- **TypeScript**: All new code must be written in TypeScript with proper typing
- **ESLint**: Follow the project's ESLint configuration
- **Prettier**: Format code using Prettier
- **Naming**: Use descriptive names for variables, functions, and components

### Component Structure

```typescript
// Example component structure
import React from 'react';
import { ComponentProps } from '../../types';
import { renderIcon } from '../../utils/IconWrapper';
import './ComponentName.css';

interface ComponentNameProps {
  // Define props with proper TypeScript types
}

const ComponentName: React.FC<ComponentNameProps> = ({ props }) => {
  // Component logic here

  return (
    <div className="component-name">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### CSS Guidelines

- Use CSS custom properties (variables) defined in `globals.css`
- Follow BEM naming convention for classes
- Ensure responsive design for all screen sizes
- Use semantic HTML elements

### Commit Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

feat(header): add navigation menu toggle
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(hero): improve responsive layout
refactor(utils): simplify icon wrapper function
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting changes
- `refactor`: Code restructuring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to reproduce**: Detailed steps to reproduce the bug
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happens
5. **Environment**: Browser, OS, screen resolution
6. **Screenshots**: If applicable

### Feature Requests

For feature requests, please include:

1. **Problem statement**: What problem does this solve?
2. **Proposed solution**: How should it work?
3. **Alternatives**: Any alternative solutions considered
4. **Additional context**: Screenshots, mockups, references

## Pull Request Process

### Before Submitting

1. **Test your changes**: Ensure all functionality works correctly
2. **Run linting**: `npm run lint`
3. **Format code**: `npm run format`
4. **Build successfully**: `npm run build`
5. **Update documentation**: If applicable

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review of the code completed
- [ ] Code is properly commented
- [ ] Changes are responsive across devices
- [ ] No console errors or warnings
- [ ] Build completes without errors
- [ ] PR description clearly explains changes

### PR Description Template

```markdown
## Changes Made

- Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactor
- [ ] Style improvement

## Testing

- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices
- [ ] All existing functionality works

## Screenshots (if applicable)

[Add screenshots here]

## Additional Notes

[Any additional information]
```

## Design Guidelines

### Visual Design

- **Dark Theme**: Primary color scheme is dark with cyan accents
- **Typography**: Use Roboto Mono for monospace elements
- **Spacing**: Follow consistent spacing patterns
- **Colors**: Use CSS custom properties for consistent theming

### Animation Guidelines

- **Performance**: Use CSS transforms and opacity for animations
- **Accessibility**: Respect `prefers-reduced-motion`
- **Timing**: Use appropriate easing functions
- **Purpose**: Animations should enhance UX, not distract

### Responsive Design

- **Mobile First**: Design for mobile, then enhance for desktop
- **Breakpoints**: Follow existing breakpoint structure
- **Touch Targets**: Ensure adequate touch target sizes
- **Performance**: Optimize for various device capabilities

## Code Review Process

### What We Look For

1. **Functionality**: Does the code work as intended?
2. **Code Quality**: Is the code clean and well-structured?
3. **Performance**: Are there any performance implications?
4. **Accessibility**: Is the code accessible to all users?
5. **Security**: Are there any security concerns?
6. **Documentation**: Is the code properly documented?

### Review Timeline

- **Initial Review**: Within 2-3 days
- **Follow-up**: Within 1-2 days for revisions
- **Merge**: After approval and all checks pass

## Security

### Reporting Security Issues

Please do **NOT** report security issues in public issues. Instead:

1. Email: umair.leo17@gmail.com
2. Include "SECURITY" in the subject line
3. Provide detailed description of the vulnerability
4. Include steps to reproduce if applicable

### Security Guidelines

- Never commit sensitive data (API keys, passwords, etc.)
- Use environment variables for configuration
- Validate all user inputs
- Follow secure coding practices

## 📚 Resources

### Project Resources

- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools

- [React DevTools](https://react-devtools-tutorial.vercel.app/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🤝 Community

### Communication

- **GitHub Discussions**: For questions and general discussion
- **Issues**: For bug reports and feature requests
- **Pull Requests**: For code contributions

### Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Recognition

Contributors will be recognized in the following ways:

1. **README Credits**: Listed in the contributors section
2. **Release Notes**: Mentioned in relevant release notes
3. **Social Media**: Acknowledged on social platforms

## Questions?

If you have any questions about contributing:

- **GitHub Discussions**: Start a discussion
- **Email**: umair.leo17@gmail.com
- **Twitter**: [@UmairLeo7](https://x.com/UmairLeo7)

Thank you for contributing to making this portfolio better!
