# Security Configuration for Workflows

Security best practices and configurations for GitHub Actions workflows.

## Global Security Settings

### Permissions

Use minimal required permissions for all workflows:

```yaml
permissions:
  contents: read # Default - most workflows only need read
  pages: write # Only for deployment workflows
  id-token: write # Only for OIDC authentication
  actions: read # Only when reading artifacts
  security-events: write # Only for security scanning
```

### Timeout Settings

Prevent resource exhaustion with appropriate timeouts:

```yaml
# Professional timeout configurations by job type (implemented):
security: 10 # Security scanning (CodeQL + Trivy) - release.yml
quality: 15 # Quality gates (lint + test + audit) - release.yml
build: 20 # Builds with semantic release dry-run - release.yml
release: 10 # Semantic release execution - release.yml
deploy: 15 # GitHub Pages deployment - release.yml, deploy.yml
monitor: 10 # Performance monitoring - release.yml
pr-check: 25 # PR quality checks - pr-check.yml
hotfix: 30 # Emergency hotfix deployment - hotfix.yml
manual-deploy: 30 # Manual deployment - deploy.yml
```

### Trusted Actions

Always pin actions to specific versions for security (current implementations):

```yaml
# Core actions (used across all workflows)
- actions/checkout@v4.2.2
- actions/setup-node@v4.1.0
- actions/upload-artifact@v4
- actions/download-artifact@v4

# GitHub Pages deployment (deploy.yml, release.yml, hotfix.yml)
- actions/configure-pages@v5.0.0
- actions/upload-pages-artifact@v4.0.0
- actions/deploy-pages@v4.0.5

# Security scanning (release.yml, pr-check.yml)
- github/codeql-action/init@v3.28.0
- github/codeql-action/analyze@v3.28.0
- github/codeql-action/upload-sarif@v3.28.0
- aquasecurity/trivy-action@0.28.0

# Quality & performance monitoring (release.yml, deploy.yml)
- codecov/codecov-action@v5.1.1
- treosh/lighthouse-ci-action@v12
```

## Environment Protection Rules

### GitHub Pages Environment

```yaml
environments:
  github-pages:
    protection_rules:
      - required_reviewers: 0 # Portfolio doesn't need manual approval
      - wait_timer: 0
      - prevent_self_review: false
```

### Emergency Hotfix Environment

```yaml
environments:
  github-pages-emergency:
    protection_rules:
      - required_reviewers: 0
      - wait_timer: 0
      - prevent_self_review: false
```

## Secret Management

### Required Secrets

```yaml
secrets:
  - GITHUB_TOKEN # Auto-provided by GitHub
  - REACT_APP_GOOGLE_ANALYTICS_ID # Optional - for analytics
  - REACT_APP_EMAILJS_SERVICE_ID # Optional - for contact form
  - REACT_APP_EMAILJS_TEMPLATE_ID # Optional - for contact form
  - REACT_APP_EMAILJS_PUBLIC_KEY # Optional - for contact form
  - REACT_APP_GITHUB_TOKEN # Optional - for GitHub API
```

## Security Features Implemented

### Best Practices

- **Minimal permissions principle** - Only grant necessary permissions
- **Pinned action versions** - No @main or @latest references
- **Timeout configurations** - Prevent hanging workflows
- **Input validation and sanitization** - Secure parameter handling
- **Error handling with proper logging** - Comprehensive error reporting
- **Concurrency controls** - Prevent race conditions
- **Environment protection** - Production deployment safeguards
- **Security scanning** - Integrated in all pipelines
- **Artifact retention policies** - Automatic cleanup
- **No hardcoded secrets** - All secrets externalized
- **OIDC authentication** - Enhanced security where possible

### Workflow Security Checklist

- [ ] Minimal required permissions set
- [ ] All actions pinned to specific versions
- [ ] Appropriate timeout configurations
- [ ] Input validation implemented
- [ ] Error handling with logging
- [ ] Concurrency controls configured
- [ ] Environment protection rules set
- [ ] Security scanning enabled
- [ ] Secrets properly managed
- [ ] No hardcoded credentials

## Implementation Examples

### Professional Granular Permissions Template

```yaml
name: Professional Release Workflow

on:
  push:
    branches: [main]

# Workflow-level minimal permissions
permissions:
  contents: read # Default read access for all jobs

concurrency:
  group: 'release-${{ github.ref }}'
  cancel-in-progress: false

jobs:
  security:
    name: Security Analysis
    runs-on: ubuntu-latest
    timeout-minutes: 10
    permissions:
      contents: read # Required to checkout code
      security-events: write # Required for CodeQL and SARIF uploads
    steps:
      - name: Checkout
        uses: actions/checkout@v4.2.2
        with:
          fetch-depth: 0

  quality:
    name: Quality Gates
    runs-on: ubuntu-latest
    timeout-minutes: 15
    needs: security
    permissions:
      contents: read # Required to checkout code
    steps:
      - name: Checkout
        uses: actions/checkout@v4.2.2

  release:
    name: Semantic Release
    runs-on: ubuntu-latest
    timeout-minutes: 10
    needs: [quality, build]
    permissions:
      contents: write # Required to create tags and release commits
      actions: read # Required to download build artifacts
    steps:
      - name: Semantic Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: npx semantic-release

  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    timeout-minutes: 15
    needs: [build, release]
    permissions:
      contents: read # Required for basic access
      pages: write # Required for GitHub Pages deployment
      id-token: write # Required for OIDC authentication
      actions: read # Required to download build artifacts
    environment:
      name: github-pages
    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4.0.5
```

This configuration ensures all workflows follow enterprise security standards while maintaining functionality and performance.
