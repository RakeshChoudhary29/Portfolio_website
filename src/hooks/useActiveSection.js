import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view using IntersectionObserver so the
 * navbar can highlight the active link. `ids` is an array of element ids.
 */
export default function useActiveSection(ids, options) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActiveId(visible[0].target.id)
      },
      {
        rootMargin: '-45% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 1],
        ...options,
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return activeId
}
