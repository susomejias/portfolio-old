import React, { useRef } from 'react'

import usePaginationArray from '../hooks/usePaginateArray'
import useInfiniteScroll from '../hooks/useInfiniteScroll'
import aboutMe from '../assets/data/aboutMe'
import Card from '../components/Card/Card'

export default function AboutMe() {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    aboutMe,
    2
  )

  const refTriggerElement = useRef(null)
  useInfiniteScroll(refTriggerElement, next)

  return (
    <div className="wrapper">
      <h1 className="page-title tracking-in-expand">Sobre mí</h1>
      {dataDisplayed.map((aboutMe: AboutMe, index) => {
        return (
          <Card
            key={index}
            image={aboutMe.image}
            title={aboutMe.question}
            description={aboutMe.response}
            showPrivateCodeMessagge={false}
            url="#"
            authors={[]}
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
