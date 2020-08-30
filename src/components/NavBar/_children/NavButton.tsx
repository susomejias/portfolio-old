import React from 'react'
import Link from 'next/link'

interface NavButtonProps {
  text: string
  url: string
  iconClass: string
}

const NavButton = ({ text, url, iconClass }: NavButtonProps) => {
  return (
    <div className="nav-button">
      <Link href={url}>
        <a>
          <p>{text}</p>
          <i className={iconClass}></i>
        </a>
      </Link>
    </div>
  )
}

export default NavButton
