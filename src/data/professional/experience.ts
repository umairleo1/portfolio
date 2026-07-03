import type { Experience } from '../types';

/**
 * Professional work experience
 * Used in experience section and timeline component
 */
export const experience: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'NIHR IO at Newcastle University',
    location: 'Newcastle, United Kingdom',
    period: 'May 2026 – Present',
    achievements: ['Currently Achieving'],
  },
  {
    title: 'Data Integrations Developer',
    company: 'UNICEF UK',
    location: 'London, United Kingdom',
    period: 'Feb 2025 – Aug 2025',
    achievements: [
      'Built GitLab CI gated Salesforce to Snowflake ETL (Python, SQL, AWS Lambda), cutting nightly load time 45%.',
      'Optimized SQL (CTEs, window functions) to reconcile 5M rows with 99.8% accuracy and zero critical Sonar findings.',
    ],
  },
  {
    title: 'Software Developer AI',
    company: 'University of Greenwich',
    location: 'London, United Kingdom',
    period: 'Jul 2023 – Jan 2025',
    achievements: [
      'Developed LangGraph ML pipeline (Python) on 100GB data, throughput +30% with secure-coding.',
      'Authored SQL analytics scripts that improve accuracy of reconciliation 30%, results adopted by the AML research team.',
    ],
  },
  {
    title: 'AI Software Engineer',
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
    title: 'AI Software Engineer',
    company: 'Frizhub',
    location: 'Lahore, Pakistan',
    period: 'Jan 2020 – Dec 2021',
    achievements: [
      'Integrated native modules, championing secure-coding and code-excellence, crash rate down 25%.',
      'Provisioned AWS/GCP Docker stacks with Jenkins, SonarQube, and Terraform, halving deployment time.',
    ],
  },
];
