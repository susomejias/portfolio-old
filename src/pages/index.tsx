import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import RoundedImage from '../components/RoundedImage'
import ButtonBadge from '../components/ButtonBadge'
import Tag from '../components/Tag'
import skills from '../assets/data/skills'
import usePaginationArray from '../hooks/usePaginateArray'
import socialNetworks from '../assets/data/socialNetworks'

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
          content="Portfolio de Susomejías, Desarrollador FrontEnd y técnico en sistemas informáticos"
        />
      </Head>

      <div className="wrapper home-page">
        <RoundedImage image="/img/avatar.jpeg" size="medium" priority={true} />

        <h1>Susomejias</h1>

        <div className="container-button-badge">
          <ButtonBadge
            text="FrontEnd Developer"
            url="#"
            isTargetBlank={false}
          />
        </div>

        <div className="container_social_networks">
          {socialNetworks.map((socialNetwork: SocialNetwork, index: number) => {
            return (
              <Link key={index} href={socialNetwork.url} passHref>
                <a target="_blank" rel="noreferrer" title={socialNetwork.name}>
                  <i className={socialNetwork.icon} />
                </a>
              </Link>
            )
          })}
        </div>

        <h2 className="quote">
          Apasionado de la tecnología, trabajador, perfeccionista, amante del
          Open-Source y del trabajo en equipo.
        </h2>

        <div className="skills-container">
          {dataDisplayed.map((skill: string, index: number) => {
            return <Tag key={index} text={skill} />
          })}
        </div>

        <a
          aria-label="more skills"
          className={`${currentPage < maxPage ? 'show' : 'hidden'} more-skills`}
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
        >
          Mostrar más
        </a>
      </div>
    </>
  )
}

export default Home
