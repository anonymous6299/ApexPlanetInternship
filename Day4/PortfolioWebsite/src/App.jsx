import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

function App() {

  return (
    <>
      <h3 className='text-2xl text-center font-bold my-4'>PORTFOLIO</h3>
      <div className="heading flex justify-center space-x-4 items-end font-bold ">
        <h3 className='text-4xl opacity-70 max-[890px]:text-3xl max-[600px]:text-2xl max-[435px]:text-xl  max-[345px]:text-lg'>Hello, I'm</h3>
        <h1 className='text-8xl -mb-1 max-[890px]:text-7xl max-[600px]:text-5xl max-[600px]:mb-0  max-[435px]:text-4xl  max-[345px]:text-2xl'>Developer X</h1>
      </div>
      <About/>
      <Contact/>
      <Projects/>
    </>
  )
}

export default App
