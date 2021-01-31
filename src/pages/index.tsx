import React from 'react'
import Head from 'next/head'

import RoundedImage from '../components/RoundedImage'
import ButtonBadge from '../components/ButtonBadge'
import Tag from '../components/Tag'
import skills from '../assets/data/skills'
import usePaginationArray from '../hooks/usePaginateArray'

const Home = (): JSX.Element => {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    skills,
    8
  )
  return (
    <>
      <Head>
        <title>Susomejias | Web developer</title>
        <meta
          name="description"
          content="Portfolio de Susomejías, Desarrollador Web Full-Stack y técnico en sistemas informáticos"
        />
      </Head>

      <div className="wrapper home-page">
        <RoundedImage image="/img/avatar.png" size="medium" priority={true} />

        <h1>Suso Mejías</h1>

        <div className="container-button-badge">
          <ButtonBadge text="Desarrollador Web" url="#" isTargetBlank={false} />
        </div>

        <p className="quote">
          <i>
            La mayoría de los buenos programadores programan, no porque esperan
            que se les pague o por adulación por parte del público, sino porque
            es divertido programar.
          </i>
          <i className="author">- Linus Torvalds -</i>
        </p>

        <div className="skills-container">
          {dataDisplayed.map((skill: string, index: number) => {
            return <Tag key={index} text={skill} />
          })}
        </div>

        {currentPage < maxPage ? (
          <a
            aria-label="more skills"
            className="more-skills heartbeat fas fa-angle-double-up"
            onClick={(ev) => {
              ev.preventDefault()
              next()
              setTimeout(() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth'
                })
              }, 400)
            }}
          ></a>
        ) : null}
      </div>
    </>
  )
}

export default React.memo(Home)
