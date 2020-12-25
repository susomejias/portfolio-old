import React from 'react'

import Navbar from '../components/NavBar'
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

export default React.memo(Layout)
