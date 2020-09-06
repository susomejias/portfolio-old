import React from 'react'
import Head from 'next/head'

const DefaultMetaTags = () => (
  <Head>
    <title>Susomejias | Web developer</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
    />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
)

export default DefaultMetaTags
