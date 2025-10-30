import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Project from './sections/Project'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Project />
      </main>
    </>
  )
}

export default App