import type { SkillCategories } from '../types';

/**
 * Technical skills organized by category
 * Used in expertise section and skill badges
 */
export const skills: SkillCategories = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  frontEnd: [
    'React 18+',
    'React Native',
    'Next.js',
    'Redux / Redux-Saga',
    'Context API',
    'Expo',
    'Tailwind CSS',
  ],
  backEnd: [
    'Node.js / Express.js',
    'Python (FastAPI, Flask)',
    'Java (Spring Boot)',
    'GraphQL',
    'REST APIs',
    'Microservices',
    'Socket.IO',
  ],
  cloudAndIaC: [
    'AWS (Lambda, S3, RDS, EventBridge, Amplify, CloudWatch)',
    'GCP (Compute Engine)',
    'Terraform',
    'CloudFormation',
  ],
  devOpsAndObservability: [
    'GitHub Actions',
    'CircleCI',
    'Jenkins',
    'AWS CodeBuild',
    'Codemagic',
    'App Center',
    'Docker',
    'Webpack',
    'Vite',
    'Vercel',
    'Netlify',
  ],
  dataAndMessaging: [
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Apache Kafka',
    'REST APIs',
    'GraphQL',
  ],
  testing: [
    'Jest / Vitest',
    'Cypress',
    'Playwright',
    'React Testing Library',
    'JUnit',
    'E2E Testing',
    'TDD',
  ],
  security: ['OAuth 2.0', 'AWS Cognito', 'Secure-coding (OWASP Top-10)'],
  generativeAI: [
    'Claude Code',
    'GitHub Copilot',
    'Cursor',
    'ChatGPT CLI',
    'LangChain',
    'OpenAI API',
  ],
  designAndTools: [
    'Atomic Design System',
    'Storybook',
    'Git',
    'Android Studio',
    'Xcode',
    'ESLint',
    'Prettier',
    'Husky',
  ],
  monitoringAndAnalytics: [
    'Sentry',
    'Google Analytics (GA4)',
    'Lighthouse',
    'Web Vitals',
    'Performance Optimization',
  ],
};
