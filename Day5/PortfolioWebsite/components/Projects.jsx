import React from 'react'
import NavBar from './NavBar'
import Project from './Project'
import ProjectsData from '../ProjectsData.json'

const Projects = () => {
  return (
    <>
      <NavBar />
      <h1 className='font-bold text-4xl text-center mt-10'>Projects</h1>
      <div className="grid grid-cols-3 grid-rows-2 place-items-center my-10 px-32 max-[1335px]:px-20 max-[1245px]:px-10 max-[1165px]:grid-cols-2 max-[830px]:px-4 max-[760px]:grid-cols-1" style={{rowGap:'4rem'}}>
        {ProjectsData.map((project, index) => (
          <Project key={index} project={project} />))}
      </div>
    </>
  )
}

export default Projects