import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Project from './sections/Project'
import About from './sections/About'
import Team from './sections/Team'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Project />
        <About />
        <Team />
      </main>
    </>
  )
}

export default App