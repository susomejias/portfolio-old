import React from 'react'

import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
const Layout = (props) => {
  // eslint-disable-next-line
  const { children } = props

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default React.memo(Layout)
