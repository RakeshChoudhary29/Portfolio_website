import { useState } from 'react'
import profilePhoto from '../assets/user.jpg'

export default function About({ data }) {
  const tabKeys = Object.keys(data.tabs)
  const [activeTab, setActiveTab] = useState(tabKeys[0])

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-2">{data.sectionLabel}</p>

        <div className="grid gap-12 md:grid-cols-[320px_minmax(0,1fr)] md:gap-14 items-start">
          <div className="w-full max-w-sm mx-auto md:max-w-none">
            <div className="relative group">
              <img
                src={profilePhoto}
                alt="Rakesh Choudhary"
                className="w-full rounded-[1.5rem] object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl"
              />
              <div className="absolute inset-0 border-2 border-aqua/30 rounded-[1.5rem] translate-x-3 translate-y-3 z-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
            </div>

            <div className="surface-card rounded-[1.25rem] mt-8 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-aqua/80">
                {data.snapshotTitle}
              </p>
              <div className="mt-4 space-y-3">
                {data.snapshotItems.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-black/15 px-4 py-3">
                    <p className="text-white font-semibold text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-5">{data.title}</h2>
            <p className="text-offwhite/70 leading-relaxed mb-8 text-lg max-w-3xl">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {tabKeys.map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`text-sm md:text-base font-medium cursor-pointer border px-4 py-2.5 rounded-full transition-colors duration-200 ${
                    activeTab === tabKey
                      ? 'bg-aqua/10 border-aqua/40 text-aqua'
                      : 'bg-transparent border-white/10 text-offwhite/60 hover:text-offwhite hover:border-white/20'
                  }`}
                >
                  {data.tabs[tabKey].label}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {data.tabs[activeTab].items.map((item) => (
                <article key={item.title} className="surface-card rounded-[1.25rem] p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[#b54769] font-semibold text-base">{item.title}</h3>
                      <p className="text-offwhite/70 mt-3 leading-7">{item.value}</p>
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aqua hover:text-magenta transition-colors duration-200 no-underline mt-1"
                        aria-label={`Visit ${item.title}`}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
