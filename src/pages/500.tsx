import React from 'react'

import IconError500 from '../assets/icons/IconError500'

const custom500 = (): JSX.Element => {
  return (
    <div className="wrapper-error-page">
      <h1>Error interno del servidor...</h1>
      <IconError500 width="200px" height="200px" />
    </div>
  )
}

export default custom500
