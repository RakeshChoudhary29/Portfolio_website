import { MotionConfig } from 'framer-motion'
import { getPortfolioFromSearch, getProjectFromSearch, buildMetadata } from './data/portfolios'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Seo from './components/Seo'
import ScrollToTop from './components/ui/ScrollToTop'

export default function App() {
  const search = typeof window !== 'undefined' ? window.location.search : ''
  const portfolio = getPortfolioFromSearch(search)
  const project = getProjectFromSearch(search, portfolio)

  const metadata = buildMetadata(portfolio, project)

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-black text-offwhite font-sans min-h-screen">
        <Seo metadata={metadata} />
        <Navbar activePortfolioKey={portfolio.key} />
        <main>
          <Hero data={portfolio.hero} />
          <div className="gradient-divider" />
          <About data={portfolio.about} />
          <div className="gradient-divider" />
          <Experience data={portfolio.experience} />
          <div className="gradient-divider" />
          <Education data={portfolio.education} />
          <div className="gradient-divider" />
          <div className="section-alt">
            <Projects data={portfolio.projects} portfolioKey={portfolio.key} />
          </div>
          <Contact data={portfolio.contact} />
        </main>
        <Footer subtitle={portfolio.footerSubtitle} />
        <ScrollToTop />
      </div>
    </MotionConfig>
  )
}
