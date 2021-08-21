import React from 'react'
import Image from 'next/image'

const custom404 = (): JSX.Element => {
  const imageUrl = '/img/404.svg'
  return (
    <div className="wrapper-error-page">
      <h1>Página no encontrada...</h1>
      <Image
        src={imageUrl}
        alt="Página no encontrada"
        width="200px"
        height="200px"
        layout="intrinsic"
      />
    </div>
  )
}

export default custom404
