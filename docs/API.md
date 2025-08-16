# API Documentation

This document describes the external APIs and services used in the portfolio website.

## Environment Configuration

The application uses environment variables for configuration. See `src/config/env.ts` for the complete configuration.

## External Services

### EmailJS (Optional)

Used for the contact form functionality.

**Environment Variables:**
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

**Setup:**
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add the credentials to your environment variables

### Google Analytics (Optional)

Used for website analytics.

**Environment Variables:**
- `REACT_APP_GOOGLE_ANALYTICS_ID`

### GitHub API (Optional)

Used to dynamically fetch repository information.

**Environment Variables:**
- `REACT_APP_GITHUB_USERNAME`
- `REACT_APP_GITHUB_TOKEN` (optional, for higher rate limits)

## Data Sources

### Static Data

Most portfolio content is stored in `src/data/portfolio.ts`:
- Personal information
- Skills and expertise
- Projects
- Work experience
- Education

### Dynamic Data

The application can optionally fetch:
- GitHub repositories
- Contact form submissions
- Analytics data

## Configuration Files

- `src/config/env.ts` - Environment configuration
- `src/data/portfolio.ts` - Static portfolio data
- `.env.example` - Environment variables template