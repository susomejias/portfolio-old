import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import RoundedImage from '../components/RoundedImage'
import ButtonBadge from '../components/ButtonBadge'
import Tag from '../components/Tag'
import skills from '../assets/data/skills'
import socialNetworks from '../assets/data/socialNetworks'

const Home = (): JSX.Element => {
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
          {skills.map((skill: string, index: number) => {
            return <Tag key={index} text={skill} />
          })}
        </div>
      </div>
    </>
  )
}

export default Home
