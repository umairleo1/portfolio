import type { PersonalInfo } from '../types';
import { env } from '@/config/env';

/**
 * Personal information and contact details
 * Used for hero section, contact form, and SEO metadata
 * Values are sourced from environment variables for security and flexibility
 */
export const personalInfo: PersonalInfo = {
  name: env.FULL_NAME.toUpperCase(),
  title: env.PROFESSIONAL_TITLE,
  location: env.APP_LOCATION,
  phone: env.PHONE,
  email: env.EMAIL,
  linkedin: env.LINKEDIN_URL,
  github: env.GITHUB_URL,
  twitter: env.TWITTER_URL,
  profileImage: '/assets/images/profile-main.jpg',
  objective:
    'passionate about building scalable, high-performance applications and turning innovative ideas into robust software solutions.',
};
