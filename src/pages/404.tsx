import React from 'react'

import IconError404 from '../assets/icons/IconError404'

const custom404 = (): JSX.Element => {
  return (
    <section className="wrapper-error-page">
      <h1>Página no encontrada...</h1>
      <IconError404 width="200px" height="200px" />
    </section>
  )
}

export default custom404
