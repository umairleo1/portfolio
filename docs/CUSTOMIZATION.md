# Customization Guide

Complete guide to personalizing the portfolio for your own use.

## Personal Information

Update your details in the data files located in `src/data/`:

### 1. Personal Information

Edit `src/data/personal/info.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'YOUR NAME',
  title: 'Your Job Title',
  email: 'your.email@example.com',
  phone: '+1234567890',
  location: 'Your City, Your Country',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
  profileImage: '/assets/images/profile-main.jpg',
  objective: 'Your professional objective statement.',
};
```

### 2. Application Configuration

Edit `src/data/config/app.ts`:

```typescript
export const appConfig: AppConfig = {
  seo: {
    title: process.env.REACT_APP_SITE_NAME || 'Your Name - Your Title',
    url: process.env.REACT_APP_SITE_URL || 'https://yoursite.com',
    domain: process.env.REACT_APP_SITE_DOMAIN || 'yoursite.com',
    description: 'Your professional description...',
    keywords: ['Your Skills', 'Your Expertise', 'Your Location'],
  },
  // ... other config
};
```

### 3. Application Constants

Edit `src/lib/constants/index.ts` for app-wide constants:

**App Configuration:**

```typescript
export const APP_CONFIG = {
  NAME: 'Your Portfolio Name',
  DESCRIPTION: 'Your portfolio description',
  VERSION: '1.0.0',
  AUTHOR: 'Your Name',
} as const;
```

**Animation Settings:**

```typescript
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 0.2, // Quick transitions
    NORMAL: 0.3, // Default speed
    SLOW: 0.5, // Slow animations
  },
  EASING: {
    DEFAULT: [0.4, 0, 0.2, 1], // Standard easing
    BOUNCE: [0.68, -0.55, 0.265, 1.55], // Bouncy effect
  },
} as const;
```

**Responsive Breakpoints:**

```typescript
export const BREAKPOINTS = {
  SM: 640,   // Small devices
  MD: 768,   // Medium devices
  LG: 1024,  # Large devices
  XL: 1280,  # Extra large devices
  '2XL': 1536, # 2X large devices
} as const;
```

**Asset Path Utilities:**

```typescript
// Located in src/lib/constants/paths.ts
export const getAssetPath = (path: string) => {
  return `${process.env.PUBLIC_URL || ''}${path}`;
};

export const ASSET_PATHS = {
  PROFILE_MAIN: getAssetPath('/assets/images/profile-main.jpg'),
  PROFILE_FALLBACK: getAssetPath('/assets/images/profile-fallback.jpg'),
  FAVICON_ICO: getAssetPath('/assets/favicons/favicon.ico'),
  FAVICON_SVG: getAssetPath('/assets/favicons/favicon.svg'),
} as const;
```

```typescript
export const appConfig: AppConfig = {
  resume: {
    url: 'https://your-resume-link.com',
    downloadUrl: '/resume.pdf',
  },
  navigation: {
    items: [
      { label: 'skills', href: '#skills' },
      { label: 'education', href: '#education' },
      { label: 'projects', href: '#projects' },
      { label: 'experience', href: '#experience' },
      { label: 'contact', href: '#contact' },
    ],
  },
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourusername',
    email: 'your.email@example.com',
  },
  seo: {
    title: 'Your Name - Your Title',
    description: 'Your professional description for SEO',
    keywords: ['Your', 'Professional', 'Keywords'],
  },
};
```

## Professional Content

### 3. Technical Skills

Edit `src/data/professional/skills.ts` to update your technical expertise:

- Frontend technologies
- Backend technologies
- Cloud and Infrastructure
- DevOps and Observability
- Data and Messaging
- AI and Machine Learning
- Security tools

### 4. Work Experience

Update `src/data/professional/experience.ts` with your career history:

```typescript
export const experience: Experience[] = [
  {
    company: 'Company Name',
    position: 'Your Position',
    startDate: 'Month Year',
    endDate: 'Month Year', // or 'Present'
    location: 'City, Country',
    responsibilities: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3'],
  },
];
```

### 5. Education & Certifications

Update `src/data/professional/education.ts` with your academic background.

### 6. Projects

Edit `src/data/projects/projects.ts` to showcase your work:

```typescript
export const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'Brief description of the project',
    technologies: ['React', 'TypeScript', 'Node.js'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
];
```

## Visual Assets

### 7. Images

Replace these files with your own:

- `public/assets/images/profile-main.jpg` - Main profile photo
- `public/assets/images/profile-fallback.jpg` - Fallback image
- `public/assets/images/work/` - Company logos

### 8. Resume

Add your resume as `public/resume.pdf`

## Contact Strategy

The portfolio uses a clean, professional contact approach:

- **Dedicated Contact Section** - Professional contact form with analytics
- **Footer Social Links** - LinkedIn, GitHub, Twitter (email removed for cleaner design)
- **Header Resume Link** - Direct access to CV/resume

## Styling & Theming

### Color Scheme

The portfolio uses a centralized theme system in `src/styles/base/globals.css`:

- Primary colors
- Accent colors
- Background gradients
- Typography scales
- Animation timings

### Component Styles

- Each component uses CSS Modules for scoped styling
- Consistent naming conventions
- Responsive design patterns
- Professional color palette

## Performance Optimization

The application includes several performance optimizations:

- Code splitting and lazy loading
- Image optimization
- Bundle size optimization
- CSS optimization
- Analytics performance monitoring

## Deployment Configuration

### GitHub Pages

The repository includes GitHub Actions for automated deployment:

1. Configure repository secrets (see SETUP.md)
2. Push to main branch
3. Automatic build and deployment

### Custom Domain

To use a custom domain:

1. Add `CNAME` file to `public/` folder
2. Update `package.json` homepage field
3. Configure DNS settings

## Additional Documentation

- **[`../README.md`](../README.md)** - Project overview and quick start
- **[`SETUP.md`](SETUP.md)** - Complete installation and configuration guide
- **[`ANALYTICS.md`](ANALYTICS.md)** - Analytics integration and business insights
- **[`CODE_QUALITY.md`](CODE_QUALITY.md)** - Code quality automation and standards
- **[`../.github/CICD.md`](../.github/CICD.md)** - CI/CD pipeline and deployment automation
- **[`../CONTRIBUTING.md`](../CONTRIBUTING.md)** - Development and contribution guidelines
- **[`../SECURITY.md`](../SECURITY.md)** - Security policy and vulnerability reporting
