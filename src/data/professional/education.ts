import type { Education } from '../types';

/**
 * Educational background and academic achievements
 * Used in education section and qualification displays
 */
export const education: Education[] = [
  {
    degree: 'MSc Data Science',
    level: "MASTER'S",
    institution: 'University of Greenwich',
    location: 'London, United Kingdom',
    period: 'Jan 2023 – Jan 2024',
    specialization:
      'Specialized in Anti Money Laundering Technologies, Big Data, Data Visualization, and Applied Machine Learning.',
    skills: [
      'Machine Learning',
      'Data Visualization',
      'Big Data',
      'Anti Money Laundering',
      'Python',
      'R',
    ],
  },
  {
    degree: 'BSc Computer Science',
    level: "BACHELOR'S",
    institution: 'University of Management and Technology',
    location: 'Lahore, Pakistan',
    period: 'Sep 2016 - Sep 2020',
    specialization:
      'Concentrated on Mobile Application Development, Advanced Web Technologies, Artificial Intelligence, and Machine Learning.',
    skills: [
      'Mobile Development',
      'Web Technologies',
      'Artificial Intelligence',
      'Software Engineering',
      'Java',
      'JavaScript',
    ],
  },
];
