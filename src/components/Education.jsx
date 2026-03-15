const educationItems = [
  {
    institution: 'National Institute of Technology, Warangal',
    degree: 'M.Sc. Mathematics and Scientific Computing',
    period: '2022 - 2024',
    score: 'CGPA: 8.0 / 10.0',
  },
  {
    institution: 'Deshbandhu College, University of Delhi',
    degree: 'B.Sc. (Hons.) Mathematics',
    period: '2019 - 2022',
    score: 'CGPA: 9.0 / 10.0',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-2">03. Education</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-14">
          Education
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {educationItems.map((item) => (
            <article
              key={item.institution}
              className="black-box border border-white/10 shadow-xl h-full"
            >
              <p className="font-mono text-sm text-aqua mb-3">{item.period}</p>
              <h3 className="text-offwhite text-2xl font-bold mb-3">{item.institution}</h3>
              <p className="text-offwhite/75 mb-4">{item.degree}</p>
              <p className="text-magenta font-semibold">{item.score}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
