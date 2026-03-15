import { useEffect } from 'react'
import {
  AUTHOR_NAME,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from '../constants/site'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

export default function Seo({
  metadata = {
    title: 'Rakesh Choudhary | Software Engineer Portfolio',
    description:
      'Portfolio of Rakesh Choudhary, a software engineer building React, Next.js, Node.js, and data-driven web applications.',
    canonicalUrl: `${SITE_URL}/`,
    websiteUrl: `${SITE_URL}/`,
    image: DEFAULT_OG_IMAGE,
    keywords: DEFAULT_KEYWORDS,
    jobTitle: 'Software Engineer',
  },
}) {
  useEffect(() => {
    document.title = metadata.title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: metadata.description,
    })
    upsertMeta('meta[name="author"]', {
      name: 'author',
      content: AUTHOR_NAME,
    })
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: metadata.keywords.join(', '),
    })

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: metadata.canonicalUrl,
    })

    // Clean up static schema from index.html if present to avoid duplication
    const staticSchema = document.querySelector('script[type="application/ld+json"]:not([id])')
    if (staticSchema) {
      staticSchema.remove()
    }

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: metadata.title,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: metadata.description,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: metadata.canonicalUrl,
    })
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: metadata.image,
    })

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: metadata.title,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: metadata.description,
    })
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: metadata.image,
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    })

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE_NAME,
      url: metadata.websiteUrl,
      jobTitle: metadata.jobTitle,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'National Institute of Technology, Warangal',
      },
      sameAs: [
        SOCIAL_LINKS.github,
        SOCIAL_LINKS.linkedin,
        'https://leetcode.com/RakeshChoudhary29/',
      ],
      knowsAbout: [
        'Software Engineering',
        'Full Stack Development',
        'React',
        'Next.js',
        'Node.js',
        'MongoDB',
        'Python',
        'Data Structures and Algorithms',
      ],
    }

    let script = document.getElementById('person-schema')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'person-schema'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)
  }, [metadata])

  return null
}
