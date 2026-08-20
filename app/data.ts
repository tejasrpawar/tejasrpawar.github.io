type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  technologies: string[]
  features: string[]
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  logo: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Education = {
  institution: string
  degree: string
  field: string
  start: string
  end: string
  gpa: string
  link: string
  id: string
  logo: string
  courses: string[]
}

type Certification = {
  name: string
  issuer: string
  date: string
  link: string
  id: string
  description: string
}

export const PROJECTS: Project[] = [
  {
    name: 'CapsNet',
    description: 'bird classification with Capsule Network',
    link: 'https://github.com/tejasrpawar/Classification-with-CapsNet',
    video: '/sem_project_report.pdf',
    id: 'project1',
    technologies: [
      'Python3',
      'High Performance Computing'
    ],
    features: [
      'An advanced classification system for 200 species of birds, using a Capsule Network (CapsNet) expanding a preexisting CNN. Improved accuracy by leveraging CapsNet\'s ability to recognize spatial hierarchies, relationships'
    ]
  },
  {
    name: 'LinkMap',
    description: 'linkedIn interactive connections visualizer',
    link: 'https://tejasrpawar.github.io/LinkMap/linkedin_network_viz/index.html',
    video: '',
    id: 'project2',
    technologies: [
      'Python3',
      'JavaScript',
      'D3.js',
      'HTML'
    ],
    features: [
      'An interactive network visualization, inspired by muskmap using D3.js force-directed graphs and Python to parse LinkedIn connections; mapping nodes to reveal professional clusters. Employed zoom-to-cluster functionality'
    ]
  },
  {
    name: 'Aero-Flow',
    description: 'high speed data streaming',
    link: 'https://github.com/tejasrpawar/Apache-kafka-and-mongoDB',
    video: '',
    id: 'project3',
    technologies: [
      'Apache Kafka',
      'MongoDB',
      'Java Spring Boot',
    ],
    features: [
      'A high-throughput, low-latency Java Spring Boot microservice. Streams data via Apache Kafka optimizing the production to consumption flow. Used MongoDB for data persistence and Aerospike for fast lookups.'
    ]
  },
  {
    name: 'ModernStack-ETL',
    description: 'a modern ETL pipeline',
    link: 'https://github.com/tejasrpawar/ModernStack-ETL',
    video: '',
    id: 'project4',
    technologies: [
      'Apache Airflow',
      'Snowflake',
      'dbt core',
      'Astronomer'
    ],
    features: [
      'An ETL pipeline using dbt, Snowflake, and Apache Airflow. Transforms raw data into analytics-ready fact and dimension tables, automating data transformation, testing, and orchestration for scalable, high-quality insights'
    ]
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Amazon Web Services',
    title: 'Software Dev Engineer',
    start: 'August 2025',
    end: 'present',
    link: '',
    id: 'work1',
    logo: '/images/logos/aws_logo.webp',
    description: '',
    responsibilities: [
      'Designed and launched an action execution service for Quick Suite\'s AI agents from scratch to GA in 5 months as sole owner, built on Lambda, Smithy, and CDK across 7 production regions.',
      'Scaled the platform 300x (100 to 30,000 TPS) ahead of launch: authored the load-test design with a Principal Engineer, resolved 10+ bottlenecks across DynamoDB caching, ECS fleet scaling, and throttle tuning, and uncovered a latent critical cryptographic offloading failure fixed across 5 services.',
      'Shipped 20+ agent connectors (Google Drive, OneDrive, SharePoint, Zoom, Microsoft Teams) and MCP integrations, enabling tool calling for hundreds of thousands of users; automated connector onboarding, cutting partner integration from 2 weeks to under 1 day.',
      'Delivered a connector version-upgrade system with Step Functions rollout safety gates and SNS-driven automation, migrating 500+ live customer connections across all 7 regions with zero downtime.',
      'Owned production reliability: eliminated 115,000+ daily errors in the Quick Suite Webcrawler (80% fewer customer escalations), built an AI-driven anomaly detection framework with Amazon Bedrock, cutting manual on-call triage by 20%, and resolved 10+ recurring weekly high-severity issues.'
      ],
    technologies: [
      'AWS',
      'Java',
      'ECS',
      'Lambda',
      'GenAI',
      'Amazon Bedrock'
    ]
  },
  {
    company: 'Goldman Sachs',
    title: 'Software Engineer II (Associate)',
    start: 'May 2025',
    end: 'August 2025',
    link: '',
    id: 'work2',
    logo: '/images/logos/gs_logo.png',
    description: '',
    responsibilities: [
      'Engineered an eventually consistent distributed system for multi-million USD trade automation in equity risk management using Java, React, and Kafka Streams, optimizing high-throughput multithreaded workflows for data integrity.'
      ],
    technologies: [
      'Java',
      'React',
      'Kafka Streams'
    ]
  },
  {
    company: 'Airtel Digital',
    title: 'Software Engineer - Full Stack',
    start: 'Jul 2021',
    end: 'Jul 2023',
    link: 'https://airtel.in',
    id: 'work3',
    logo: '/images/logos/airtel_logo.png',
    description: '',
    responsibilities: [
      'Led backend modernization using Docker, Kafka, and scalable data pipelines, improving API response times by 40% and driving 15% higher user engagement across Airtel\'s digital platform.',
      'Built a lead delivery system end-to-end and revamped infrastructure with Aerospike and Terraform, cutting lead transfer time by 50%, reducing latency by 30%, and improving uptime by 20%.',
      'Spearheaded identification, onboarding, and integration of 100+ partner products and services into Airtel\'s Digital Store catalog with 10+ external partners, increasing customer acquisition by 20%.',
      'Developed RESTful APIs in Java Spring Boot microservices with MongoDB and real-time ELK Stack monitoring, achieving 95% test coverage, 99.9% uptime, and 25% fewer order failures.'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Node.js',
      'React',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'Kubernetes'
    ]
  },
  {
    company: 'Airtel Digital',
    title: 'Software Engineering Intern',
    start: 'Jan 2021',
    end: 'Jul 2021',
    link: 'https://airtel.in',
    id: 'work4',
    logo: '/images/logos/airtel_logo.png',
    description: '',
    responsibilities: [
      'Planned and programmed a self-serve tool using Java Spring Boot and containerized the application with Docker, which streamlined third-party integration with Airtel Digital Store and reduced integration time by over 50%',
      'Engineered and optimized scalable RESTful APIs using MongoDB to manage traffic distribution, resulting in a 25% reduction in order failures and 99.9% uptime, which improved user experience and reliability across the system',
      'Designed and implemented real-time monitoring and logging solutions using Java and the ELK stack, helping detect issues early and reduce system downtime, which improved overall system stability by over 30%'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'JavaScript',
      'JUnit',
      'Git'
    ]
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'The Hashtag Dilemma on X',
    description: '',
    link: '/blog/the-hashtag-dilemma-on-x',
    uid: 'blog-1',
  },
  {
    title: 'The McMaster Carr website case study',
    description:
      '',
    link: '/blog/mcmaster-carr-case-study',
    uid: 'blog-2',
  },
  {
    title: 'The \'S\' in docker joke',
    description:
      '',
    link: '/blog/s-in-docker',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/tejasrpawar',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tejasrpawar',
  },
]

export const EMAIL = 'tejasrpawar0108@gmail.com'

export const EDUCATION: Education[] = [
  {
    institution: 'University of Utah',
    degree: "Master's Degree (M.S.)",
    field: 'Computer Science',
    start: 'Aug 2023',
    end: 'May 2025',
    link: 'https://example.com',
    gpa: '3.8/4.0',
    id: 'edu1',
    logo: '/images/logos/Utah_Utes_-_U_logo.svg.webp',
    courses: [
      'Advanced Algorithms', 'Computer Architecture', 'Machine Learning', 'Operating Systems', 'Computational Geometry'
    ]
  },
  {
    institution: 'Indian Institute of Information Technology, Allahabad',
    degree: "Bachelor's Degree (B.Tech)",
    field: 'Information Technology',
    start: 'Jul 2017',
    end: 'Jun 2021',
    link: 'https://example.com',
    gpa: '8.2/10.0',
    id: 'edu2',
    logo: '/images/logos/Indian_Institute_of_Information_Technology,_Allahabad_Logo.png',
    courses: [
      'Design And Analysis Of Algorithms', 'Data Structures And Algorithms', 'Database Management System', 'Operating System', 'Object Oriented Methodology', 'Data Mining', 'Deep Learning', 'Linear Algebra', 'Probability And Statistics'
    ]
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: 'Jan 2025',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/b6b61affc490434199112eee5997054b',
    id: 'cert1',
    description: 'Associate level certification validating technical proficiency in developing, testing, deploying, and debugging AWS Cloud-based applications'
  },
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft Azure',
    date: 'Nov 2024',
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/TejasRameshPawar-3238/B0FE22537DF4B7B3?sharingId=BD8E7CA517AFBB9F',
    id: 'cert2',
    description: 'Associate level certification validating a developer\'s ability to design, build, test, and maintain cloud applications and services on Microsoft Azure'
  },
  {
    name: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional',
    issuer: 'Oracle',
    date: 'Jul 2024',
    link: '/eCertificateOCIGenAI.pdf',
    id: 'cert3',
    description: ''
  }
]
