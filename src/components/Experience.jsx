const experiences = [
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
      'Optimized database performance by 45% through MongoDB indexing, aggregation pipelines, and Redis caching.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">02. Experience</p>
          <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Professional Experience
          </h2>
          <p className="text-offwhite/65 text-base md:text-lg mt-4 leading-8">
            Work focused on scalable products, real-time systems, cloud deployment, and better application performance.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="surface-card rounded-[1.5rem] p-6 md:p-8 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-8"
            >
              <div className="mb-6 md:mb-0">
                <p className="font-mono text-sm text-aqua mb-3">{item.period}</p>
                <p className="text-offwhite font-semibold text-lg leading-snug">{item.company}</p>
                <p className="text-offwhite/60 text-sm mt-1">{item.location}</p>
              </div>

              <div>
                <h3 className="text-aqua text-2xl font-bold mb-4">{item.role}</h3>
                <ul className="space-y-3 text-offwhite/75">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-aqua flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
