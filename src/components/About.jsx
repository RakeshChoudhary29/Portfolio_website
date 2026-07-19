import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import profilePhoto from '../assets/user.jpg'
import useSpotlight from '../hooks/useSpotlight'
import CountUp from './ui/CountUp'

function AboutTabItem({ item, index }) {
  const spotlight = useSpotlight()

  return (
    <motion.article
      {...spotlight}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="spotlight-card rounded-2xl p-4 sm:p-5 h-full"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-cyan font-semibold text-sm sm:text-base">{item.title}</h3>
          <p className="text-offwhite/65 mt-2.5 leading-7 text-sm sm:text-base">{item.value}</p>
        </div>
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua hover:text-cyan transition-colors duration-200 no-underline mt-0.5 flex-shrink-0"
            aria-label={`Visit ${item.title}`}
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-sm" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}

export default function About({ data }) {
  const tabKeys = Object.keys(data.tabs)
  const [activeTab, setActiveTab] = useState(tabKeys[0])

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">
          <span className="text-offwhite/30 mr-2">01.</span>
          {data.sectionLabel}
        </p>

        <div className="grid gap-10 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:gap-12 lg:gap-14 items-start">
          <motion.div
            className="w-full max-w-xs mx-auto md:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300 hover:border-aqua/30">
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src={profilePhoto}
                alt="Rakesh Choudhary"
                className="w-full object-cover aspect-[4/5] transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="spotlight-card rounded-2xl mt-6 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-aqua/80">
                {data.snapshotTitle}
              </p>
              <div className="mt-4 space-y-2.5">
                {data.snapshotItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/8 bg-surface-elevated px-3.5 py-3"
                  >
                    <p className="text-offwhite font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-offwhite text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {data.title}
            </h2>
            <p className="text-offwhite/65 leading-relaxed mb-7 text-base sm:text-lg max-w-3xl">
              {data.description}
            </p>

            {data.stats?.length ? (
              <div className="mb-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
                {data.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/8 bg-surface-elevated px-3 py-4 text-center"
                  >
                    <CountUp
                      value={stat.value}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix ?? ''}
                      className="block font-display text-2xl sm:text-3xl font-bold text-aqua"
                    />
                    <p className="mt-1.5 font-mono text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.12em] text-offwhite/45">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="flex flex-wrap gap-2.5 mb-7">
              {tabKeys.map((tabKey) => (
                <button
                  key={tabKey}
                  type="button"
                  onClick={() => setActiveTab(tabKey)}
                  className={`text-sm font-medium cursor-pointer border px-4 py-2 rounded-full transition-colors duration-200 ${
                    activeTab === tabKey
                      ? 'bg-aqua/10 border-aqua/30 text-aqua'
                      : 'bg-transparent border-white/10 text-offwhite/55 hover:text-offwhite hover:border-white/20'
                  }`}
                >
                  {data.tabs[tabKey].label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {data.tabs[activeTab].items.map((item, index) => (
                  <AboutTabItem key={item.title} item={item} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
