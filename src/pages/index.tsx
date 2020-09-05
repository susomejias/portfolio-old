import React from 'react'

import RoundedImage from '../components/RoundedImage/RoundedImage'
import ButtonBadge from '../components/ButtonBadge/ButtonBadge'

export default function Home() {
  return (
    <div className="wrapper home-page">
      <RoundedImage image="/img/avatar" size="medium" />

      <h1>Suso Mejías</h1>

      <div className="container-button-badge">
        <ButtonBadge text="Desarrollador Web" url="#" isTargetBlank={false} />
      </div>

      <h4 className="quote">
        <i>
          La mayoría de los buenos programadores programan, no porque esperan
          que se les pague o por adulación por parte del público, sino porque es
          divertido programar.
        </i>
        <i className="author">- Linus Torvalds -</i>
      </h4>
    </div>
  )
}
