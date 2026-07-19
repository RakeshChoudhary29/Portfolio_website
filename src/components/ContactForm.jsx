import { useState } from 'react'
import { motion } from 'framer-motion'

// Web3Forms access keys are public by design (tied to a recipient email),
// so shipping it in the client bundle is safe. Without a key the whole
// form is hidden and Contact falls back to direct links only.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export const hasContactForm = Boolean(ACCESS_KEY)

const inputClasses =
  'w-full rounded-xl border border-white/10 bg-surface-elevated px-4 py-3 text-sm text-offwhite placeholder:text-offwhite/30 outline-none transition-colors duration-200 focus:border-aqua/40'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  if (!hasContactForm) return null

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    // Honeypot: bots fill the hidden field, humans never see it
    if (formData.get('botcheck')) return

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          subject: `Portfolio message from ${formData.get('name')}`,
        }),
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-offwhite/50"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-offwhite/50"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-offwhite/50"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What would you like to build together?"
          className={`${inputClasses} resize-y`}
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileTap={{ scale: 0.97 }}
        className="cta-glow w-full cursor-pointer rounded-full bg-cyan px-7 py-3 font-mono text-sm font-semibold text-black transition-colors duration-200 hover:bg-cyan/90 disabled:cursor-wait disabled:opacity-70 sm:text-base"
      >
        {status === 'sending' ? (
          <>
            <i className="fa-solid fa-circle-notch fa-spin mr-2" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <i className="fa-solid fa-paper-plane mr-2" aria-hidden="true" />
            Send Message
          </>
        )}
      </motion.button>

      <div role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
        {status === 'success' && (
          <p className="text-aqua">
            <i className="fa-solid fa-circle-check mr-2" aria-hidden="true" />
            Message sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-hotmag">
            <i className="fa-solid fa-circle-exclamation mr-2" aria-hidden="true" />
            Something went wrong. Please email me directly instead.
          </p>
        )}
      </div>
    </form>
  )
}
