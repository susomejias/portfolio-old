import React from 'react'

import {
  EXPERIENCE_HREF,
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
        text="Experiencia"
        url={EXPERIENCE_HREF}
        iconClass="fas fa-briefcase"
        dataCy="experience-link"
      />

      <NavButton
        text="Proyectos"
        url={PROJECTS_HREF}
        iconClass="fas fa-bookmark"
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
