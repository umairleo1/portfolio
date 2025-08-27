/**
 * Professional data barrel exports
 * Centralized exports for skills, experience, education, and certifications
 */

export { skills } from './skills';
export { experience } from './experience';
export { education } from './education';
export { certifications } from './certifications';

// Re-export types for convenience
export type {
  SkillCategories,
  Experience,
  Education,
  Certification,
} from '../types';
