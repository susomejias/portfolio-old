import React from 'react'
import Head from 'next/head'

const DefaultMetaTags = (): JSX.Element => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
    />
    <meta name="msapplication-TileColor" content="#fbbd03" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#fbbd03" />
  </Head>
)

export default DefaultMetaTags
