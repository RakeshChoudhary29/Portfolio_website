/**
 * Numbered eyebrow label + section heading shared by every section. `index`
 * is the section's 1-based position on the page (rendered as "01.", "02.", …).
 * `title`/`description` are optional so sections with custom layouts (About)
 * can render just the label.
 */
export default function SectionHeader({
  index,
  label,
  title,
  description,
  className = '',
  labelClassName = '',
  numberClassName = 'text-offwhite/30',
  titleClassName = '',
  descriptionClassName = 'text-offwhite/60 text-base md:text-lg mt-4 leading-relaxed',
}) {
  return (
    <div className={className}>
      <p className={`section-label ${labelClassName}`}>
        <span className={`${numberClassName} mr-2`}>{String(index).padStart(2, '0')}.</span>
        {label}
      </p>
      {title ? (
        <h2 className={`text-offwhite font-display text-fluid-h2 font-bold ${titleClassName}`}>
          {title}
        </h2>
      ) : null}
      {description ? <p className={descriptionClassName}>{description}</p> : null}
    </div>
  )
}
