import type { PersonalInfo } from '../types';
import { experience } from '../professional/experience';

// Calculate actual years of experience from work periods
const calculateExperience = () => {
  const currentDate = new Date();
  let totalMonths = 0;

  experience.forEach((job) => {
    const parts = job.period.split(' – ');
    const start = parts[0]?.trim();
    const end = parts[1]?.trim();

    if (!start) return;

    const startDate = new Date(start);
    const endDate = end === 'Present' || !end ? currentDate : new Date(end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return;

    const diffTime = endDate.getTime() - startDate.getTime();
    const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30.44); // Average days per month
    totalMonths += diffMonths;
  });

  return Math.floor(totalMonths / 12);
};

/**
 * Personal information and contact details
 * Used for hero section, contact form, and SEO metadata
 * Public information that's displayed on the portfolio website
 */
export const personalInfo: PersonalInfo = {
  name: 'Muhammad Umair',
  title: 'AI Software Engineer',
  location: 'London, United Kingdom',
  phone: '+44 77 63836505',
  email: 'umair.leo17@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-umair-amin/',
  github: 'https://github.com/umairleo1',
  twitter: 'https://x.com/UmairLeo7',
  profileImage: '/assets/images/profile-main.jpg',
  objective:
    'Passionate about building scalable, high-performance applications and turning innovative ideas into robust software solutions.',
  yearsOfExperience: calculateExperience(),
};
