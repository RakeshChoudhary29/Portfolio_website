import nitwLogo from '../assets/nitw-logo.png'
import duLogo from '../assets/du-logo.png'
import ticketImg from '../assets/Ticket3.jpg'
import shortestPathImg from '../assets/ShortestPath.png'
import titanicImg from '../assets/Titanic3.jpg'

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
    location: 'Gurgaon, India',
    period: 'Aug 2025 - Present',
    points: [
      'Architected full stack web applications using Next.js, React.js, and Node.js with server-side rendering.',
      'Built data visualization dashboards with real-time analytics and role-based access control.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Code B Solutions Pvt. Ltd.',
    location: 'Mumbai, India',
    period: '2024 - Aug 2025',
    points: [
      'Engineered a scalable admin panel using the MERN stack for 1000+ concurrent users with real-time synchronization using Socket.io.',
      'Designed Google Cloud Platform infrastructure with Compute Engine and Cloud Storage achieving 99.9% uptime.',
      'Optimized database performance through MongoDB indexing, aggregation pipelines, and Redis caching.',
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
    footerSubtitle: 'Software Developer | NIT Warangal',
    hero: {
      sectionLabel: 'Introduction',
      intro: 'Hi, my name is',
      name: 'Rakesh Choudhary',
      title: 'Full Stack Developer crafting scalable and clean web experiences.',
      description:
        'I work with React, Next.js, Node.js, and MongoDB to build responsive, user-focused applications with strong performance and practical UI.',
      chips: ['1+ year experience', 'MERN Stack', 'Google Cloud Platform'],
      card: {
        logo: nitwLogo,
        logoAlt: 'NIT Warangal logo',
        eyebrow: 'Currently',
        title: 'MSc Mathematics and Scientific Computing',
        subtitle: 'NIT Warangal',
        highlights: [
          'Responsive frontend and clean component architecture',
          'MERN stack and Next.js development',
          'Cloud deployment and performance-focused delivery',
        ],
      },
    },
    about: {
      sectionLabel: 'About',
      title: 'About Me',
      description:
        'I am Rakesh Choudhary, a full stack developer with experience building scalable web applications using the MERN stack, Next.js, and Google Cloud Platform. I enjoy combining strong problem-solving skills with clean, responsive interfaces and practical product thinking.',
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
              value: 'React.js | Next.js | JavaScript | TypeScript | HTML | CSS',
            },
            {
              title: 'Backend Development',
              value: 'Node.js | Express.js | REST APIs | JWT | Socket.io',
            },
            {
              title: 'Databases and Cloud',
              value: 'MongoDB | MySQL | Redis | Google Cloud Platform',
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
        'Selected work that reflects my product thinking, frontend work, and practical software development experience.',
      items: [
        {
          id: 'roldrive',
          label: 'Featured Project',
          title: 'RolDrive Admin Platform',
          description:
            'Built an internal admin platform to manage ride operations end to end, including live trip visibility, chauffeur and vehicle assignment workflows, and operations monitoring. The system was designed to help business teams make faster decisions through clearer status tracking, streamlined actions, and analytics-focused dashboards.',
          links: [],
          techs: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
          placeholder: 'RD',
          reverse: false,
        },
        {
          id: 'movie-ticket',
          label: 'Featured Project',
          title: 'Movie Ticket Booking System',
          description:
            'Developed a movie ticket booking system focused on seat selection, booking flow management, and availability tracking. The project emphasizes object-oriented design, structured file handling, and reliable booking logic for handling theatre data, schedules, and reservation updates in a desktop-style application flow.',
          links: [
            {
              url: 'https://github.com/RakeshChoudhary29/Movie-Ticket-Booking-System',
              label: 'Source Code',
              icon: 'fa-brands fa-github',
            },
          ],
          techs: ['C++', 'File Handling', 'OOP'],
          image: ticketImg,
          imageAlt: 'Movie Ticket Booking System screenshot',
          reverse: true,
        },
        {
          id: 'shortest-path',
          label: 'Featured Project',
          title: 'Shortest Path Visualizer',
          description:
            'Created an interactive graph visualizer to demonstrate Dijkstra shortest path computation with dynamic node and edge editing. The tool helps users understand how pathfinding works step by step through a hands-on interface, real-time recalculation, and visual feedback for graph changes and computed routes.',
          links: [
            {
              url: 'https://github.com/RakeshChoudhary29/Shortest-Path',
              label: 'Source Code',
              icon: 'fa-brands fa-github',
            },
            {
              url: 'https://rakeshchoudhary29.github.io/Shortest-Path/',
              label: 'Live Demo',
              icon: 'fa-solid fa-arrow-up-right-from-square',
            },
          ],
          techs: ['HTML', 'CSS', 'JavaScript'],
          image: shortestPathImg,
          imageAlt: 'Shortest Path visualizer screenshot',
          reverse: false,
        },
      ],
    },
    contact: {
      ...sharedContact,
      description:
        "I'm always interested in hearing about software roles, product engineering opportunities, and meaningful collaborations.",
    },
  },
  aiml: {
    key: 'aiml',
    label: 'AI/ML & Data Engineer',
    shortLabel: 'AI / ML',
    queryValue: 'aiml',
    footerSubtitle: 'AI/ML and Data Engineering Portfolio',
    hero: {
      sectionLabel: 'Introduction',
      intro: 'Hi, my name is',
      name: 'Rakesh Choudhary',
      title: 'AI/ML and data-focused engineer building insight-driven systems.',
      description:
        'I work with Python, SQL, analytics workflows, and data-heavy applications to build useful models, dashboards, and engineering pipelines.',
      chips: ['Machine Learning', 'Data Engineering', 'Analytics Workflows'],
      card: {
        logo: nitwLogo,
        logoAlt: 'NIT Warangal logo',
        eyebrow: 'Focus Area',
        title: 'AI / ML and Data Engineering',
        subtitle: 'Applied analytics, data workflows, and model-oriented thinking',
        highlights: [
          'Python, SQL, and data-centric problem solving',
          'Analytics dashboards and reporting workflows',
          'Data modeling, pipelines, and optimization',
        ],
      },
    },
    about: {
      sectionLabel: 'About',
      title: 'About Me',
      description:
        'I am Rakesh Choudhary, an engineer with strong analytical foundations and growing experience across AI/ML, analytics, and data-heavy product systems. I enjoy turning raw data and business problems into useful insights, clean workflows, and practical tools.',
      snapshotTitle: 'Quick Snapshot',
      snapshotItems: [
        'Data-focused engineering mindset',
        'Analytics, SQL, and model-driven workflows',
        'Strong math and problem solving foundation',
      ],
      tabs: {
        skills: {
          label: 'Skills',
          items: [
            {
              title: 'Machine Learning',
              value: 'Python | scikit-learn | NumPy | pandas | model evaluation',
            },
            {
              title: 'Data Engineering',
              value: 'SQL | ETL thinking | MongoDB pipelines | Redis | query optimization',
            },
            {
              title: 'Analytics and Visualization',
              value: 'Dashboards | reporting workflows | business insights | statistics',
            },
            {
              title: 'Programming',
              value: 'Python | SQL | JavaScript | TypeScript | C++',
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
        'Experience spanning analytics dashboards, reporting systems, scalable backend data flows, and performance optimization.',
      items: sharedExperienceItems,
    },
    education: sharedEducation,
    projects: {
      sectionLabel: 'Work',
      title: 'Data and AI Projects',
      description:
        'Projects and applied work that reflect analytics thinking, model interpretation, and data-oriented engineering.',
      items: [
        {
          id: 'titanic',
          label: 'Data Project',
          title: 'Titanic Survival Analysis',
          description:
            'Performed exploratory data analysis on the Titanic dataset to identify survival trends across passenger demographics, ticket class, and travel patterns. The project focuses on cleaning data, comparing features, and using visual analysis to uncover interpretable insights that explain how different variables influenced survival outcomes.',
          links: [
            {
              url: 'https://github.com/RakeshChoudhary29/Titanic',
              label: 'Source Code',
              icon: 'fa-brands fa-github',
            },
          ],
          techs: ['Python', 'Pandas', 'Visualization', 'Statistics'],
          image: titanicImg,
          imageAlt: 'Titanic survival analysis screenshot',
          reverse: false,
        },
        {
          id: 'analytics-dashboard',
          label: 'Applied Work',
          title: 'Real-Time Analytics Dashboard',
          description:
            'Worked on dashboard experiences that surface operational KPIs, performance metrics, and reporting insights in a clear and actionable format. The goal was to improve decision-making for internal teams through better visibility, structured filters, and near real-time updates across business and operational views.',
          links: [],
          techs: ['Analytics', 'Dashboards', 'RBAC', 'Reporting'],
          placeholder: 'BI',
          reverse: true,
        },
        {
          id: 'data-optimization',
          label: 'Applied Work',
          title: 'Data Pipeline and Query Optimization',
          description:
            'Improved backend data workflows by optimizing queries, designing aggregation pipelines, and reducing response times through indexing and caching strategies. This work focused on making data-heavy applications more scalable and reliable while supporting reporting needs, cloud-backed deployments, and efficient access patterns.',
          links: [],
          techs: ['MongoDB', 'Redis', 'GCP', 'Optimization'],
          placeholder: 'DE',
          reverse: false,
        },
      ],
    },
    contact: {
      ...sharedContact,
      description:
        "I'm always interested in AI/ML, analytics, and data engineering roles where I can work on meaningful data-driven systems.",
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
