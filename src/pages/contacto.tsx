import React from 'react'
import Link from 'next/link'

import socialNetworks from '../assets/data/socialNetworks'
import RoundedImage from '../components/RoundedImage'
import ButtonBadge from '../components/ButtonBadge'

const Contact = (): JSX.Element => {
  return (
    <div className="wrapper contact-page">
      <h1 className="page-title ">Contacto</h1>
      <RoundedImage image="/img/logo-portfolio" size="large" />

      <h2>Suso Mejías</h2>

      <div className="container_btn-download-cv">
        <ButtonBadge
          text="Descarga mi CV actualizado"
          url="https://drive.google.com/file/d/1OKxUf3lCbID8JA38T_D3q_WLSvDuizow/view"
          isTargetBlank={true}
        />
      </div>

      <div className="container_social_networks">
        {socialNetworks.map((socialNetwork: SocialNetwork, index: number) => {
          return (
            <Link key={index} href={socialNetwork.url} passHref>
              <a target="_blank" rel="noreferrer" title={socialNetwork.name}>
                <i className={socialNetwork.icon}></i>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(Contact)
