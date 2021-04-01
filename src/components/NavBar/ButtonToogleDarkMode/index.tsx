import React from 'react'

import { useGlobalState } from '../../../store/darkThemeStore'

const ButtonToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useGlobalState('isDarkMode')

  const handleClick = () => setIsDarkMode(!isDarkMode)

  return (
    <div className="button-toggle-dark-mode" onClick={handleClick}>
      <i className={`fas ${isDarkMode ? 'fa-tint-slash' : 'fa-tint'}`}></i>
    </div>
  )
}

export default React.memo(ButtonToggleDarkMode)
