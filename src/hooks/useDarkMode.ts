import { useState } from 'react'

interface IUseDarkMode {
  isDarkMode: boolean
  setDarkMode: () => void
  setLightMode: () => void
}

const useDarkMode = (): IUseDarkMode => {
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
