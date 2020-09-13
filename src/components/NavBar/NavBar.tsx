import React from 'react'

import NavButton from './_children/NavButton'
import ButtonToggleDarkMode from './_children/ButtonToggleDarkMode'

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

      <NavButton text="Contacto" url="/contacto" iconClass="fas fa-at" />

      <ButtonToggleDarkMode />
    </nav>
  )
}

export default React.memo(NavBar)
