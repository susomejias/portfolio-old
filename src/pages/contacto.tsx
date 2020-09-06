import React from 'react'

import socialNetworks from '../assets/data/socialNetworks'
import RoundedImage from '../components/RoundedImage/RoundedImage'
import ButtonBadge from '../components/ButtonBadge/ButtonBadge'

const Contact = () => {
  return (
    <div className="wrapper contact-page">
      <h1 className="page-title tracking-in-expand">Contacto</h1>
      <RoundedImage image="/img/portfolio-logo" size="large" />

      <h2>Suso Mejías</h2>

      <ButtonBadge
        text="Descarga mi CV actualizado"
        url="https://drive.google.com/file/d/1OKxUf3lCbID8JA38T_D3q_WLSvDuizow/view"
        isTargetBlank={true}
      />

      <div className="container_social_networks">
        {socialNetworks.map((socialNetwork: SocialNetwork, index: number) => {
          return (
            <a
              key={index}
              href={socialNetwork.url}
              target="_blank"
              rel="noreferrer"
              title={socialNetwork.name}
            >
              <i className={socialNetwork.icon}></i>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(Contact)
