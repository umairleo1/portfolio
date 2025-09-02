const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/**
 * Intelligent domain detection for automatic build configuration
 * Determines whether to use GitHub Pages or custom domain build
 */

const detectDomainType = () => {
  const packageJson = require('../package.json');
  const cnamePath = path.join(__dirname, '..', 'public', 'CNAME');

  // Check for custom domain indicators
  const hasCNAME = fs.existsSync(cnamePath);
  const homepage = packageJson.homepage || '';

  // Secure domain validation - check exact GitHub Pages pattern
  const githubPagesPattern = /^https:\/\/[^.]+\.github\.io(\/.*)?$/;
  const homepageIsCustom = !githubPagesPattern.test(homepage);

  const isCustomDomain = hasCNAME || homepageIsCustom;

  console.log('🔍 Domain Detection:');
  console.log(`   CNAME file exists: ${hasCNAME}`);
  console.log(`   Homepage: ${packageJson.homepage}`);
  console.log(`   Custom domain detected: ${isCustomDomain}`);

  return isCustomDomain;
};

const executeBuild = () => {
  const isCustomDomain = detectDomainType();

  const buildCommand = isCustomDomain
    ? 'react-app-rewired build' // Custom domain: no PUBLIC_URL
    : 'PUBLIC_URL=/portfolio react-app-rewired build'; // GitHub Pages: with PUBLIC_URL

  console.log(`🚀 Running: ${buildCommand}`);
  console.log('');

  exec(buildCommand, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Build failed:', error);
      process.exit(1);
    }

    if (stderr) {
      console.error('⚠️ Build warnings:', stderr);
    }

    console.log(stdout);
    console.log(
      `✅ Build completed for ${isCustomDomain ? 'custom domain' : 'GitHub Pages'}`
    );
  });
};

// Run if called directly
if (require.main === module) {
  executeBuild();
}

module.exports = { detectDomainType, executeBuild };
