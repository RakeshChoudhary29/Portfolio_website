import useSpotlight from '../../hooks/useSpotlight'

/**
 * A surface card that renders a soft radial "spotlight" glow following the
 * cursor. On touch devices the pointer events simply never fire, so it
 * gracefully renders as a static card.
 */
export default function SpotlightCard({
  children,
  className = '',
  as: Tag = 'div',
  glow = 'rgba(94, 234, 212, 0.14)',
  ...rest
}) {
  const spotlight = useSpotlight(glow)

  return (
    <Tag className={`spotlight-card ${className}`} {...spotlight} {...rest}>
      {children}
    </Tag>
  )
}
