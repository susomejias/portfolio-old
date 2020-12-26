import React from 'react'

import RoundedImage from '../components/RoundedImage'
import ButtonBadge from '../components/ButtonBadge'
import Tag from '../components/Tag'
import skills from '../assets/data/skills'
import usePaginationArray from '../hooks/usePaginateArray'

const Home = (): JSX.Element => {
  const { dataDisplayed, next, currentPage, maxPage } = usePaginationArray(
    skills,
    6
  )
  return (
    <div className="wrapper home-page">
      <RoundedImage image="/img/avatar" size="medium" />

      <h1>Suso Mejías</h1>

      <div className="container-button-badge">
        <ButtonBadge text="Desarrollador Web" url="#" isTargetBlank={false} />
      </div>

      <p className="quote">
        <i>
          La mayoría de los buenos programadores programan, no porque esperan
          que se les pague o por adulación por parte del público, sino porque es
          divertido programar.
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
  )
}

export default React.memo(Home)
