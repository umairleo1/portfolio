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
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${appConfig.seo.url}#person`,
    name: personalInfo.name,
    alternateName: ['Umair', personalInfo.name.split(' ')[1]],
    jobTitle: personalInfo.title,
    description: personalInfo.objective,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personalInfo.location?.split(',')[0]?.trim() || 'London',
      addressCountry: personalInfo.location?.includes('UK') ? 'GB' : 'US',
      addressRegion: personalInfo.location?.includes('UK')
        ? 'England'
        : 'California',
    },
    nationality: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    url: appConfig.seo.url,
    image: {
      '@type': 'ImageObject',
      url: `${appConfig.seo.url}/assets/images/social-preview-1200x630.jpg`,
      width: 1200,
      height: 630,
    },
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
      personalInfo.twitter,
    ].filter(Boolean),
    knowsAbout: [
      ...skills.languages,
      ...skills.frontEnd,
      ...skills.backEnd,
      ...skills.cloudAndIaC,
    ].slice(0, 15),
    knowsLanguage: ['en', 'ur'],
    worksFor: {
      '@type': 'Organization',
      name: experience[0]?.company || 'Freelance Software Engineer',
    },
    hasCredential: education.map((edu) => ({
      '@type': 'EducationalOccupationalCredential',
      name: edu.degree,
      educationalCredentialAwarded: edu.degree,
      recognizedBy: {
        '@type': 'EducationalOrganization',
        name: edu.institution,
      },
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${appConfig.seo.url}#website`,
    name: appConfig.seo.title,
    alternateName: `${personalInfo.name} Portfolio`,
    description: appConfig.seo.description,
    url: appConfig.seo.url,
    author: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    mainEntity: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${appConfig.seo.url}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
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

  const workExperienceSchema = experience.slice(0, 2).map((exp, index) => ({
    '@context': 'https://schema.org',
    '@type': 'WorkRole',
    '@id': `${appConfig.seo.url}#work-${index}`,
    name: exp.title,
    description: exp.achievements.slice(0, 3).join(' '),
    employer: {
      '@type': 'Organization',
      name: exp.company,
      address: {
        '@type': 'PostalAddress',
        addressLocality: exp.location,
      },
    },
    location: exp.location,
    startDate: exp.period.split(' - ')[0],
    endDate: exp.period.includes('Present')
      ? new Date().toISOString().split('T')[0]
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

  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${appConfig.seo.url}#portfolio`,
    name: 'Software Development Portfolio',
    description: 'Collection of professional software development projects',
    creator: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    workExample: projects.slice(0, 3).map((project, index) => ({
      '@type': 'SoftwareApplication',
      '@id': `${appConfig.seo.url}#project-${index}`,
      name: project.title,
      description: project.description,
      applicationCategory: 'WebApplication',
      programmingLanguage: project.technologies.slice(0, 3),
      author: {
        '@type': 'Person',
        '@id': `${appConfig.seo.url}#person`,
      },
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
