module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  rules: {
    // General rules
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-template': 'warn',
  },
  ignorePatterns: [
    'build/',
    'dist/',
    'node_modules/',
    '*.config.js',
    'public/',
  ],
};