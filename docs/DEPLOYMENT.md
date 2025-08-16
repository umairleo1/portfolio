# Deployment Guide

This document outlines how to deploy the portfolio website to various platforms.

## GitHub Pages (Current)

The project is currently configured for GitHub Pages deployment.

### Automatic Deployment

1. Push changes to the `master` branch
2. Run the deployment command:
```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Environment Variables for Production

Set these environment variables in your deployment platform:

- `REACT_APP_ENVIRONMENT=production`
- `REACT_APP_BASE_URL=https://umairleo1.github.io/portfolio`
- Configure other variables as needed (see `.env.example`)

## Other Deployment Platforms

### Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Configure environment variables

### Custom Server

1. Build the project: `npm run build`
2. Serve the `build` directory with any static file server
3. Configure your web server to serve `index.html` for all routes (SPA routing)

## Performance Optimization

The build is optimized with:
- Code splitting
- Asset optimization
- Gzip compression
- Caching headers