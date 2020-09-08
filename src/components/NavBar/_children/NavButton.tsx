import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavButtonProps {
  text: string
  url: string
  iconClass: string
}

const NavButton = ({ text, url, iconClass }: NavButtonProps) => {
  const router = useRouter()

  const markCurrentRouteButton = () => {
    return url === router.pathname ? 'current' : null
  }

  return (
    <div className="nav-button">
      <Link href={url}>
        <a className={`${markCurrentRouteButton()}`} aria-label={text}>
          <span>{text}</span>
          <i className={iconClass}></i>
        </a>
      </Link>
    </div>
  )
}

export default React.memo(NavButton)
