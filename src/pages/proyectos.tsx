import React, { useRef } from 'react'

import usePaginationArray from '../hooks/usePaginateArray'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import projects from '../assets/data/projects'
import Card from '../components/Card/Card'

export default function Projects() {
  const projectsData = projects

  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    projectsData,
    2
  )

  const refTriggerElement = useRef(null)
  useInfiniteScroll(refTriggerElement, next)

  return (
    <div className="wrapper">
      <h1 className="page-title">Proyectos</h1>
      {dataDisplayed.map((project: Project, index) => {
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

      {currentPage < maxPage ? (
        <p
          className="infinite-scroll-show-more"
          onClick={next}
          ref={refTriggerElement}
        >
          Pulsa aquí para mostrar más
        </p>
      ) : null}

      <i
        onClick={() => {
          window.scrollTo(0, 0)
        }}
        className="scroll-top-button fas fa-angle-up"
      ></i>
    </div>
  )
}
