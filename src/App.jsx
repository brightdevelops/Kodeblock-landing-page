import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Project />
        <About />
        <Team />
        <CTA />
        <Footer />
      </main>
    </>
  )
}

export default App