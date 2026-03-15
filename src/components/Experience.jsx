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
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-2">02. Experience</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-14">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="black-box border border-white/10 shadow-xl md:grid md:grid-cols-[220px_1fr] md:gap-8"
            >
              <div className="mb-6 md:mb-0">
                <p className="font-mono text-sm text-aqua mb-2">{item.period}</p>
                <p className="text-offwhite font-semibold text-lg">{item.company}</p>
                <p className="text-offwhite/60 text-sm">{item.location}</p>
              </div>

              <div>
                <h3 className="text-aqua text-2xl font-bold mb-4">{item.role}</h3>
                <ul className="list-disc pl-5 space-y-3 text-offwhite/75">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
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
