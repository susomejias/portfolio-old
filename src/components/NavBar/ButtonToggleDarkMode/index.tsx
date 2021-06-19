import React from 'react'

import { useGlobalState } from '../../../store/darkThemeStore'

const ButtonToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useGlobalState('isDarkMode')

  const handleClick = () => setIsDarkMode(!isDarkMode)

  return (
    <button className="button-toggle-dark-mode" onClick={handleClick}>
      <div className={`sun sun-logo ${isDarkMode ? 'animate-hide-sun' : ''}`}>
        <i className="fas fa-sun"></i>
      </div>
      <div
        className={`moon moon-logo ${isDarkMode ? 'animate-show-moon' : ''}`}
      >
        <i className="fas fa-moon"></i>
      </div>
    </button>
  )
}

export default React.memo(ButtonToggleDarkMode)
