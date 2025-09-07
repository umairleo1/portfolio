# Semantic Release Setup Guide

Professional automated versioning and release management for Muhammad Umair's Portfolio.

## Overview

This project uses **Semantic Release** with industry-standard practices:

- Automated version bumping based on commit messages
- Changelog generation
- GitHub releases with build artifacts
- Environment-based versioning (no package.json conflicts)
- Professional CI/CD integration

## How It Works

### Version Flow

```
Conventional Commit → Quality Gates → Build → Semantic Release → Deploy
```

### Commit Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Commit Types & Version Impact

| Commit Type | Version Bump              | Release + Deploy | Example                              |
| ----------- | ------------------------- | ---------------- | ------------------------------------ |
| `feat:`     | **Minor** (0.1.0 → 0.2.0) | ✅ Yes           | `feat: add dark mode toggle`         |
| `fix:`      | **Patch** (0.1.0 → 0.1.1) | ✅ Yes           | `fix: resolve mobile navigation bug` |
| `perf:`     | **Patch** (performance)   | ✅ Yes           | `perf: optimize image loading`       |
| `feat!:`    | **Major** (1.0.0 → 2.0.0) | ✅ Yes           | `feat!: redesign user interface`     |
| `docs:`     | No release                | ❌ No            | `docs: update installation guide`    |
| `style:`    | No release                | ❌ No            | `style: format code with prettier`   |
| `refactor:` | No release                | ❌ No            | `refactor: simplify component logic` |
| `test:`     | No release                | ❌ No            | `test: add unit tests for utils`     |
| `chore:`    | No release                | ❌ No            | `chore: update dependencies`         |

### Breaking Changes

**Add `!` after type:**

```bash
feat!: remove deprecated API
```

**Include BREAKING CHANGE footer:**

```bash
feat: add new authentication system

BREAKING CHANGE: The old auth API has been removed. Use the new authentication hooks instead.
```

### Release Process

1. **Commit** with conventional format
2. **CI/CD Pipeline** runs quality gates
3. **Semantic Release** determines version bump
4. **Automated Release** creates:
   - Git tag (e.g., `v0.2.0`)
   - GitHub release with notes
   - Updated `CHANGELOG.md`
   - Deployment to GitHub Pages

### Commands

```bash
# Validate release setup
npm run release:validate

# Test release (dry run)
npm run release:dry

# Check current version
npm run version:check
```

**Current Version:** See [CHANGELOG.md](../CHANGELOG.md) for latest release notes.

## Conventional Commits

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Examples

```bash
# Feature (minor version bump)
feat(auth): add user login functionality
feat(ui): implement responsive navigation menu

# Bug fix (patch version bump)
fix(mobile): resolve touch scroll issues
fix(api): handle network timeout errors

# Breaking change (major version bump)
feat!: remove deprecated authentication API
feat(auth)!: migrate to OAuth 2.0

# No release
docs: update installation guide
chore(deps): update dependencies
style: format code with prettier
```

### Using the Template

```bash
# Set commit message template (run once)
git config commit.template .gitmessage

# Now 'git commit' will show the template
git commit
```

## Available Scripts

```bash
# Check current version
npm run version:check

# Test semantic release (dry run)
npm run release:dry

# Local release (requires GITHUB_TOKEN)
npm run release:local

# Standard release (runs in CI/CD)
npm run release
```

## CI/CD Workflow

### Automated Process

1. **Quality Gates**: Lint, type-check, tests, security scan
2. **Build**: Create production build with dynamic version
3. **Semantic Release**: Analyze commits, bump version, create release
4. **Deploy**: Deploy to GitHub Pages with new version

### Manual Deployment

```bash
# Force deployment without release (emergency only)
gh workflow run deploy.yml -f force_deploy=true
```

## Professional Features

### Environment-Based Versioning

- **Production**: Version from CI/CD environment
- **Development**: Fallback to package.json version
- **No merge conflicts**: package.json version stays static

### Version Information

```typescript
import { getAppVersion, getBuildInfo, getVersionString } from '@/utils/version';

// Get version string
const version = getAppVersion(); // "1.2.3"

// Get detailed build info
const buildInfo = getBuildInfo();
// {
//   version: "1.2.3",
//   buildTime: "123",
//   commitSha: "abc1234",
//   environment: "production"
// }

// Get formatted version for display
const displayVersion = getVersionString(); // "v1.2.3"
```

### Analytics Integration

Version is automatically tracked in Google Analytics for user segmentation.

## Important Notes

### First Release

Your first conventional commit will create version `1.0.0` automatically.

### Version Sync

After releases, pull the latest changes:

```bash
git pull origin main --tags
```

### Branch Protection

- Main branch is protected
- All commits must be conventional format
- CI/CD must pass before merge

## Troubleshooting

### "No release published"

- Check if commits follow conventional format
- Ensure commits contain features (`feat:`) or fixes (`fix:`)
- Documentation/style changes don't trigger releases
- Run `npm run release:dry` to test locally

### Version Conflicts

- Always pull after merges: `git pull origin main --tags`
- Never manually edit package.json version
- Use environment variables for version display

### Failed Release

- Check GitHub Actions logs
- Verify GITHUB_TOKEN permissions
- Ensure conventional commit format
- Run `npm run release:validate` to check setup

### Build Failures

- Semantic release creates version tag before build
- If build fails, version tag exists but no deployment
- Delete failed tag: `git tag -d v1.x.x && git push origin --delete v1.x.x`
- Fix build issues and push new commit

### Emergency Situations

- Use hotfix workflow for critical fixes
- Workflow dispatch allows manual deployment
- Emergency workflow skips some quality gates
- Always follow up with proper release

## Professional Edge Cases

### Concurrent Releases

- Workflow prevents concurrent releases on same branch
- Multiple commits pushed quickly will queue properly
- Last commit determines final version

### Failed Deployments

- Semantic release succeeds but deployment fails
- GitHub release exists but site not updated
- Re-run deployment workflow manually
- Use hotfix workflow for emergency

### Branch Protection Rules

- Configure branch protection on main
- Require status checks before merge
- Prevent force pushes to main
- Require linear history for clean releases

### Rollback Procedures

1. **Immediate rollback**: Use hotfix workflow with previous working code
2. **Proper rollback**: Create revert commit with `fix:` prefix
3. **Emergency**: Manually deploy previous GitHub release artifacts

### Security Considerations

- All workflows use minimal required permissions
- Secrets are properly scoped and protected
- No hardcoded credentials in source code
- Actions pinned to specific versions for security

### Performance Optimization

- Build artifacts cached between jobs
- Dependencies cached for faster installs
- Parallel execution where possible
- Timeout configurations prevent hanging

### Monitoring and Alerts

- GitHub Actions provides detailed execution logs
- Failed releases generate error notifications
- Success/failure status in workflow summary
- Integration with external monitoring possible

## Validation and Testing

### Pre-deployment Validation

```bash
# Validate entire setup
npm run release:validate

# Test release dry run
npm run release:dry

# Check version consistency
npm run version:check

# Run all quality checks
npm run validate
```

### Testing Different Scenarios

1. **Feature release**: `git commit -m "feat: add new feature"`
2. **Bug fix release**: `git commit -m "fix: resolve critical bug"`
3. **Breaking change**: `git commit -m "feat!: remove deprecated API"`
4. **No release**: `git commit -m "docs: update documentation"`

### Production Readiness Checklist

- [ ] All workflows pass validation
- [ ] Semantic release configuration tested
- [ ] Branch protection rules configured
- [ ] Required secrets properly set
- [ ] Version utilities integrated
- [ ] Documentation updated
- [ ] Emergency procedures tested

## Resources

- [Semantic Release Documentation](https://semantic-release.gitbook.io/)
- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

## Quick Start

1. **Make changes to your code**
2. **Commit with conventional format**:
   ```bash
   git add .
   git commit -m "feat: add new portfolio section"
   ```
3. **Push to main**:
   ```bash
   git push origin main
   ```
4. **Automatic release happens**
5. **Pull latest version**:
   ```bash
   git pull origin main --tags
   ```

---

**Professional Portfolio by Muhammad Umair**  
_Automated with Semantic Release & GitHub Actions_
