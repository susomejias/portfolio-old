import React from 'react'

import RoundedImage from '../components/RoundedImage/RoundedImage'
import ButtonBadge from '../components/ButtonBadge/ButtonBadge'
import Tag from '../components/Tag/Tag'
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

      <h1 className="tracking-in-expand">Suso Mejías</h1>

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
        <p
          className="more-skills text-focus-in"
          onClick={() => {
            next()
            setTimeout(() => {
              window.scrollTo(0, document.body.scrollHeight)
            }, 400)
          }}
        >
          Pulsa aquí para mostrar más habilidades
        </p>
      ) : null}
    </div>
  )
}

export default React.memo(Home)
