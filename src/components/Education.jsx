import nitwLogo from '../assets/nitw-logo.png'
import duLogo from '../assets/du-logo.png'

const educationItems = [
  {
    institution: 'National Institute of Technology, Warangal',
    degree: 'M.Sc. Mathematics and Scientific Computing',
    period: '2022 - 2024',
    score: 'CGPA: 8.0 / 10.0',
    logo: nitwLogo,
    logoAlt: 'National Institute of Technology Warangal logo',
  },
  {
    institution: 'Deshbandhu College, University of Delhi',
    degree: 'B.Sc. (Hons.) Mathematics',
    period: '2019 - 2022',
    score: 'CGPA: 9.0 / 10.0',
    logo: duLogo,
    logoAlt: 'University of Delhi logo',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="section-label mb-3">Education</p>
          <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Education
          </h2>
          <p className="text-offwhite/65 text-base md:text-lg mt-4 leading-8">
            Academic background that shaped my analytical thinking, problem solving, and systems approach to development.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {educationItems.map((item) => (
            <article
              key={item.institution}
              className="surface-card rounded-[1.75rem] p-6 md:p-8 h-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex h-24 w-24 items-center justify-center rounded-[1.25rem] bg-white p-3 shadow-lg">
                  <img
                    src={item.logo}
                    alt={item.logoAlt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-sm text-aqua mb-2">{item.period}</p>
                  <h3 className="text-offwhite text-2xl md:text-[1.75rem] font-bold leading-snug">
                    {item.institution}
                  </h3>
                  <p className="text-offwhite/70 mt-3 leading-7">{item.degree}</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-offwhite/55 text-sm uppercase tracking-[0.12em]">
                  Academic Performance
                </p>
                <p className="inline-flex items-center rounded-full border border-magenta/25 bg-magenta/10 px-4 py-2 text-magenta font-semibold">
                  {item.score}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
