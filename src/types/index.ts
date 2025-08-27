export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  objective: string;
}

export interface Skills {
  languages: string[];
  cloudAndIaC: string[];
  devOpsAndObservability: string[];
  frontEnd: string[];
  backEnd: string[];
  generativeAI: string[];
  dataAndMessaging: string[];
  testing: string[];
  security: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  specialization: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  link: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  link: string;
}

export interface Interests {
  personal: string[];
  languages: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export type IconType = React.ComponentType<any>;
