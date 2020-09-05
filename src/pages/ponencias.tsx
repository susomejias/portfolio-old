import React from 'react'

import talks from '../assets/data/talks'
import Card from '../components/Card/Card'

export default function Talks() {
  const talksData = talks
  return (
    <div className="wrapper">
      <h1 className="page-title">Ponencias</h1>
      {talksData.map((talk: Talk, index) => {
        return (
          <Card
            key={index}
            image={talk.image}
            title={talk.title}
            description={talk.description}
            showPrivateCodeMessagge={talk.url === '#'}
            url={talk.url}
            authors={talk.speakers}
          />
        )
      })}
    </div>
  )
}
