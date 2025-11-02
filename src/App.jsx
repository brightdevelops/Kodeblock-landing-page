import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Team from './components/Team'


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