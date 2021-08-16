import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import { useMediaPredicate } from 'react-media-hook'

import HeadComponent from '../components/Head/Head'
import Layout from '../layouts/Layout'
import { useGlobalState } from '../store/darkThemeStore'
import '../styles/globals.scss'

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [isDarkMode, setIsDarkMode] = useGlobalState('isDarkMode')
  const isPrefersDarkColorScheme = useMediaPredicate(
    '(prefers-color-scheme: dark)'
  )

  const handleRouteChangeStart = () => {
    setProgress(progress + 20)
  }

  const handleRouteChangeComplete = () => {
    setProgress(100)
  }

  const setClassesForDarkMode = () => {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
  }

  const setClassesForLightMode = () => {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  }

  useEffect(() => {
    isDarkMode ? setClassesForDarkMode() : setClassesForLightMode()
    isPrefersDarkColorScheme ? setIsDarkMode(true) : setIsDarkMode(false)

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

  useEffect(() => {
    isDarkMode ? setClassesForDarkMode() : setClassesForLightMode()
  }, [isDarkMode])

  return (
    <div className="content">
      <HeadComponent />
      <LoadingBar
        color="#FBBD03"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default App
