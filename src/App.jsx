import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black text-offwhite font-sans min-h-screen">
      <Navbar />
      <Hero />
      <div className="gradient-divider" />
      <About />
      <div className="gradient-divider" />
      <Experience />
      <div className="gradient-divider" />
      <Education />
      <div className="gradient-divider" />
      <div className="bg-dkblue">
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
