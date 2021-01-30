import React, { useRef } from 'react'
import Head from 'next/head'

import usePaginationArray from '../hooks/usePaginateArray'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import projects from '../assets/data/projects'
import Card from '../components/Card'
import ButtonScrollToTop from '../components/ButtonScrollToTop'

const Projects = (): JSX.Element => {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    projects,
    2
  )

  const refTriggerElement = useRef(null)
  useInfiniteScroll(refTriggerElement, next)

  return (
    <>
      <Head>
        <title>Susomejias | Proyectos</title>
        <meta
          name="description"
          content="Proyectos educativos, personales y profesionales con los que me sigo formando día a día"
        />
      </Head>
      <div className="wrapper">
        <h1 className="page-title ">Proyectos</h1>
        {dataDisplayed.map((project: Project, index) => {
          return (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              showPrivateCodeMessage={project.url === '#'}
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
    </>
  )
}

export default React.memo(Projects)
