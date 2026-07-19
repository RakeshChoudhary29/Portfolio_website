import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Types and deletes each word in `words` on a loop, with a blinking caret.
 * Falls back to a static first word when the user prefers reduced motion.
 */
export default function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1700,
  className = '',
}) {
  const reduceMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) return undefined
    const word = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, reduceMotion, typingSpeed, deletingSpeed, pause])

  if (reduceMotion) {
    return <span className={className}>{words[0]}</span>
  }

  return (
    <span className={className}>
      {/* Static copy for screen readers; animation is decorative */}
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">
        {text}
        <span className="typewriter-caret" />
      </span>
    </span>
  )
}
