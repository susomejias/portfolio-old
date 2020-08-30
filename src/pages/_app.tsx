import React from 'react'
import { AppProps } from 'next/app'

import Head from '../components/Head/Head'
import Layout from '../layouts/Layout'

import '../styles/globals.scss'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
