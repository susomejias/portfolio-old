import React from 'react'

import projects from '../assets/data/projects'
import Card from '../components/Card/Card'

export default function Projects() {
  const projectsData = projects
  return (
    <div className="wrapper">
      <h1 className="page-title">Proyectos</h1>
      {projectsData.map((project: Project, index) => {
        return (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            showPrivateCodeMessagge={project.url === '#'}
            url={project.url}
            authors={project.authors}
          />
        )
      })}
    </div>
  )
}
