import nitwLogo from '../assets/nitw-logo.png'
import duLogo from '../assets/du-logo.png'
import shortestPathImg from '../assets/ShortestPath.png'
import titanicImg from '../assets/Titanic3.jpg'
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
      'Developed secure backend services for blockchain token swap and bridge workflows using Node.js and Fireblocks APIs.',
      'Optimized API response times through caching and query optimization.',
      'Integrated Web3 wallet authentication flows, reducing session hijacking risks across primary token swap pairs.'
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Code B Solutions Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'Sep 2024 - May 2025',
    points: [
      'Led the development of high-performance media streaming and logistics platforms deployed across 1000+ transit vehicles.',
      'Engineered a custom Node.js/ffmpeg media pipeline reducing stream latency.',
      'Implemented rigorous JWT/RBAC security systems for 5+ enterprise-level admin panels.',
    ],
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
      description:
        'I am a Software Engineer and Full Stack Developer working with React, Next.js, Node.js, and MongoDB to build responsive, user-focused applications with strong performance and practical UI.',
      chips: ['1.5+ years experience', 'MERN Stack', 'Node.js', 'Google Cloud Platform'],
      card: {
        logo: nitwLogo,
        logoAlt: 'NIT Warangal logo',
        eyebrow: 'Currently',
        title: 'MSc Mathematics and Scientific Computing',
        subtitle: 'NIT Warangal',
        highlights: [
          'Responsive frontend and clean component architecture',
          'MERN stack and Next.js development',
          'Cloud deployment and scalable backend architecture',
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
        'Frontend-focused full stack developer',
        'MERN, Next.js, and cloud deployment',
        'Strong DSA and analytical background',
      ],
      tabs: {
        skills: {
          label: 'Skills',
          items: [
            {
              title: 'Frontend Development',
              value: 'React.js | Next.js | JavaScript ES6+ | TypeScript | Redux Toolkit | Tailwind CSS',
            },
            {
              title: 'Backend Development',
              value: 'Node.js | Express.js | REST APIs | JWT | Socket.io | Microservices',
            },
            {
              title: 'Databases and Cloud',
              value: 'MongoDB | MySQL | Redis | GCP | AWS | Docker',
            },
            {
              title: 'Programming Languages',
              value: 'JavaScript | TypeScript | Python | C++ | SQL',
            },
          ],
        },
        coding: {
          label: 'Coding Profiles',
          items: [
            {
              title: 'GeeksForGeeks',
              value: 'Top 100 institute rank | Solved 534+ problems',
              href: 'https://auth.geeksforgeeks.org/user/rakeshthnb9s',
            },
            {
              title: 'LeetCode',
              value: 'Solved 400+ Data Structures problems',
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
          label: 'Featured Project',
          title: 'Device Management System (DMS)',
          description:
            'Developed a high-concurrency Node.js streaming pipeline scaling across transit vehicle camera networks. Reverse-engineered proprietary camera network protocols and captured feeds with audio via ffmpeg, buffering streams in RAM.',
          links: [],
          techs: ['Node.js', 'Docker', 'GCP', 'ffmpeg', 'MongoDB'],
          placeholder: 'DMS',
          reverse: false,
        },
        {
          id: 'mnee',
          label: 'Featured Project',
          title: 'MNEE - Blockchain Token Platform',
          description:
            'Constructed a backend transaction pipeline integrating Fireblocks and 0x API, supporting quote routing across smart contract tokens. Integrated Google reCAPTCHA Enterprise on staging endpoints to prevent automated transaction abuse.',
          links: [],
          techs: ['Node.js', 'React.js', 'Fireblocks', '0x API'],
          placeholder: 'MNE',
          reverse: true,
        },
        {
          id: 'roldrive',
          label: 'Featured Project',
          title: 'RolDrive Ride Booking',
          description:
            'Created real-time dispatch systems using Socket.io and designed a high-performance geospatial indexing ride assignment algorithm. Built an internal admin platform with JWT/RBAC security for end-to-end operational workflows.',
          links: [],
          techs: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
          placeholder: 'RD',
          reverse: false,
        },
        {
          id: 'shortest-path',
          label: 'Featured Project',
          title: 'Shortest Path Visualizer',
          description:
            'Created an interactive graph visualizer to demonstrate Dijkstra shortest path computation with dynamic node and edge editing. The tool helps users understand how pathfinding works step by step through a hands-on interface.',
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
          image: shortestPathImg,
          imageAlt: 'Rakesh Choudhary Software Engineer - Shortest Path Visualizer Tool',
          reverse: true,
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
      description:
        'I work with modern AI frameworks like LangChain, OpenAI APIs, and automation workflows to build intelligent backend services and data-centric applications.',
      chips: ['AI/LLM Workflows', 'Automation Workflows', 'Data Engineering'],
      card: {
        logo: nitwLogo,
        logoAlt: 'NIT Warangal logo',
        eyebrow: 'Focus Area',
        title: 'AI / ML and Data Engineering',
        subtitle: 'Applied analytics, LLM workflows, and model-oriented thinking',
        highlights: [
          'Python, LangChain, and API-driven problem solving',
          'Prompt Engineering and AI service integrations',
          'Data modeling, pipelines, and automation',
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
              value: 'Top 100 institute rank | Solved 534+ problems',
              href: 'https://auth.geeksforgeeks.org/user/rakeshthnb9s',
            },
            {
              title: 'LeetCode',
              value: 'Solved 400+ Data Structures problems',
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
          label: 'Featured Project',
          title: 'MOST - Hospitality AI Platform',
          description:
            'Architected an AI recommendation engine using LangChain and OpenAI, improving dynamic response generation. Designed modular NestJS services for scalable AI travel workflows and deployed robust communication workflows utilizing AWS S3, SES, and SNS.',
          links: [],
          techs: ['NestJS', 'LangChain', 'OpenAI', 'AWS', 'MongoDB'],
          placeholder: 'AI',
          reverse: false,
        },
        {
          id: 'expense-automation',
          label: 'Applied Work',
          title: 'Expense Tracker Automation',
          description:
            'Developed a Telegram bot using Gemini AI to parse receipts into structured Google Sheets via n8n. Fully automated financial tracking by parsing unstructured images and text into structured data with high accuracy.',
          links: [],
          techs: ['n8n', 'Gemini API', 'Telegram API', 'Docker'],
          placeholder: 'BOT',
          reverse: true,
        },
        {
          id: 'titanic',
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
          image: titanicImg,
          imageAlt: 'Rakesh Choudhary Data Engineer - Titanic Survival Analysis Project',
          reverse: false,
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
