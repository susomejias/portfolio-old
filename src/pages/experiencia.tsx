import React from 'react'
import Head from 'next/head'

import ButtonScrollToTop from '../components/ButtonScrollToTop'
import ExperienceTimeline from '../components/ExperienceTimeline'
import experience from '../assets/data/experience'

const Experience = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Susomejias | Experiencia laboral</title>
        <meta
          name="description"
          content="Experiencia laboral, empresas dónde he crecido y mejorado mis habilidades como persona y programador"
        />
      </Head>
      <div className="wrapper">
        <h1 className="page-title ">Experiencia</h1>
        <ExperienceTimeline experience={experience} />
        <ButtonScrollToTop />
      </div>
    </>
  )
}

export default Experience
