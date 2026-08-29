export const RESUME_URLS = {
  software: '/resume/software/resume.pdf',
  aiml: '/resume/aiml/resume.pdf',
}

export const SITE_URL = 'https://rakeshchoudhary.dev'
export const SITE_NAME = 'Rakesh Choudhary'
export const AUTHOR_NAME = 'Rakesh Choudhary'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-banner.png`
export const CONTACT_EMAIL = 'hi.rakeshchoudhary@gmail.com'
export const SOCIAL_LINKS = {
  github: 'https://github.com/RakeshChoudhary29',
  linkedin: 'https://www.linkedin.com/in/rakeshchoudhary29/',
}

export const DEFAULT_KEYWORDS = [
  'Rakesh Choudhary',
  'Rakesh Choudhary software engineer',
  'Rakesh Choudhary portfolio',
  'software engineer portfolio',
  'full stack developer portfolio',
  'React developer',
  'Next.js developer',
  'Node.js developer',
  'MERN stack developer',
  'web developer India',
]

export function getResumeUrl(portfolioKey) {
  return RESUME_URLS[portfolioKey] || RESUME_URLS.software
}
