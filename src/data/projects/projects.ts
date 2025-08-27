import type { Project } from '../types';

/**
 * Portfolio projects and personal developments
 * Used in work section and project showcases
 */
export const projects: Project[] = [
  {
    title: 'BioMark',
    description:
      'Developed a healthcare platform on React + React Query and FastAPI, using Terraform to provision ECS, Lambda and CloudWatch dashboards that surface real time patient telemetry and predictive analytics insights.',
    technologies: ['MERN', 'Python/FastAPI', 'AWS + Terraform', 'GitLab CI'],
    achievements: [
      'Established GitLab CI pipelines with SonarQube quality gates, trimming release defects 30% and cutting deployment time from 90 min to under 20 min.',
    ],
    link: '',
  },
  {
    title: 'LetzChat Real Time Translator',
    description:
      'Co-built AI-driven subtitle & website translation engine that renders live streams and sites in 104 languages for partners such as Comcast SportsTech, delivering sub second latency and global audience reach.',
    technologies: ['Python', 'React', 'Kafka', 'AWS + Terraform'],
    achievements: [
      'Codified AWS infrastructure in Terraform with GitLab CI / SonarQube gates and CloudWatch→Grafana health dashboards, sustaining 99.9% uptime while cutting localisation spend 80%.',
    ],
    link: '',
  },
  {
    title: 'Desert Sign Trading LLC',
    description:
      'Designed and developed dual mobile applications for a seamless advertising and printing service experience, facilitating online product orders and consignment management.',
    technologies: ['MERN Stack', 'AWS', 'Twilio'],
    achievements: [
      "Integrated Twilio's communication services to streamline interactions between customers and the company, improving service responsiveness and customer satisfaction.",
    ],
    link: '',
  },
  {
    title: 'Vincere Health',
    description:
      'Built an innovative health app focusing on tobacco cessation, combining user-friendly interfaces with smart technology to track and support user progress.',
    technologies: ['MERN Stack', 'AWS', 'JavaScript'],
    achievements: [
      'Utilized AWS for backend infrastructure, ensuring scalable and reliable service delivery, and implemented advanced JavaScript solutions for real-time data processing.',
    ],
    link: '',
  },
  {
    title: 'London Riders (PCO car hire and rent)',
    description:
      'Developed a comprehensive car rental and hire platform, integrating geolocation services for efficient user navigation and real-time car tracking.',
    technologies: ['MERN Stack', 'AWS', 'Geolocation'],
    achievements: [
      'Implemented a seamless booking system and user management features, optimizing the rental process and enhancing the overall customer experience.',
    ],
    link: '',
  },
  {
    title: 'Path Signals',
    description:
      'Created a cryptocurrency investment platform, enabling users to subscribe to different trading strategies and apply profit trend filters for optimized investment decisions.',
    technologies: ['MERN Stack', 'AWS', 'Binance', 'Coinbase', 'Kraken'],
    achievements: [
      'Integrated major cryptocurrency exchange APIs (Binance, Coinbase, Kraken), providing users with a secure and diverse trading environment.',
    ],
    link: '',
  },
];
