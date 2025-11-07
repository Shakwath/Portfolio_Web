import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        
        <Skills></Skills>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
