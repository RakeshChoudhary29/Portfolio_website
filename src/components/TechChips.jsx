/** Pill-shaped tech tag row used by experience and project cards. */
export default function TechChips({ items }) {
  if (!items?.length) return null

  return (
    <ul className="mt-5 flex flex-wrap gap-2 list-none p-0 m-0 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-offwhite/50">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-white/10 bg-surface-elevated px-2.5 py-1 transition-colors duration-200 hover:border-aqua/30 hover:text-offwhite/75"
        >
          {tech}
        </li>
      ))}
    </ul>
  )
}
