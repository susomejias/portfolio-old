import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <Link href="/ponencias">
        <a>Ponencias</a>
      </Link>
      <Link href="/devto-posts">
        <a>Dev.to posts</a>
      </Link>
      <Link href="/sobre-mi">
        <a>sobre mí</a>
      </Link>
    </nav>
  )
}

export default NavBar
