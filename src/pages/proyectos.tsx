import React, { useRef } from 'react'

import usePaginationArray from '../hooks/usePaginateArray'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import projects from '../assets/data/projects'
import Card from '../components/Card/Card'
import ButtonScrollToTop from '../components/ButtonScrollToTop/ButtonScrollToTop'

const Projects = () => {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    projects,
    2
  )

  const refTriggerElement = useRef(null)
  useInfiniteScroll(refTriggerElement, next)

  return (
    <div className="wrapper">
      <h1 className="page-title tracking-in-expand">Proyectos</h1>
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

      <ButtonScrollToTop />
    </div>
  )
}

export default React.memo(Projects)
