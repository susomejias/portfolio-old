import React from 'react'
import Head from 'next/head'
import InfiniteScroll from 'react-infinite-scroll-component'

import usePaginationArray from '../hooks/usePaginateArray'
import projects from '../assets/data/projects'
import Card from '../components/Card'
import ButtonScrollToTop from '../components/ButtonScrollToTop'

const Projects = (): JSX.Element => {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    projects,
    3
  )

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
        <InfiniteScroll
          dataLength={dataDisplayed.length}
          next={next}
          hasMore={currentPage < maxPage}
          loader={null}
          scrollThreshold={0.3}
          style={{
            width: '100%',
            overflow: 'hidden'
          }}
        >
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
        </InfiniteScroll>
        <ButtonScrollToTop />
      </div>
    </>
  )
}

export default React.memo(Projects)
