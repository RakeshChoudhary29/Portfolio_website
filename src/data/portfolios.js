import nitwLogo from '../assets/nitw-logo.png'
import duLogo from '../assets/du-logo.png'
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_URL,
} from '../constants/site'

const sharedEducation = {
  sectionLabel: 'Education',
  title: 'Education',
  description:
    'Academic background that shaped my analytical thinking, problem solving, and systems approach to development.',
  items: [
    {
      institution: 'National Institute of Technology, Warangal',
      degree: 'M.Sc. Mathematics and Scientific Computing',
      period: '2022 - 2024',
      score: 'CGPA: 8.0 / 10.0',
      logo: nitwLogo,
      logoAlt: 'National Institute of Technology Warangal logo',
    },
    {
      institution: 'Deshbandhu College, University of Delhi',
      degree: 'B.Sc. (Hons.) Mathematics',
      period: '2019 - 2022',
      score: 'CGPA: 9.0 / 10.0',
      logo: duLogo,
      logoAlt: 'University of Delhi logo',
    },
  ],
}

const sharedExperienceItems = [
  {
    role: 'Software Development Engineer - 1',
    company: 'Monkhub Innovations',
    location: 'Gurugram, India',
    period: 'Aug 2025 - Present',
    points: [
      'Building secure Node.js backend services powering blockchain token swap and bridge workflows.',
      'Integrated Stripe payment flows with webhook-driven reconciliation for reliable transaction handling.',
      'Shipped OpenAI-powered features into production backend services.',
      'Deploy and operate services on AWS; reduced API response times through caching layers and query optimization.',
    ],
    techs: ['Node.js', 'Stripe', 'OpenAI', 'AWS', 'MongoDB'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Code B Solutions Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'Sep 2024 - May 2025',
    points: [
      'Led client-facing delivery of media streaming and logistics platforms deployed across 1000+ transit vehicles.',
      'Engineered a custom Node.js + ffmpeg media pipeline that cut live stream latency.',
      'Built real-time dispatch systems on Socket.io with a geospatial-indexed ride-assignment algorithm.',
      'Dockerized services, owned GCP deployments, and implemented JWT/RBAC security across 5+ enterprise admin panels.',
    ],
    techs: ['Node.js', 'React', 'ffmpeg', 'Socket.io', 'Docker', 'GCP'],
  },
]

const sharedContact = {
  sectionLabel: 'Contact',
  title: 'Get In Touch',
  description:
    "I'm always interested in hearing about new opportunities, meaningful collaborations, and interesting product work.",
}

export const portfolioRegistry = {
  software: {
    key: 'software',
    label: 'Software Developer',
    shortLabel: 'Software',
    queryValue: 'software',
    seo: {
      title: 'Rakesh Choudhary | Software Engineer & Full Stack Developer',
      description:
        'Explore the software engineering portfolio of Rakesh Choudhary, featuring React, Next.js, Node.js, MERN stack, cloud deployment, and scalable web application projects.',
      keywords: [
        ...DEFAULT_KEYWORDS,
        'software engineer',
        'full stack engineer',
        'React portfolio',
        'Next.js portfolio',
        'Node.js portfolio',
      ],
      jobTitle: 'Software Engineer',
    },
    footerSubtitle: 'Software Developer | NIT Warangal',
    hero: {
      sectionLabel: 'Introduction',
      intro: 'Hi, my name is',
      name: 'Rakesh Choudhary',
      title: 'Full Stack Developer & Software Engineer crafting scalable web experiences.',
      roles: ['Full Stack Developer', 'Backend Engineer', 'MERN Stack Developer', 'Problem Solver'],
      description:
        'I am a Software Engineer and Full Stack Developer working with React, Next.js, Node.js, and MongoDB to build responsive, user-focused applications with strong performance and practical UI.',
      chips: ['1.5+ years experience', 'MERN Stack', 'Node.js', 'Google Cloud Platform'],
      card: {
        icon: 'fa-solid fa-terminal',
        eyebrow: 'Currently',
        title: 'SDE-1 @ Monkhub Innovations',
        subtitle: 'Backend & payment systems · Gurugram, India',
        highlights: [
          'Node.js token swap & bridge services',
          'Stripe payments & OpenAI integrations',
          'AWS deployments & performance tuning',
        ],
      },
    },
    about: {
      sectionLabel: 'About',
      title: 'About Me',
      description:
        'I am Rakesh Choudhary, a Software Engineer and Full Stack Developer with experience building scalable web applications using the MERN stack, Next.js, and Cloud Platforms. I enjoy combining strong problem-solving skills with clean, responsive interfaces and practical product thinking.',
      snapshotTitle: 'Quick Snapshot',
      snapshotItems: [
        'Backend-focused full stack developer',
        'MERN, Next.js, and cloud deployment',
        'Strong DSA and analytical background',
      ],
      stats: [
        { value: 1.5, decimals: 1, suffix: '+', label: 'Years Experience' },
        { value: 988, suffix: '+', label: 'LeetCode Problems' },
        { value: 852, suffix: '+', label: 'GFG Problems' },
      ],
      tabs: {
        skills: {
          label: 'Skills',
          items: [
            {
              title: 'Frontend',
              value: 'React.js | Next.js | TypeScript | Redux Toolkit | Tailwind CSS',
            },
            {
              title: 'Backend & System Design',
              value: 'Node.js | Express.js | REST APIs | Socket.io | Microservices | Caching',
            },
            {
              title: 'Databases, Cloud & DevOps',
              value: 'MongoDB | MySQL | Redis | Docker | CI/CD | GCP | AWS',
            },
            {
              title: 'AI & Integrations',
              value: 'OpenAI API | LangChain | Gemini | Stripe | Payment Webhooks',
            },
          ],
        },
        coding: {
          label: 'Coding Profiles',
          items: [
            {
              title: 'GeeksForGeeks',
              value: 'Top 100 institute rank | 852+ problems solved',
              href: 'https://auth.geeksforgeeks.org/user/rakeshthnb9s',
            },
            {
              title: 'LeetCode',
              value: '988+ DSA problems solved',
              href: 'https://leetcode.com/RakeshChoudhary29/',
            },
            {
              title: 'Highlights',
              value: 'JAM 2022 AIR 317 | Strong problem solving and analytical foundation',
            },
          ],
        },
      },
    },
    experience: {
      sectionLabel: 'Experience',
      title: 'Professional Experience',
      description:
        'Work focused on full stack products, real-time systems, cloud deployment, and better application performance.',
      items: sharedExperienceItems,
    },
    education: sharedEducation,
    projects: {
      sectionLabel: 'Work',
      title: 'Featured Projects',
      description:
        'Selected work that reflects my product thinking, backend architecture, and practical software development experience.',
      items: [
        {
          id: 'dms',
          visual: 'stream',
          label: 'Featured Project',
          title: 'Device Management System (DMS)',
          description:
            'Architected a high-concurrency Node.js streaming pipeline serving live camera feeds from 1000+ transit vehicles. Reverse-engineered proprietary camera network protocols, captured synchronized audio/video through a custom ffmpeg pipeline with in-memory stream buffering for low-latency playback, and shipped the system as Dockerized services on GCP.',
          links: [],
          techs: ['Node.js', 'Docker', 'GCP', 'ffmpeg', 'MongoDB'],
          status: 'In Production',
        },
        {
          id: 'mnee',
          visual: 'chart',
          label: 'Featured Project',
          title: 'MNEE - Blockchain Token Platform',
          description:
            'Constructed the backend transaction pipeline for a live blockchain token platform, integrating Fireblocks custody and the 0x API for quote routing across smart-contract tokens. Hardened endpoints with Google reCAPTCHA Enterprise to block automated transaction abuse and secured primary swap pairs with wallet-based authentication.',
          links: [],
          techs: ['Node.js', 'React.js', 'Fireblocks', '0x API'],
          status: 'Live Platform',
        },
        {
          id: 'roldrive',
          visual: 'dashboard',
          label: 'Featured Project',
          title: 'RolDrive Ride Booking',
          description:
            'Designed real-time ride dispatch on Socket.io backed by a geospatial-indexed assignment algorithm that matches drivers to bookings at scale. Built the internal admin platform with JWT/RBAC authorization covering booking, driver, and fleet operations end to end.',
          links: [],
          techs: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
          status: 'In Production',
        },
        {
          id: 'most-ai',
          visual: 'terminal',
          label: 'AI Platform',
          title: 'MOST - Hospitality AI Platform',
          description:
            'Architected an AI recommendation engine using LangChain and OpenAI to improve dynamic response generation. Designed modular NestJS services for scalable AI travel workflows and deployed robust communication pipelines using AWS S3, SES, and SNS.',
          links: [],
          techs: ['NestJS', 'LangChain', 'OpenAI', 'AWS', 'MongoDB'],
          status: 'Client Project',
        },
        {
          id: 'shortest-path',
          visual: 'graph',
          label: 'Featured Project',
          title: 'Shortest Path Visualizer',
          description:
            "Interactive pathfinding visualizer implementing Dijkstra's algorithm on a fully editable graph — add weighted nodes and edges, then watch the algorithm expand its frontier step by step. Written in vanilla JavaScript on HTML Canvas with zero frameworks.",
          links: [
            {
              url: 'https://github.com/RakeshChoudhary29/Shortest-Path',
              label: 'Source Code',
              icon: 'fa-brands fa-github',
            },
            {
              url: 'https://shortestpath.rakeshchoudhary.dev/',
              label: 'Live Demo',
              icon: 'fa-solid fa-arrow-up-right-from-square',
            },
          ],
          techs: ['HTML Canvas', 'CSS', 'JavaScript'],
        },
      ],
    },
    contact: {
      ...sharedContact,
      description:
        "I'm always interested in software roles, product engineering opportunities, and meaningful collaborations.",
    },
  },
  aiml: {
    key: 'aiml',
    label: 'AI/ML & Data Engineer',
    shortLabel: 'AI / ML',
    queryValue: 'aiml',
    seo: {
      title: 'Rakesh Choudhary | AI ML and Data Engineering Portfolio',
      description:
        'Discover the AI, machine learning, analytics, and data engineering portfolio of Rakesh Choudhary, with projects in Python, SQL, data pipelines, dashboards, and applied analysis.',
      keywords: [
        ...DEFAULT_KEYWORDS,
        'AI engineer portfolio',
        'machine learning portfolio',
        'data engineer portfolio',
        'Python developer portfolio',
        'SQL engineer portfolio',
      ],
      jobTitle: 'AI ML and Data Engineer',
    },
    footerSubtitle: 'AI/ML and Data Engineering Portfolio',
    hero: {
      sectionLabel: 'Introduction',
      intro: 'Hi, my name is',
      name: 'Rakesh Choudhary',
      title: 'AI/ML and data-focused engineer building insight-driven systems.',
      roles: ['AI Workflow Engineer', 'LLM Integration Developer', 'Automation Builder', 'Data Engineer'],
      description:
        'I work with modern AI frameworks like LangChain, OpenAI APIs, and automation workflows to build intelligent backend services and data-centric applications.',
      chips: ['AI/LLM Workflows', 'Automation Workflows', 'Data Engineering'],
      card: {
        icon: 'fa-solid fa-robot',
        eyebrow: 'Currently',
        title: 'SDE-1 @ Monkhub Innovations',
        subtitle: 'AI workflows & backend systems · Gurugram, India',
        highlights: [
          'OpenAI-powered production backend features',
          'LangChain and LLM workflow engineering',
          'Data pipelines, automation, and AWS',
        ],
      },
    },
    about: {
      sectionLabel: 'About',
      title: 'About Me',
      description:
        'I am Rakesh Choudhary, an engineer with strong analytical foundations and experience across AI workflows, LLM integrations, and data-heavy systems. I enjoy turning complex AI capabilities into useful backend services, clean workflows, and practical automated tools.',
      snapshotTitle: 'Quick Snapshot',
      snapshotItems: [
        'AI workflow engineering mindset',
        'LangChain, Prompt Engineering, and APIs',
        'Strong math and problem solving foundation',
      ],
      stats: [
        { value: 1.5, decimals: 1, suffix: '+', label: 'Years Experience' },
        { value: 988, suffix: '+', label: 'LeetCode Problems' },
        { value: 852, suffix: '+', label: 'GFG Problems' },
      ],
      tabs: {
        skills: {
          label: 'Skills',
          items: [
            {
              title: 'AI / ML & LLMs',
              value: 'LangChain | OpenAI API | Gemini API | Prompt Engineering',
            },
            {
              title: 'Automation & Workflows',
              value: 'n8n | Telegram Bot API | Webhook Integrations',
            },
            {
              title: 'Data Engineering',
              value: 'SQL | MongoDB Pipelines | Redis | Query Optimization',
            },
            {
              title: 'Programming & Cloud',
              value: 'Python | JavaScript | AWS (S3, SES, SNS) | Docker',
            },
          ],
        },
        coding: {
          label: 'Profiles & Highlights',
          items: [
            {
              title: 'GeeksForGeeks',
              value: 'Top 100 institute rank | 852+ problems solved',
              href: 'https://auth.geeksforgeeks.org/user/rakeshthnb9s',
            },
            {
              title: 'LeetCode',
              value: '988+ DSA problems solved',
              href: 'https://leetcode.com/RakeshChoudhary29/',
            },
            {
              title: 'Academic Strength',
              value: 'JAM 2022 AIR 317 | Strong mathematical and analytical foundation',
            },
          ],
        },
      },
    },
    experience: {
      sectionLabel: 'Experience',
      title: 'Analytics and Data-Oriented Experience',
      description:
        'Experience spanning AI-driven workflows, real-time backend data flows, and performance optimization.',
      items: sharedExperienceItems,
    },
    education: sharedEducation,
    projects: {
      sectionLabel: 'Work',
      title: 'AI & Data Projects',
      description:
        'Projects and applied work that reflect AI workflow integrations, LLM capabilities, and data-oriented automation.',
      items: [
        {
          id: 'most-ai',
          visual: 'terminal',
          label: 'Featured Project',
          title: 'MOST - Hospitality AI Platform',
          description:
            'Architected an AI recommendation engine with LangChain and OpenAI that powers dynamic, context-aware responses for hospitality workflows. Designed modular NestJS microservices for scalable AI travel pipelines and deployed transactional communication infrastructure on AWS S3, SES, and SNS.',
          links: [],
          techs: ['NestJS', 'LangChain', 'OpenAI', 'AWS', 'MongoDB'],
          status: 'Client Project',
        },
        {
          id: 'expense-automation',
          visual: 'dashboard',
          label: 'AI Automation',
          title: 'AI Expense Tracker Automation',
          description:
            'Built a fully serverless expense-tracking automation: a Telegram bot pipes receipt images and text to Google Gemini, which parses them into structured Google Sheets rows through n8n workflows. Deployed n8n on Hugging Face Spaces (Docker) with a Cloudflare Worker proxying inbound webhooks and a cron ping keeping the free Space awake 24/7, plus a dedicated error-handler workflow with automatic retries.',
          links: [],
          techs: ['n8n', 'Gemini API', 'Telegram API', 'Cloudflare Workers', 'Docker'],
          status: 'Running 24/7',
        },
        {
          id: 'titanic',
          visual: 'chart',
          label: 'Data Project',
          title: 'Titanic Survival Analysis',
          description:
            'Performed exploratory data analysis on the Titanic dataset to identify survival trends across passenger demographics, ticket class, and travel patterns. The project focuses on cleaning data, comparing features, and using visual analysis.',
          links: [
            {
              url: 'https://github.com/RakeshChoudhary29/Titanic',
              label: 'Source Code',
              icon: 'fa-brands fa-github',
            },
          ],
          techs: ['Python', 'Pandas', 'Visualization', 'Statistics'],
        },
      ],
    },
    contact: {
      ...sharedContact,
      description:
        "I'm always interested in AI/ML, analytics, and backend engineering roles where I can work on meaningful data-driven systems.",
    },
  },
}

const portfolioAliases = {
  software: 'software',
  dev: 'software',
  developer: 'software',
  softwaredeveloper: 'software',
  aiml: 'aiml',
  ai: 'aiml',
  ml: 'aiml',
  data: 'aiml',
  dataengineer: 'aiml',
}

export function getPortfolioFromSearch(search) {
  const params = new URLSearchParams(search)
  const rawType = (params.get('type') || '').toLowerCase().replace(/[\s_-]/g, '')
  const resolvedKey = portfolioAliases[rawType] || 'software'

  return portfolioRegistry[resolvedKey]
}

export function getPortfolioOptions() {
  return Object.values(portfolioRegistry).map((portfolio) => ({
    key: portfolio.key,
    label: portfolio.shortLabel,
    href: `?type=${portfolio.queryValue}`,
  }))
}

export function getProjectFromSearch(search, portfolio) {
  const params = new URLSearchParams(search)
  const projectId = params.get('project')

  if (!projectId) {
    return null
  }

  return portfolio.projects.items.find((project) => project.id === projectId) || null
}

export function getPortfolioUrl(portfolioKey) {
  if (portfolioKey === 'software') {
    return `${SITE_URL}/`
  }

  return `${SITE_URL}/?type=${portfolioKey}`
}

export function getProjectUrl(portfolioKey, projectId) {
  const params = new URLSearchParams()

  if (portfolioKey !== 'software') {
    params.set('type', portfolioKey)
  }

  params.set('project', projectId)

  return `${SITE_URL}/?${params.toString()}`
}

export function buildMetadata(portfolio, project) {
  if (project) {
    return {
      title: `${project.title} | Rakesh Choudhary Portfolio`,
      description: project.description,
      canonicalUrl: getProjectUrl(portfolio.key, project.id),
      websiteUrl: `${SITE_URL}/`,
      image: DEFAULT_OG_IMAGE,
      keywords: [...portfolio.seo.keywords, project.title, ...project.techs],
      jobTitle: portfolio.seo.jobTitle,
    }
  }

  return {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    canonicalUrl: getPortfolioUrl(portfolio.key),
    websiteUrl: `${SITE_URL}/`,
    image: DEFAULT_OG_IMAGE,
    keywords: portfolio.seo.keywords,
    jobTitle: portfolio.seo.jobTitle,
  }
}
