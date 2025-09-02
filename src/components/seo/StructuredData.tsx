import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  personalInfo,
  experience,
  skills,
  projects,
  education,
  appConfig,
} from '@/data';

const StructuredData: React.FC = () => {
  // Person Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.objective,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'UK',
    },
    url: appConfig.seo.url,
    image: `${appConfig.seo.url}/assets/profile.jpg`,
    sameAs: [personalInfo.linkedin, personalInfo.github, personalInfo.twitter],
    knowsAbout: [
      ...skills.languages,
      ...skills.frontEnd,
      ...skills.backEnd,
      ...skills.cloudAndIaC,
    ].slice(0, 20), // Limit to prevent bloat
    worksFor: {
      '@type': 'Organization',
      name: experience[0]?.company || 'Software Engineer',
    },
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Muhammad Umair Portfolio',
    description:
      'Professional portfolio showcasing software engineering expertise',
    url: appConfig.seo.url,
    author: {
      '@type': 'Person',
      name: personalInfo.name,
    },
    inLanguage: 'en',
    copyrightYear: new Date().getFullYear(),
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${personalInfo.name} - Software Engineering Services`,
    description: 'Professional software development and engineering services',
    address: {
      '@type': 'PostalAddress',
      addressLocality: personalInfo.location?.split(',')[0]?.trim() || 'London',
      addressCountry: personalInfo.location?.includes('UK') ? 'GB' : 'US',
    },
    provider: {
      '@type': 'Person',
      name: personalInfo.name,
      jobTitle: personalInfo.title,
    },
    areaServed: 'Worldwide',
    serviceType: 'Software Development',
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Software Engineering Consultation',
        description:
          'Full-stack development, cloud architecture, and technical consulting',
      },
    },
  };

  // Work Experience Schema
  const workExperienceSchema = experience.slice(0, 3).map((exp) => ({
    '@context': 'https://schema.org',
    '@type': 'WorkRole',
    name: exp.title,
    description: exp.achievements.join(' '),
    employer: {
      '@type': 'Organization',
      name: exp.company,
    },
    location: exp.location,
    startDate: exp.period.split(' - ')[0],
    endDate: exp.period.includes('Present')
      ? new Date().getFullYear().toString()
      : exp.period.split(' - ')[1],
  }));

  // Education Schema
  const educationSchema = education.map((edu) => ({
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: edu.degree,
    description: edu.specialization,
    educationalCredentialAwarded: edu.degree,
    provider: {
      '@type': 'EducationalOrganization',
      name: edu.institution,
      address: {
        '@type': 'PostalAddress',
        addressLocality: edu.location,
      },
    },
  }));

  // Portfolio Projects Schema
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Software Development Portfolio',
    creator: {
      '@type': 'Person',
      name: personalInfo.name,
    },
    workExample: projects.slice(0, 5).map((project) => ({
      '@type': 'SoftwareApplication',
      name: project.title,
      description: project.description,
      applicationCategory: 'Web Application',
      programmingLanguage: project.technologies.slice(0, 5),
    })),
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(personSchema)}</script>
      <script type='application/ld+json'>
        {JSON.stringify(websiteSchema)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(professionalServiceSchema)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(projectsSchema)}
      </script>
      {workExperienceSchema.map((work, index) => (
        <script key={`work-${index}`} type='application/ld+json'>
          {JSON.stringify(work)}
        </script>
      ))}
      {educationSchema.map((edu, index) => (
        <script key={`edu-${index}`} type='application/ld+json'>
          {JSON.stringify(edu)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;
