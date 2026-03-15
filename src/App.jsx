import { getPortfolioFromSearch, getPortfolioOptions } from './data/portfolios'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const portfolio = getPortfolioFromSearch(
    typeof window !== 'undefined' ? window.location.search : '',
  )
  const portfolioOptions = getPortfolioOptions()

  return (
    <div className="bg-black text-offwhite font-sans min-h-screen">
      <Navbar
        portfolioOptions={portfolioOptions}
        activePortfolioKey={portfolio.key}
      />
      <Hero data={portfolio.hero} />
      <div className="gradient-divider" />
      <About data={portfolio.about} />
      <div className="gradient-divider" />
      <Experience data={portfolio.experience} />
      <div className="gradient-divider" />
      <Education data={portfolio.education} />
      <div className="gradient-divider" />
      <div className="bg-dkblue">
        <Projects data={portfolio.projects} />
      </div>
      <Contact data={portfolio.contact} />
      <Footer subtitle={portfolio.footerSubtitle} />
    </div>
  )
}
