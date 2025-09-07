# Required GitHub Secrets Configuration

This document outlines the GitHub secrets that need to be configured for the CI/CD pipeline to function correctly.

## Required Secrets

### Repository Secrets (Settings → Secrets and variables → Actions)

| Secret Name                     | Type   | Required | Description                                              |
| ------------------------------- | ------ | -------- | -------------------------------------------------------- |
| `REACT_APP_GOOGLE_ANALYTICS_ID` | Secret | Optional | Google Analytics 4 measurement ID (format: G-XXXXXXXXXX) |
| `REACT_APP_EMAILJS_SERVICE_ID`  | Secret | Optional | EmailJS service ID for contact form                      |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | Secret | Optional | EmailJS template ID for contact form                     |
| `REACT_APP_EMAILJS_PUBLIC_KEY`  | Secret | Optional | EmailJS public key for contact form                      |
| `CODECOV_TOKEN`                 | Secret | Optional | Codecov token for test coverage uploads                  |

## Security Notes

- **NEVER** add `REACT_APP_GITHUB_TOKEN` as it exposes tokens in client builds
- All `REACT_APP_*` secrets are bundled into the client-side build
- Only use `REACT_APP_*` for public configuration values
- Server-side tokens should use regular secrets (not `REACT_APP_*`)

## Setup Instructions

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add each required secret with its corresponding value

## Workflow Behavior

- **Missing optional secrets**: Workflows continue with empty values
- **Missing required secrets**: Workflows may fail at runtime
- **Invalid secrets**: Features dependent on those secrets won't work

## Environment Validation

The CI/CD pipeline includes validation steps to verify secret availability and provide clear error messages when required secrets are missing.
