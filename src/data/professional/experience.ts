import type { Experience } from '../types';

/**
 * Professional work experience
 * Used in experience section and timeline component
 */
export const experience: Experience[] = [
  {
    title: 'Data Integrations Developer',
    company: 'UNICEF UK',
    location: 'London, United Kingdom',
    period: 'Feb 2025 – Present',
    achievements: [
      'Built GitLab CI gated Salesforce to Snowflake ETL (Python, SQL, AWS Lambda), cutting nightly load time 45%.',
      'Optimized SQL (CTEs, window functions) to reconcile 5M rows with 99.8% accuracy and zero critical Sonar findings.',
    ],
  },
  {
    title: 'Software Developer – Data Mining',
    company: 'University of Greenwich',
    location: 'London, United Kingdom',
    period: 'Jul 2023 – Sep 2023',
    achievements: [
      'Developed LangGraph ML pipeline (Python) on 100GB data, throughput +30% with secure-coding.',
      'Authored SQL analytics scripts that improve accuracy of reconciliation 30%, results adopted by the AML research team.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'SprintX',
    location: 'Lahore, Pakistan',
    period: 'Jan 2022 – Dec 2022',
    achievements: [
      'Delivered cross-platform apps with React 18 and React Query, sustaining a four star App Store rating.',
      'Orchestrated CI / CD through CircleCI + Jenkins, reducing the release lead time by 60% & enforcing the SonarQube gates.',
      'Increased unit test coverage 55 to 85% using Jest & React Testing Library, reducing production regressions 40%.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Frizhub',
    location: 'Lahore, Pakistan',
    period: 'Jan 2020 – Dec 2021',
    achievements: [
      'Integrated native modules, championing secure-coding and code-excellence, crash rate down 25%.',
      'Provisioned AWS/GCP Docker stacks with Jenkins, SonarQube, and Terraform, halving deployment time.',
    ],
  },
];
