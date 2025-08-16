export const personalInfo = {
  name: "MUHAMMAD UMAIR",
  title: "Software Engineer",
  location: "London, United Kingdom",
  phone: "+44 77 63836505",
  email: "umair.leo17@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-umair-amin/",
  github: "https://github.com/umairleo1",
  twitter: "https://x.com/UmairLeo7",
  objective: "Software engineer with extensive experience in Python, React (+ React Query) and AWS/Terraform, eager to build Barclays' Application Health Analytics platform. Proven at turning telemetry into insight, enforcing GitLab CI/SonarQube quality gates and delivering secure, high throughput micro-services that elevate reliability and user experience."
};

export const skills = {
  languages: ["Python", "JavaScript / TypeScript", "SQL", "Java"],
  cloudAndIaC: ["AWS (ECS, Lambda, RDS, CloudWatch)", "Terraform", "CloudFormation", "OpenShift"],
  devOpsAndObservability: ["GitLab CI/CD", "GitHub Actions", "Docker", "SonarQube", "Nexus", "Prometheus", "Grafana"],
  frontEnd: ["React 18+", "React Query", "Redux Toolkit", "Context API"],
  backEnd: ["Python (FastAPI, Flask)", "Java (Spring Boot)", "Node.js / Express"],
  generativeAI: ["LangGraph", "LangChain", "OpenAI API", "Hugging Face Transformers"],
  dataAndMessaging: ["REST", "GraphQL", "Kafka", "Kinesis"],
  testing: ["Pytest", "Jest", "React Testing Library", "JUnit", "Cypress (E2E)"],
  security: ["OAuth 2.0", "AWS Cognito", "Secure-coding (OWASP Top-10)"]
};

export const education = [
  {
    degree: "MSc Data Science",
    institution: "University of Greenwich",
    location: "London, United Kingdom",
    period: "Jan 2023 – Jan 2024",
    specialization: "Specialized in Anti Money Laundering Technologies, Big Data, Data Visualization, and Applied Machine Learning."
  },
  {
    degree: "BSc Computer Science",
    institution: "University of Management and Technology",
    location: "Lahore, Pakistan",
    period: "Sep 2016 - Sep 2020",
    specialization: "Concentrated on Mobile Application Development, Advanced Web Technologies, Artificial Intelligence, and Machine Learning."
  }
];

export const experience = [
  {
    title: "Data Integrations Developer",
    company: "UNICEF UK",
    location: "London, United Kingdom",
    period: "Feb 2025 – Current",
    achievements: [
      "Built GitLab CI gated Salesforce to Snowflake ETL (Python, SQL, AWS Lambda), cutting nightly load time 45%.",
      "Optimized SQL (CTEs, window functions) to reconcile 5M rows with 99.8% accuracy and zero critical Sonar findings."
    ]
  },
  {
    title: "Software Developer – Data Mining",
    company: "University of Greenwich",
    location: "London, United Kingdom",
    period: "Jul 2023 – Sep 2023",
    achievements: [
      "Developed LangGraph ML pipeline (Python) on 100GB data, throughput +30% with secure-coding.",
      "Authored SQL analytics scripts that improve accuracy of reconciliation 30%, results adopted by the AML research team."
    ]
  },
  {
    title: "Software Engineer",
    company: "SprintX",
    location: "Lahore, Pakistan",
    period: "Jan 2022 – Dec 2022",
    achievements: [
      "Delivered cross-platform apps with React 18 and React Query, sustaining a four star App Store rating.",
      "Orchestrated CI / CD through CircleCI + Jenkins, reducing the release lead time by 60% & enforcing the SonarQube gates.",
      "Increased unit test coverage 55 to 85% using Jest & React Testing Library, reducing production regressions 40%."
    ]
  },
  {
    title: "Software Engineer",
    company: "Frizhub",
    location: "Lahore, Pakistan",
    period: "Jan 2020 – Dec 2021",
    achievements: [
      "Integrated native modules, championing secure-coding and code-excellence, crash rate down 25%.",
      "Provisioned AWS/GCP Docker stacks with Jenkins, SonarQube, and Terraform, halving deployment time."
    ]
  }
];

export const projects = [
  {
    title: "BioMark",
    description: "Developed a healthcare platform on React + React Query and FastAPI, using Terraform to provision ECS, Lambda and CloudWatch dashboards that surface real time patient telemetry and predictive analytics insights.",
    technologies: ["MERN", "Python/FastAPI", "AWS + Terraform", "GitLab CI"],
    achievements: [
      "Established GitLab CI pipelines with SonarQube quality gates, trimming release defects 30% and cutting deployment time from 90 min to under 20 min."
    ],
    link: "[App Link]"
  },
  {
    title: "LetzChat Real Time Translator",
    description: "Co-built AI-driven subtitle & website translation engine that renders live streams and sites in 104 languages for partners such as Comcast SportsTech, delivering sub second latency and global audience reach.",
    technologies: ["Python", "React", "Kafka", "AWS + Terraform"],
    achievements: [
      "Codified AWS infrastructure in Terraform with GitLab CI / SonarQube gates and CloudWatch→Grafana health dashboards, sustaining 99.9% uptime while cutting localisation spend 80%."
    ],
    link: "[App Link]"
  },
  {
    title: "Desert Sign Trading LLC",
    description: "Designed and developed dual mobile applications for a seamless advertising and printing service experience, facilitating online product orders and consignment management.",
    technologies: ["MERN Stack", "AWS", "Twilio"],
    achievements: [
      "Integrated Twilio's communication services to streamline interactions between customers and the company, improving service responsiveness and customer satisfaction."
    ],
    link: "[App Link]"
  },
  {
    title: "Vincere Health",
    description: "Built an innovative health app focusing on tobacco cessation, combining user-friendly interfaces with smart technology to track and support user progress.",
    technologies: ["MERN Stack", "AWS", "JavaScript"],
    achievements: [
      "Utilized AWS for backend infrastructure, ensuring scalable and reliable service delivery, and implemented advanced JavaScript solutions for real-time data processing."
    ],
    link: "[App Link]"
  },
  {
    title: "London Riders (PCO car hire and rent)",
    description: "Developed a comprehensive car rental and hire platform, integrating geolocation services for efficient user navigation and real-time car tracking.",
    technologies: ["MERN Stack", "AWS", "Geolocation"],
    achievements: [
      "Implemented a seamless booking system and user management features, optimizing the rental process and enhancing the overall customer experience."
    ],
    link: "[App Link]"
  },
  {
    title: "Path Signals",
    description: "Created a cryptocurrency investment platform, enabling users to subscribe to different trading strategies and apply profit trend filters for optimized investment decisions.",
    technologies: ["MERN Stack", "AWS", "Binance", "Coinbase", "Kraken"],
    achievements: [
      "Integrated major cryptocurrency exchange APIs (Binance, Coinbase, Kraken), providing users with a secure and diverse trading environment."
    ],
    link: ""
  }
];

export const certifications = [
  {
    title: "Advanced Learning Algorithms",
    issuer: "Coursera",
    link: "View Certificate"
  },
  {
    title: "Developer of the Month Award",
    issuer: "SprintX",
    date: "September, 2022",
    link: "View Award"
  },
  {
    title: "Team of the Month Award",
    issuer: "SprintX",
    date: "October, 2022",
    link: "View Award"
  }
];

export const interests = {
  personal: ["Sustainable Technology", "AI Applications", "eSports", "Travelling"],
  languages: ["English", "Chinese (HSK 1)", "Urdu", "Punjabi"]
};