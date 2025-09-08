# Changelog

All notable changes to this project will be documented in this file. This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1](https://github.com/umairleo1/portfolio/compare/v0.1.0...v0.1.1) (2025-09-08)

### Bug Fixes

- **seo:** resolve canonical URL conflicts and path duplication ([92da01a](https://github.com/umairleo1/portfolio/commit/92da01a71cdaf075136e59176dbef6e7ec59b56e))

### Performance Improvements

- **seo:** remove unnecessary image preload to fix console warnings ([d6df442](https://github.com/umairleo1/portfolio/commit/d6df442331ac2686ce08ed12dcebe7a7e38c29aa))

## [0.1.0](https://github.com/umairleo1/portfolio/compare/v0.0.13...v0.1.0) (2025-09-08)

### Features

- **seo:** add comprehensive JSON-LD schemas with FAQ and breadcrumb ([6977f0a](https://github.com/umairleo1/portfolio/commit/6977f0ae7e60c37e9c0f7d3fc911de082fe486e5))
- **seo:** add professional meta tags and image optimization ([33318f0](https://github.com/umairleo1/portfolio/commit/33318f035a6a7f7fa4a1081cf666558a5e8f0dbf))
- **seo:** enhance static meta tags with professional profile schema ([81abb80](https://github.com/umairleo1/portfolio/commit/81abb80982d45b7f4a92c9c71e29860eebd806e9))

### Performance Improvements

- **seo:** add apache server configuration for HTTP 206 prevention ([47bf238](https://github.com/umairleo1/portfolio/commit/47bf23861b4059d50951529059358a88e8ed7304))

### Documentation

- **structure:** update architecture with SEO enhancements ([388a7c3](https://github.com/umairleo1/portfolio/commit/388a7c3f60a080b1e12425791cf4ca3b55b651d4))

## [0.0.13](https://github.com/umairleo1/portfolio/compare/v0.0.12...v0.0.13) (2025-09-08)

### Bug Fixes

- **build:** prevent double slashes in sitemap URLs ([5b6b9ff](https://github.com/umairleo1/portfolio/commit/5b6b9ff4d954c71b51e99d64f3c66de3f2fba839))
- **config:** add trailing slash to base URLs ([1f97efa](https://github.com/umairleo1/portfolio/commit/1f97efaaaf911be1152bcde21aaf80dcf73bc7da))
- **seo:** enhance canonical URL construction logic ([eedcb9d](https://github.com/umairleo1/portfolio/commit/eedcb9de966d073ffdb7ed046294714732206375))
- **seo:** update Open Graph URL with trailing slash ([e755e1e](https://github.com/umairleo1/portfolio/commit/e755e1e2dc028dd555158655b094d4d94cff2f78))

### Documentation

- update URLs for trailing slash consistency ([c94e83f](https://github.com/umairleo1/portfolio/commit/c94e83f2f8b848de4d86136b4f1b5de3eb94ea4a))

## [0.0.12](https://github.com/umairleo1/portfolio/compare/v0.0.11...v0.0.12) (2025-09-07)

### Bug Fixes

- **ci:** improve Lighthouse monitoring accuracy ([7f81fac](https://github.com/umairleo1/portfolio/commit/7f81fac8e17808b2da4fe57587839d9fe6b513bc))

## [0.0.11](https://github.com/umairleo1/portfolio/compare/v0.0.10...v0.0.11) (2025-09-07)

### Performance Improvements

- **ci:** increase performance threshold to 90% ([27a1e17](https://github.com/umairleo1/portfolio/commit/27a1e17216fb76452fb13039cd15adb1c618f04f))

### Documentation

- **ci:** update manual deployment documentation for security changes ([6286ac4](https://github.com/umairleo1/portfolio/commit/6286ac4d41e39cbb09448d16c350f8bb9f0f8c13))

## [0.0.10](https://github.com/umairleo1/portfolio/compare/v0.0.9...v0.0.10) (2025-09-07)

### ⚠ BREAKING CHANGES

- **ci:** deploy.yml no longer triggers on pull requests

### Bug Fixes

- **ci:** rebuild release workflow with professional standards ([38fa97a](https://github.com/umairleo1/portfolio/commit/38fa97ac72b27bfa2c635cbf6a3cdab8fe034161))
- **ci:** remove dangerous PR deployment trigger from deploy workflow ([ffe89eb](https://github.com/umairleo1/portfolio/commit/ffe89eb83a1f01c66521d8e6e4acde834f93c000))
- **ci:** replace failing semantic-release with git-based version detection ([a385e13](https://github.com/umairleo1/portfolio/commit/a385e138e3bb500db5bfcc048e4b0a7c69c61e2f))

### Documentation

- **ci:** update workflow documentation for accuracy ([3e2acd7](https://github.com/umairleo1/portfolio/commit/3e2acd76d7a3ec3264a0721a55fa1a027d6104e7))
- **deploy:** fix outdated pipeline references ([906d14b](https://github.com/umairleo1/portfolio/commit/906d14b6e277bc0005ee3452944a9f21cf5089b7))
- **security:** update timeout and action configurations ([e6ab840](https://github.com/umairleo1/portfolio/commit/e6ab840a5a60482976f42756404682dfce749dba))

## [0.0.9](https://github.com/umairleo1/portfolio/compare/v0.0.8...v0.0.9) (2025-09-07)

### Bug Fixes

- **ci:** add build validation and deployment logging ([c33f20b](https://github.com/umairleo1/portfolio/commit/c33f20b5aaac0c6b942e1fa82113120b19bc3fa4))
- **ci:** add timeout and validation to PR checks ([83b2147](https://github.com/umairleo1/portfolio/commit/83b2147cb9293fc42016fda4be479ef87c341d18))
- **ci:** enhance version detection and error handling ([e11d4a2](https://github.com/umairleo1/portfolio/commit/e11d4a2ff30e8a19db78e4be80f7bc92f5303f2a))
- **ci:** ensure performance monitoring runs after deployment ([98a3c69](https://github.com/umairleo1/portfolio/commit/98a3c6958222dcb49e159e952ceb2f8b1cd3f5f1))
- **ci:** improve emergency hotfix validation and timeouts ([b983753](https://github.com/umairleo1/portfolio/commit/b9837534fcb5702c1faa91b8ccfb1cbb8f54827f))

## [0.0.8](https://github.com/umairleo1/portfolio/compare/v0.0.7...v0.0.8) (2025-09-07)

### Bug Fixes

- **security:** remove REACT_APP_GITHUB_TOKEN from client builds ([28b72c7](https://github.com/umairleo1/portfolio/commit/28b72c78b8d43d353b8166423a31015bc4ff4f68))

### Documentation

- add comprehensive project structure guide ([cb2eab3](https://github.com/umairleo1/portfolio/commit/cb2eab3cb8a271b0ffb3059109b9854e42a990c5))
- **readme:** add comprehensive versioning system documentation ([69296a7](https://github.com/umairleo1/portfolio/commit/69296a77d6d1570691018196ef4ef5095a0d3c27))
- **readme:** update project structure to include CHANGELOG and missing files ([b478942](https://github.com/umairleo1/portfolio/commit/b47894240d8a24d9404115c64abd5905021d332f))
- restructure README ([4c69cf7](https://github.com/umairleo1/portfolio/commit/4c69cf7042ae7bcaaf584388ca0e035caee5c236))
- restructure README with concise overview and references ([9c5ec4b](https://github.com/umairleo1/portfolio/commit/9c5ec4bfe433afe3a075a4f60415a69fe8271a4a))
- standardize EmailJS configuration across all workflows and add comprehensive setup guide ([3928abe](https://github.com/umairleo1/portfolio/commit/3928abe83992fabbfc6e915f315ed5474b6775a8))
- **versioning:** enhance semantic release documentation ([59ddadb](https://github.com/umairleo1/portfolio/commit/59ddadbfc5e200eccec56e1e0c8ff84bcbea71a3))

## [0.0.7](https://github.com/umairleo1/portfolio/compare/v0.0.6...v0.0.7) (2025-09-07)

### Bug Fixes

- **release:** remove build assets from GitHub releases to prevent upload conflicts ([b790e9a](https://github.com/umairleo1/portfolio/commit/b790e9a9d4fdc5e02310dd6cb3e9c8d5327a9abe))

## [0.0.6](https://github.com/umairleo1/portfolio/compare/v0.0.5...v0.0.6) (2025-09-07)

### Bug Fixes

- **ci:** fetch semantic-release git notes to prevent JSON parsing errors ([e865447](https://github.com/umairleo1/portfolio/commit/e865447b5bafcee42e7a1d604c5428f25c239d30))

## [0.0.5](https://github.com/umairleo1/portfolio/compare/v0.0.4...v0.0.5) (2025-09-07)

### Bug Fixes

- **ci:** remove set -e conflict with semantic-release error handling ([f78b587](https://github.com/umairleo1/portfolio/commit/f78b5873c84bf6b4101390b0cca649c73b0f14e8))
- **release:** simplify git commit message to prevent future JSON parsing issues ([07237dc](https://github.com/umairleo1/portfolio/commit/07237dcc7da338552c7fab35907f910d5ad7fb11))

## [0.0.4](https://github.com/umairleo1/portfolio/compare/v0.0.3...v0.0.4) (2025-09-07)

### Bug Fixes

- **ci:** test full deployment pipeline ([d427b3f](https://github.com/umairleo1/portfolio/commit/d427b3fbd6d08f9af81dadabb42273e5b626d155))

## [0.0.3](https://github.com/umairleo1/portfolio/compare/v0.0.2...v0.0.3) (2025-09-07)

### Bug Fixes

- **ci:** add defensive programming and fix dependency chains ([39558fb](https://github.com/umairleo1/portfolio/commit/39558fbbea20cc93664b291c18843dc9849a6500))

## [0.0.2](https://github.com/umairleo1/portfolio/compare/v0.0.1...v0.0.2) (2025-09-07)

### Bug Fixes

- **ci:** ensure proper semantic release workflow handling ([48ad159](https://github.com/umairleo1/portfolio/commit/48ad1597f2e1c59d73f101a3ee92bd0669e6844e))
- **ci:** improve semantic release error handling for seamless workflow ([780dc95](https://github.com/umairleo1/portfolio/commit/780dc957369de5056ca4f394b7d7a3f78eebaee1))

## [0.0.1](https://github.com/umairleo1/portfolio/compare/v0.0.0...v0.0.1) (2025-09-07)

### Bug Fixes

- **ci:** grant contents write permission for semantic release dry-run ([0415346](https://github.com/umairleo1/portfolio/commit/0415346d31e7a23549e189fb9c34349daa51c2d0))
- **deps:** add missing conventional-changelog dependency ([80676eb](https://github.com/umairleo1/portfolio/commit/80676eb7c3e848f81a5a24129f90e7e4b0c5d76f))
- **release:** enterprise-grade semantic release configuration and debugging ([0ba70a5](https://github.com/umairleo1/portfolio/commit/0ba70a5297d46fa84bb3cddc076dd09d8faf4dbd))
- **release:** fix personal info data structure ([4e77900](https://github.com/umairleo1/portfolio/commit/4e779004b4317cd37abd3315102b1473ee7114ae))
- **release:** fix personal info data structure ([ad8aaad](https://github.com/umairleo1/portfolio/commit/ad8aaad047d57efcb921dcd4e38c25b5a16970d6))
