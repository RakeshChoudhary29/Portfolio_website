export const RESUME_URLS = {
  software: '/resume/software/resume.pdf',
  aiml: '/resume/aiml/resume.pdf',
}

export function getResumeUrl(portfolioKey) {
  return RESUME_URLS[portfolioKey] || RESUME_URLS.software
}
