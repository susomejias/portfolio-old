import React from 'react'

import Navbar from '../components/NavBar/NavBar'

const Layout = (props) => {
  // eslint-disable-next-line
  const { children } = props

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
