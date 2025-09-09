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
    alternateName: ['Umair', 'Muhammad Umair', 'Umair Leo'],
    jobTitle: personalInfo.title,
    description: personalInfo.objective,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: personalInfo.location?.split(',')[0]?.trim() || 'London',
      addressCountry:
        personalInfo.location?.toLowerCase().includes('uk') ||
        personalInfo.location?.toLowerCase().includes('united kingdom')
          ? 'GB'
          : personalInfo.location?.toLowerCase().includes('us') ||
              personalInfo.location?.toLowerCase().includes('united states')
            ? 'US'
            : 'GB',
      addressRegion:
        personalInfo.location?.toLowerCase().includes('uk') ||
        personalInfo.location?.toLowerCase().includes('united kingdom')
          ? 'England'
          : personalInfo.location?.toLowerCase().includes('us') ||
              personalInfo.location?.toLowerCase().includes('united states')
            ? 'California'
            : 'England',
    },
    nationality: {
      '@type': 'Country',
      name: 'Pakistan',
    },
    url: appConfig.seo.url,
    image: {
      '@type': 'ImageObject',
      url: `${appConfig.seo.url.replace(/\/$/, '')}/assets/images/social-preview-1200x630.jpg`,
      width: 1200,
      height: 630,
    },
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
      personalInfo.twitter,
      'https://umairleo1.github.io/portfolio/',
      'https://dev.to/umairleo1',
      'https://medium.com/@umairleo17',
    ].filter(Boolean),
    knowsAbout: [
      'Full-Stack Development',
      'Cloud Architecture',
      'DevOps Engineering',
      'Data Engineering',
      ...skills.languages.slice(0, 3),
      ...skills.frontEnd.slice(0, 4),
      ...skills.backEnd.slice(0, 4),
      ...skills.cloudAndIaC.slice(0, 3),
    ].slice(0, 18),
    knowsLanguage: ['en', 'ur'],
    hasOccupation: {
      '@type': 'Occupation',
      name: personalInfo.title,
      description: `Experienced ${personalInfo.title} specializing in scalable web applications, cloud infrastructure, and enterprise software solutions with proven expertise in modern development practices.`,
      occupationLocation: {
        '@type': 'City',
        name: personalInfo.location?.split(',')[0]?.trim() || 'London',
        address: {
          '@type': 'PostalAddress',
          addressLocality:
            personalInfo.location?.split(',')[0]?.trim() || 'London',
          addressCountry:
            personalInfo.location?.toLowerCase().includes('uk') ||
            personalInfo.location?.toLowerCase().includes('united kingdom')
              ? 'GB'
              : personalInfo.location?.toLowerCase().includes('us') ||
                  personalInfo.location?.toLowerCase().includes('united states')
                ? 'US'
                : 'GB',
        },
      },
      estimatedSalary: [
        {
          '@type': 'MonetaryAmountDistribution',
          name: 'base',
          currency: 'GBP',
          duration: 'P1Y', // yearly salary
          minValue: 50000,
          maxValue: 100000,
          median: 75000,
        },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${appConfig.seo.url}#webpage`,
      },
    },
    worksFor: {
      '@type': 'Organization',
      name: experience[0]?.company || 'Open to New Opportunities',
      address: {
        '@type': 'PostalAddress',
        addressLocality:
          experience[0]?.location ||
          personalInfo.location?.split(',')[0]?.trim(),
        addressCountry:
          experience[0]?.location?.toLowerCase().includes('uk') ||
          experience[0]?.location?.toLowerCase().includes('united kingdom')
            ? 'GB'
            : experience[0]?.location?.toLowerCase().includes('us') ||
                experience[0]?.location?.toLowerCase().includes('united states')
              ? 'US'
              : 'GB',
      },
    },
    hasCredential: [
      ...education.map((edu) => ({
        '@type': 'EducationalOccupationalCredential',
        name: edu.degree,
        credentialCategory: edu.degree,
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: edu.institution,
          location: {
            '@type': 'Place',
            name: edu.location,
          },
        },
        dateCreated: (() => {
          if (!edu.period) return '2020-01-01';
          const start = edu.period.split(/\s*[–-]\s*/)[0]?.trim();
          if (!start) return '2020-01-01';
          if (start.includes(' ')) {
            const [month, year] = start.split(' ');
            if (month && year) {
              const monthNum = new Date(`${month} 1, ${year}`).getMonth() + 1;
              return `${year}-${monthNum.toString().padStart(2, '0')}-01`;
            }
          }
          return start;
        })(),
        endDate: (() => {
          if (!edu.period) return '2024-12-31';
          const parts = edu.period.split(/\s*[–-]\s*/);
          const end = parts[1]?.trim();
          if (!end || end.toLowerCase() === 'present')
            return new Date().toISOString().split('T')[0];
          if (end.includes(' ')) {
            const [month, year] = end.split(' ');
            if (month && year) {
              const monthNum = new Date(`${month} 1, ${year}`).getMonth() + 1;
              return `${year}-${monthNum.toString().padStart(2, '0')}-28`;
            }
          }
          return end;
        })(),
      })),
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Professional Software Engineering Experience',
        credentialCategory: 'Work Experience',
        description: `${personalInfo.yearsOfExperience}+ years of professional software development experience`,
      },
    ],
    makesOffer: {
      '@id': `${appConfig.seo.url}#service`,
    },
    potentialAction: {
      '@type': 'ContactAction',
      target: `mailto:${personalInfo.email}`,
      name: 'Contact Muhammad Umair for Professional Opportunities',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${appConfig.seo.url}#webpage`,
    name: appConfig.seo.title,
    description: appConfig.seo.description,
    url: appConfig.seo.url,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${appConfig.seo.url}#website`,
    },
    about: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    mainEntity: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${appConfig.seo.url}#webpage`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${appConfig.seo.url}/assets/images/social-preview-1200x630.jpg`,
      width: 1200,
      height: 630,
    },
    datePublished: '2025-08-13T00:00:00.000Z',
    dateModified: '2025-09-08T00:00:00.000Z',
    author: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    inLanguage: 'en-US',
    audience: {
      '@type': 'Audience',
      audienceType: [
        'Recruiters',
        'Hiring Managers',
        'Employers',
        'Clients',
        'Software Engineers',
        'Technology Professionals',
      ],
    },
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
    copyrightYear: 2025,
    copyrightHolder: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    mainEntity: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${appConfig.seo.url}#service`,
    name: `${personalInfo.name} - Professional Software Engineering`,
    description:
      'Enterprise-grade software development, cloud architecture, and technical consulting services',
    provider: {
      '@type': 'Person',
      '@id': `${appConfig.seo.url}#person`,
    },
    areaServed: 'Worldwide',
    serviceType: 'Software Development',
    category: 'Software Development',
    makesOffer: {
      '@type': 'Offer',
      itemOffered: [
        {
          '@type': 'Service',
          name: 'Full-Stack Development',
          description:
            'End-to-end web application development with modern frameworks and best practices',
          serviceType: 'Software Development',
        },
        {
          '@type': 'Service',
          name: 'Cloud Architecture & DevOps',
          description:
            'Scalable cloud infrastructure design and implementation with CI/CD pipelines',
          serviceType: 'Cloud Computing',
        },
        {
          '@type': 'Service',
          name: 'Technical Consulting',
          description: 'Strategic technology guidance and code review services',
          serviceType: 'Consulting',
        },
      ],
    },
  };

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
    workExample: projects.map((project, index) => ({
      '@type': 'CreativeWork',
      '@id': `${appConfig.seo.url}#project-${index}`,
      name: project.title,
      description: project.description,
      genre: 'Software Development',
      keywords: project.technologies.slice(0, 3).join(', '),
      author: {
        '@type': 'Person',
        '@id': `${appConfig.seo.url}#person`,
      },
    })),
  };

  // Consolidated Schema: Person + Education + Services
  const consolidatedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      professionalServiceSchema,
      ...education.map((edu) => ({
        '@type': 'EducationalOccupationalCredential',
        '@id': `${appConfig.seo.url}#education-${edu.institution.toLowerCase().replace(/\s+/g, '-')}`,
        name: edu.degree,
        description: edu.specialization || 'Advanced academic credential',
        credentialCategory: edu.degree,
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: edu.institution,
          address: {
            '@type': 'PostalAddress',
            addressLocality: edu.location,
          },
        },
        dateCreated: (() => {
          if (!edu.period) return '2020-01-01';
          const start = edu.period.split(/\s*[–-]\s*/)[0]?.trim();
          if (!start) return '2020-01-01';
          if (start.includes(' ')) {
            const [month, year] = start.split(' ');
            if (month && year) {
              const monthNum = new Date(`${month} 1, ${year}`).getMonth() + 1;
              return `${year}-${monthNum.toString().padStart(2, '0')}-01`;
            }
          }
          return start;
        })(),
        endDate: (() => {
          if (!edu.period) return '2024-12-31';
          const parts = edu.period.split(/\s*[–-]\s*/);
          const end = parts[1]?.trim();
          if (!end || end.toLowerCase() === 'present')
            return new Date().toISOString().split('T')[0];
          if (end.includes(' ')) {
            const [month, year] = end.split(' ');
            if (month && year) {
              const monthNum = new Date(`${month} 1, ${year}`).getMonth() + 1;
              return `${year}-${monthNum.toString().padStart(2, '0')}-28`;
            }
          }
          return end;
        })(),
      })),
      projectsSchema,
    ],
  };

  // Breadcrumb Schema for better navigation SEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: appConfig.seo.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: `${appConfig.seo.url}#projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Experience',
        item: `${appConfig.seo.url}#experience`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: `${appConfig.seo.url}#contact`,
      },
    ],
  };

  // FAQ Schema for better search visibility
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What technical expertise does Muhammad Umair offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${personalInfo.name} is a seasoned ${personalInfo.title} with expertise in ${skills.frontEnd.slice(0, 3).join(', ')}, ${skills.backEnd.slice(0, 3).join(', ')}, and cloud technologies. He specializes in building scalable applications and modern development practices.`,
        },
      },
      {
        '@type': 'Question',
        name: "What is Muhammad Umair's professional background?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${personalInfo.name} brings ${personalInfo.yearsOfExperience}+ years of professional software engineering experience at leading organizations. His track record includes optimizing system performance and implementing robust data solutions with proven results.`,
        },
      },
      {
        '@type': 'Question',
        name: 'How can I engage Muhammad Umair for professional services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `For professional inquiries, contact ${personalInfo.name} directly at ${personalInfo.email} or connect via LinkedIn for comprehensive software engineering solutions.`,
        },
      },
    ],
  };

  return (
    <Helmet>
      {/* Consolidated Schema: Person + Education + Services + Projects */}
      <script type='application/ld+json'>
        {JSON.stringify(consolidatedSchema)}
      </script>
      {/* Separate schemas for better organization */}
      <script type='application/ld+json'>
        {JSON.stringify(webPageSchema)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(websiteSchema)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default StructuredData;
