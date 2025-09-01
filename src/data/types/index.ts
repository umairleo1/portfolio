/**
 * TypeScript type definitions for portfolio data
 * Provides type safety and IntelliSense for all data sections
 */

// Personal Information Types
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
  profileImage: string;
  objective: string;
}

export interface PersonalInterests {
  personal: string[];
  languages: string[];
}

// Professional Types
export interface SkillCategories {
  languages: string[];
  cloudAndIaC: string[];
  devOpsAndObservability: string[];
  frontEnd: string[];
  backEnd: string[];
  generativeAI: string[];
  dataAndMessaging: string[];
  testing: string[];
  security: string[];
  designAndTools: string[];
  monitoringAndAnalytics: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  specialization: string;
}

export interface Certification {
  title: string;
  issuer: string;
  link: string;
  date?: string;
}

// Project Types
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  link: string;
}

export type ProjectCategories = Record<string, string>;

// Company Types
export interface Company {
  name: string;
  logo: string;
  alt: string;
  website: string;
  skills: string[];
}

// Configuration Types
export interface NavigationItem {
  label: string;
  href: string;
}

export interface ResumeConfig {
  url: string;
  downloadUrl: string;
}

export interface SocialConfig {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
}

export interface NavigationConfig {
  items: NavigationItem[];
}

export interface AppConfig {
  resume: ResumeConfig;
  navigation: NavigationConfig;
  social: SocialConfig;
  seo: SEOConfig;
}

// Aggregate Types for Sections
export interface PersonalData {
  info: PersonalInfo;
  interests: PersonalInterests;
}

export interface ProfessionalData {
  skills: SkillCategories;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

export interface ProjectData {
  projects: Project[];
  categories: ProjectCategories;
}

export interface CompanyData {
  companies: Company[];
}

// Main Portfolio Data Type
export interface PortfolioData {
  personal: PersonalData;
  professional: ProfessionalData;
  projects: ProjectData;
  companies: CompanyData;
  config: AppConfig;
}
