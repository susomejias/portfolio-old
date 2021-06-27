import React from 'react'
import Image from 'next/image'

const custom500 = (): JSX.Element => {
  const imageUrl = '/img/500.svg'
  return (
    <div className="wrapper-error-page">
      <h1>Error interno del servidor...</h1>
      <Image
        src={imageUrl}
        blurDataURL={imageUrl}
        placeholder="blur"
        alt="Error interno del servidor"
        width="200px"
        height="200px"
        layout="intrinsic"
      />
    </div>
  )
}

export default React.memo(custom500)
