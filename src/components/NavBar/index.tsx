import React from 'react'

import {
  HOME_HREF,
  POSTS_HREF,
  PRESENTATIONS_HREF,
  PROJECTS_HREF
} from '../../constants/hrefs'
import NavButton from './NavButton'
import ButtonToggleDarkMode from './ButtonToggleDarkMode'

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavButton text="Inicio" url={HOME_HREF} iconClass="fas fa-home" />

      <NavButton
        text="Proyectos"
        url={PROJECTS_HREF}
        iconClass="fas fa-briefcase"
        dataCy="projects-link"
      />

      <NavButton
        text="Ponencias"
        url={PRESENTATIONS_HREF}
        iconClass="fas fa-bullhorn"
        dataCy="presentations-link"
      />

      <NavButton
        text="Dev.to"
        url={POSTS_HREF}
        iconClass="fab fa-dev fa-lg"
        dataCy="posts-link"
      />
      <ButtonToggleDarkMode />
    </nav>
  )
}

export default React.memo(NavBar)
