# Code Quality Automation

The project includes comprehensive code quality automation with industry-standard tooling following enterprise best practices.

<div align="center">

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Husky](https://img.shields.io/badge/Husky-000000?style=for-the-badge&logo=git&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=jest&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## Pre-commit Hooks (Husky + lint-staged)

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

## Manual Quality Checks

```bash
# Comprehensive validation (used in CI/CD)
npm run validate               # Runs lint + type-check + tests

# Individual checks
npm run lint                   # ESLint with React/TypeScript rules
npm run lint:fix               # Auto-fix linting issues
npm run format                 # Format all files with Prettier
npm run format:check           # Verify formatting without changes
npm run type-check             # TypeScript compilation check

# Release Quality Checks (see docs/SEMANTIC_RELEASE.md)
npm run release:validate       # Validate release setup
npm run version:check          # Check current version
npm run test:ci                # Tests with coverage reports

# Security auditing
npm run security:audit         # Full dependency audit
npm run security:audit:prod    # Production dependencies only
npm run security:audit:ci      # Critical vulnerabilities only
```

## ESLint Configuration

### Rules & Standards

The project uses comprehensive ESLint configuration with:

- **React 19 Best Practices** - Latest React patterns and hooks rules
- **TypeScript Strict Mode** - Full type safety enforcement
- **Accessibility Rules** - WCAG compliance checking
- **Performance Rules** - Bundle size and optimization warnings
- **Security Rules** - Vulnerability pattern detection

### Custom Rules

```javascript
// Key ESLint rules enforced:
{
  "@typescript-eslint/strict-boolean-expressions": "error",
  "react-hooks/exhaustive-deps": "error",
  "react/jsx-no-bind": "error",
  "jsx-a11y/anchor-is-valid": "error",
  "no-console": ["error", { "allow": ["warn", "error"] }]
}
```

## Prettier Configuration

### Code Formatting Standards

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

### File Coverage

Prettier formats all supported file types:

- JavaScript/TypeScript (`.js`, `.jsx`, `.ts`, `.tsx`)
- CSS and styling (`.css`, `.scss`, `.sass`)
- Configuration files (`.json`, `.yml`, `.yaml`)
- Documentation (`.md`, `.mdx`)

## TypeScript Configuration

### Strict Mode Enforcement

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### Path Mapping

```json
{
  "baseUrl": "src",
  "paths": {
    "@/*": ["*"],
    "@/components/*": ["components/*"],
    "@/utils/*": ["utils/*"],
    "@/data/*": ["data/*"],
    "@/styles/*": ["styles/*"]
  }
}
```

## Testing Strategy

### Jest Configuration

```javascript
// Testing standards enforced:
{
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/reportWebVitals.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
}
```

### Testing Best Practices

- **Unit Tests** - Individual component and utility testing
- **Integration Tests** - Component interaction testing
- **Accessibility Tests** - Screen reader and keyboard navigation
- **Performance Tests** - Bundle size and render performance
- **Coverage Reports** - Minimum 80% coverage requirement

## Benefits of Code Quality Automation

### Developer Experience

- **Never commit unformatted code** - Automatic Prettier formatting
- **Consistent code style** - ESLint enforces React/TypeScript best practices
- **Type safety** - TypeScript strict mode catches errors before runtime
- **Faster code reviews** - Automated formatting eliminates style discussions
- **CI/CD integration** - Same checks run locally and in GitHub Actions

### Code Quality Metrics

- **Maintainability** - Consistent patterns and conventions
- **Reliability** - Type safety and comprehensive testing
- **Security** - Regular dependency vulnerability scanning
- **Performance** - Bundle optimization and Web Vitals monitoring
- **Accessibility** - WCAG compliance enforcement

## IDE Integration

### VS Code Extensions

Recommended extensions for optimal development experience:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Editor Configuration

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## Performance Monitoring

### Bundle Analysis

Regular monitoring of:

- **Total Bundle Size** - Target: <150kB gzipped
- **Chunk Optimization** - Lazy loading effectiveness
- **Tree Shaking** - Dead code elimination
- **Dependency Impact** - New package size analysis

### Web Vitals Integration

Continuous monitoring of Core Web Vitals:

- **Largest Contentful Paint (LCP)** - <2.5s
- **First Input Delay (FID)** - <100ms
- **Cumulative Layout Shift (CLS)** - <0.1
- **First Contentful Paint (FCP)** - <1.8s

## Security Auditing

### Dependency Scanning

Automated security checks:

- **npm audit** - Vulnerability detection
- **Dependabot** - Automated security updates
- **SARIF reporting** - Standardized security format
- **License compliance** - Open source license validation

### Security Best Practices

- **No secrets in code** - Environment variable validation
- **Dependency pinning** - Exact version specifications
- **Supply chain security** - Verified package integrity
- **Regular updates** - Weekly security patch cycles

## Additional Documentation

- **[`../README.md`](../README.md)** - Project overview and quick start
- **[`SETUP.md`](SETUP.md)** - Complete installation and configuration guide
- **[`CUSTOMIZATION.md`](CUSTOMIZATION.md)** - Personalization and content management
- **[`ANALYTICS.md`](ANALYTICS.md)** - Analytics integration and business insights
- **[`../.github/CICD.md`](../.github/CICD.md)** - CI/CD pipeline and automation details
- **[`../CONTRIBUTING.md`](../CONTRIBUTING.md)** - Development and contribution guidelines
- **[`../SECURITY.md`](../SECURITY.md)** - Security policy and vulnerability reporting

---

This comprehensive code quality system ensures consistent, maintainable, and secure code while providing an excellent developer experience.
