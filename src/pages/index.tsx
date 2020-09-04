import React from 'react'

import ButtonBadge from '../components/ButtonBadge/ButtonBadge'

export default function Home() {
  return (
    <>
      <h1>Index</h1>
      <ButtonBadge text="Hola" isLink={false} url="#" isTargetBlank={false} />
    </>
  )
}
