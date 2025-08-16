# Setup Guide

This guide will help you set up the portfolio website locally for development.

## Prerequisites

- Node.js (>= 18.0.0)
- npm (>= 8.0.0)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/umairleo1/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration values.

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Development Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Shared components
│   ├── effects/        # Visual effects components
│   └── sections/       # Page section components
├── contexts/           # React contexts
├── data/              # Static data
├── hooks/             # Custom React hooks
├── styles/            # Global styles
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Environment Variables

See `.env.example` for all available environment variables and their descriptions.