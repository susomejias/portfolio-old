import React, { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'

import Head from '../components/Head/Head'
import Layout from '../layouts/Layout'

import '../styles/globals.scss'

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(progress + 50)
    setTimeout(() => {
      setProgress(100)
    }, 500)
  }, [router])

  return (
    <>
      <LoadingBar
        color="#B9B4F5"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default React.memo(App)
