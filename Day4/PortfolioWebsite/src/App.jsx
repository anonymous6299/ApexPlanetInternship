import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

function App() {

  return (
    <>
      <h3 className='text-2xl text-center font-bold my-4'>PORTFOLIO</h3>
      <div className="heading flex justify-center space-x-4 items-end font-bold">
        <h3 className='text-4xl opacity-70'>Hello, I'm</h3>
        <h1 className='text-8xl -mb-1'>Developer X</h1>
      </div>
      <About/>
      <Contact/>
      <Projects/>
    </>
  )
}

export default App
