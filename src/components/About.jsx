import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import profilePhoto from '../assets/user.webp'
import useSpotlight from '../hooks/useSpotlight'
import CountUp from './ui/CountUp'
import SectionHeader from './SectionHeader'
import TechChips from './TechChips'
import Icon from './ui/Icon'

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
        <div className="min-w-0">
          <h3 className="text-cyan font-semibold text-sm sm:text-base">{item.title}</h3>
          {item.items ? (
            <TechChips items={item.items} />
          ) : (
            <p className="text-offwhite/65 mt-2.5 leading-7 text-sm sm:text-base">{item.value}</p>
          )}
        </div>
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua hover:text-cyan transition-colors duration-200 no-underline mt-0.5 flex-shrink-0"
            aria-label={`Visit ${item.title}`}
          >
            <Icon name="external-link" size={15} />
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}

export default function About({ data }) {
  const tabKeys = Object.keys(data.tabs)
  const [activeTab, setActiveTab] = useState(tabKeys[0])
  const snapshotSpotlight = useSpotlight()

  return (
    <section id="about" className="py-16 sm:py-20 md:pt-24 md:pb-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* The h2 sits above the grid (not inside the text column) so it stays
            with its eyebrow on mobile instead of landing a screen below the
            photo — and so About's header matches every other section. */}
        <SectionHeader
          index={1}
          label={data.sectionLabel}
          title={data.title}
          className="mb-8 md:mb-10"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)] md:grid-rows-[auto_1fr] md:gap-x-12 lg:gap-x-14 md:gap-y-6">
          <motion.div
            className="w-full md:col-start-1 md:row-start-1"
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
                width={800}
                height={1000}
                className="w-full object-cover aspect-[4/5] transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:col-start-2 md:row-start-1 md:row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
                <motion.button
                  key={tabKey}
                  type="button"
                  aria-pressed={activeTab === tabKey}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveTab(tabKey)}
                  className={`text-sm font-medium cursor-pointer border px-4 py-2 rounded-full transition-colors duration-200 ${
                    activeTab === tabKey
                      ? 'bg-aqua/10 border-aqua/30 text-aqua'
                      : 'bg-transparent border-white/10 text-offwhite/55 hover:text-offwhite hover:border-white/20'
                  }`}
                >
                  {data.tabs[tabKey].label}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 gap-3 lg:grid-cols-2"
              >
                {data.tabs[activeTab].items.map((item, index) => (
                  <AboutTabItem key={item.title} item={item} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Last in the DOM so mobile reading order matches what's on screen
              (photo, bio, snapshot); at md+ the explicit column/row placement —
              not source order — puts it back under the photo. `self-start` is
              load-bearing: the text column spans both rows and is much taller
              than the photo, so without it this card stretches to fill row 2
              (686px tall at 768px, most of it empty). */}
          <motion.div
            {...snapshotSpotlight}
            className="spotlight-card rounded-2xl p-5 self-start md:col-start-1 md:row-start-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
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
          </motion.div>

        </div>
      </div>
    </section>
  )
}
