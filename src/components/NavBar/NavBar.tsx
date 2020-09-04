import React from 'react'

import NavButton from './_children/NavButton'

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavButton text="Inicio" url="/" iconClass="fas fa-home" />

      <NavButton
        text="Proyectos"
        url="/proyectos"
        iconClass="fas fa-briefcase"
      />

      <NavButton
        text="Ponencias"
        url="/ponencias"
        iconClass="fas fa-bullhorn"
      />

      <NavButton
        text="Dev.to"
        url="/devto-posts"
        iconClass="fab fa-dev fa-lg"
      />

      <NavButton
        text="Sobre mí"
        url="/sobre-mi"
        iconClass="fas fa-question-circle"
      />

      <NavButton text="Contacto" url="/contacto" iconClass="fas fa-at" />
    </nav>
  )
}

export default NavBar
