import type { Company } from '../types';

/**
 * Company information with logos and associated skills
 * Used in logo scroll component and experience section
 */
export const companies: Company[] = [
  {
    name: 'UNICEF UK',
    logo: '/assets/images/work/unicef-uk.png',
    alt: 'UNICEF UK Logo',
    website: 'https://www.unicef.org.uk',
    skills: [
      'Python',
      'SQL',
      'AWS Lambda',
      'Salesforce',
      'Snowflake',
      'GitLab CI',
    ],
  },
  {
    name: 'University of Greenwich',
    logo: '/assets/images/work/university-of-greenwich.png',
    alt: 'University of Greenwich Logo',
    website: 'https://www.gre.ac.uk',
    skills: ['Python', 'LangGraph', 'Machine Learning', 'SQL', 'Data Mining'],
  },
  {
    name: 'SprintX',
    logo: '/assets/images/work/sprintx.png',
    alt: 'SprintX Logo',
    website: 'https://www.sprintx.net',
    skills: [
      'React 18',
      'React Query',
      'CircleCI',
      'Jenkins',
      'SonarQube',
      'Jest',
    ],
  },
  {
    name: 'Frizhub',
    logo: '/assets/images/work/frizhub.png',
    alt: 'Frizhub Logo',
    website: 'https://www.frizhub.com',
    skills: ['React Native', 'AWS', 'GCP', 'Docker', 'Jenkins', 'Terraform'],
  },
];
