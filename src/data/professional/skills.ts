import type { SkillCategories } from '../types';

/**
 * Technical skills organized by category
 * Used in expertise section and skill badges
 */
export const skills: SkillCategories = {
  languages: ['Python', 'JavaScript / TypeScript', 'SQL', 'Java'],
  cloudAndIaC: [
    'AWS (ECS, Lambda, RDS, CloudWatch)',
    'Terraform',
    'CloudFormation',
    'OpenShift',
  ],
  devOpsAndObservability: [
    'GitLab CI/CD',
    'GitHub Actions',
    'Docker',
    'SonarQube',
    'Nexus',
    'Prometheus',
    'Grafana',
  ],
  frontEnd: ['React 18+', 'React Query', 'Redux Toolkit', 'Context API'],
  backEnd: [
    'Python (FastAPI, Flask)',
    'Java (Spring Boot)',
    'Node.js / Express',
  ],
  generativeAI: [
    'LangGraph',
    'LangChain',
    'OpenAI API',
    'Hugging Face Transformers',
  ],
  dataAndMessaging: ['REST', 'GraphQL', 'Kafka', 'Kinesis'],
  testing: [
    'Pytest',
    'Jest',
    'React Testing Library',
    'JUnit',
    'Cypress (E2E)',
  ],
  security: ['OAuth 2.0', 'AWS Cognito', 'Secure-coding (OWASP Top-10)'],
};
