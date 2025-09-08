# Deployment Setup Guide

## GitHub Pages Configuration Required

After pushing this code, you need to configure GitHub Pages to use GitHub Actions:

### 1. Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **"GitHub Actions"** (not "Deploy from a branch")

### 2. Environment Setup

The workflows will automatically create a `github-pages` environment.

### 3. First Deployment

- Push to `main` branch triggers the deployment workflow
- All security scans and quality checks must pass
- Deployment typically takes 6-8 minutes

### 4. Monitoring

- Check **Actions** tab for workflow status
- View deployment status in **Environments** section
- Monitor performance reports in workflow summaries

## Security Features Active

- **CodeQL Analysis**: Semantic code security scanning
- **Trivy Scanner**: Vulnerability detection for dependencies
- **SHA-Pinned Actions**: All actions use immutable versions
- **SARIF Reporting**: Security results in standardized format

## Performance Standards

The pipeline enforces these Lighthouse thresholds:

- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

## Troubleshooting

### Common Issues

1. **Pages not configured**: Set source to "GitHub Actions" in Settings
2. **Workflow permissions**: Ensure repository has Pages write permissions
3. **Environment secrets**: No manual secrets needed for this setup

### Support

- Workflow logs available in Actions tab
- Performance reports in deployment summaries
- Security scan results in Security tab
