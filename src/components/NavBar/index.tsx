import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import {
  CONTACT_HREF,
  HOME_HREF,
  POSTS_HREF,
  PRESENTATIONS_HREF,
  PROJECTS_HREF
} from '../../constants/hrefs'

import NavButton from './NavButton'
import ButtonToggleDarkMode from './ButtonToogleDarkMode'

const NavBar = () => {
  const [visible, setVisible] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    setVisible(prevPos.y < currPos.y || (currPos.y >= 0 && currPos.y <= 5))
  })
  return (
    <nav className={`navbar${!visible ? ' hidden' : ''}`}>
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

      <NavButton
        text="Contacto"
        url={CONTACT_HREF}
        iconClass="fas fa-at"
        dataCy="contact-link"
      />

      <ButtonToggleDarkMode />
    </nav>
  )
}

export default React.memo(NavBar)
