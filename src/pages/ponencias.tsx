import React, { useRef } from 'react'
import Head from 'next/head'

import usePaginationArray from '../hooks/usePaginateArray'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import talks from '../assets/data/talks'
import Card from '../components/Card'
import ButtonScrollToTop from '../components/ButtonScrollToTop'

const Talks = (): JSX.Element => {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    talks,
    2
  )

  const refTriggerElement = useRef(null)
  useInfiniteScroll(refTriggerElement, next)

  return (
    <>
      <Head>
        <title>Susomejias | Ponencias</title>
        <meta
          name="description"
          content="Ponencias sobre diversos temas tecnológicos, desde talleres con raspberrys hasta frameworks webs"
        />
      </Head>
      <div className="wrapper">
        <h1 className="page-title ">Ponencias</h1>
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

export default React.memo(Talks)
