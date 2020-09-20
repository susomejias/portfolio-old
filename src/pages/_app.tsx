import React, { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'

import HeadComponent from '../components/Head/Head'
import Layout from '../layouts/Layout'

import '../styles/globals.scss'

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props
  const router = useRouter()
  const [progress, setProgress] = useState(0)

  const handleRouteChangeStart = () => {
    setProgress(progress + 20)
  }

  const handleRouteChangeComplete = () => {
    setProgress(100)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeComplete)

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <HeadComponent />
      <LoadingBar
        color="#ff7eb3"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <body>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </body>
    </>
  )
}

export default App
