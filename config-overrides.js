const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
  };
  
  return config;
};

module.exports.jest = function(config) {
  config.moduleNameMapper = {
    ...config.moduleNameMapper,
    '^@/(.*)$': '<rootDir>/src/$1',
  };
  return config;
};