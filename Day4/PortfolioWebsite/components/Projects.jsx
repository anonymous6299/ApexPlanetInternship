import React from 'react'
import NavBar from './NavBar'
import Project from './Project'
import ProjectsData from '../ProjectsData.json'

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3 grid-rows-2 pl-44 pr-40 py-20" style={{rowGap:'4rem'}}>
        {ProjectsData.map((project, index) => (
          <Project key={index} project={project} />))}
      </div>
    </>
  )
}

export default Projects