import React from 'react'
import Head from 'next/head'
import InfiniteScroll from 'react-infinite-scroll-component'

import usePaginationArray from '../hooks/usePaginateArray'
import talks from '../assets/data/talks'
import Card from '../components/Card'
import ButtonScrollToTop from '../components/ButtonScrollToTop'

const Talks = (): JSX.Element => {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    talks,
    3
  )

  return (
    <>
      <Head>
        <title>Susomejias | Ponencias</title>
        <meta
          name="description"
          content="Ponencias sobre diversos temas tecnológicos, desde talleres con raspberrys hasta frameworks webs"
        />
        <link rel="canonical" href="https://susomejias.dev/ponencias" />
      </Head>
      <section className="wrapper-scroll">
        <h1 className="page-title ">Ponencias</h1>
        <InfiniteScroll
          dataLength={dataDisplayed.length}
          next={next}
          hasMore={currentPage < maxPage}
          loader={null}
          scrollThreshold={0.7}
          style={{
            width: '100%',
            overflow: 'hidden'
          }}
        >
          {dataDisplayed.map((talk: Talk, index) => {
            return (
              <Card
                key={index}
                image={talk.image}
                title={talk.title}
                description={talk.description}
                showPrivateCodeMessage={talk.url === '#'}
                url={talk.url}
                authors={talk.speakers}
                priority={true}
              />
            )
          })}
        </InfiniteScroll>
        <ButtonScrollToTop />
      </section>
    </>
  )
}

export default Talks
