import { useState } from 'react'

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const setDarkMode = () => {
    setIsDarkMode(true)
    document.body.classList.add('dark')
  }

  const setLightMode = () => {
    setIsDarkMode(false)
    document.body.classList.remove('dark')
  }

  return { isDarkMode, setDarkMode, setLightMode }
}

export default useDarkMode
