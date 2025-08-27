/**
 * Portfolio Data - Main Barrel Export
 *
 * Centralized export for all portfolio data with professional organization
 *
 * Structure:
 * - personal/     - Personal information and interests
 * - professional/ - Skills, experience, education, certifications
 * - projects/     - Portfolio projects and categorization
 * - companies/    - Company information and logos
 * - config/       - Application configuration and settings
 * - types/        - TypeScript type definitions
 *
 * Usage:
 * import { personalInfo, skills, projects } from '@/data';
 * import { PersonalInfo, SkillCategories } from '@/data/types';
 */

// Personal Data Exports
export {
  personalInfo,
  interests,
  type PersonalInfo,
  type PersonalInterests,
} from './personal';

// Professional Data Exports
export {
  skills,
  experience,
  education,
  certifications,
  type SkillCategories,
  type Experience,
  type Education,
  type Certification,
} from './professional';

// Projects Data Exports
export {
  projects,
  projectCategories,
  type Project,
  type ProjectCategories,
} from './projects';

// Companies Data Exports
export { companies, type Company } from './companies';

// Configuration Exports
export {
  appConfig,
  type AppConfig,
  type NavigationItem,
  type ResumeConfig,
  type SocialConfig,
  type SEOConfig,
  type NavigationConfig,
} from './config';

// Re-export all types for convenience
export * from './types';
