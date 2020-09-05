import React from 'react'

import aboutMe from '../assets/data/aboutMe'
import Card from '../components/Card/Card'

export default function Talks() {
  const aboutMeData = aboutMe
  return (
    <div className="wrapper">
      <h1 className="page-title">Sobre mí</h1>
      {aboutMeData.map((aboutMe: AboutMe, index) => {
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
    </div>
  )
}
