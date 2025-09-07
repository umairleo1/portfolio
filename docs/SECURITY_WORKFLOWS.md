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
timeout-minutes: 30 # 30 minutes default
# Specific timeouts:
# quality_gates: 15        # 15 minutes for linting/testing
# build: 20                # 20 minutes for builds
# deployment: 15           # 15 minutes for deployments
# security_scan: 10        # 10 minutes for security scans
```

### Trusted Actions

Always pin actions to specific versions for security:

```yaml
- actions/checkout@v4.2.2
- actions/setup-node@v4.1.0
- actions/cache@v4.2.0
- actions/upload-artifact@v4
- actions/download-artifact@v4
- actions/configure-pages@v5.0.0
- actions/upload-pages-artifact@v4.0.0
- actions/deploy-pages@v4.0.5
- github/codeql-action/init@v3.28.0
- github/codeql-action/analyze@v3.28.0
- aquasecurity/trivy-action@0.28.0
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

### Secure Workflow Template

```yaml
name: Secure Workflow

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'workflow-${{ github.ref }}'
  cancel-in-progress: false

jobs:
  secure-job:
    name: Secure Job
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - name: Checkout
        uses: actions/checkout@v4.2.2

      - name: Setup Node.js
        uses: actions/setup-node@v4.1.0
        with:
          node-version: '20'
          cache: 'npm'

      # Additional secure steps...
```

This configuration ensures all workflows follow enterprise security standards while maintaining functionality and performance.
