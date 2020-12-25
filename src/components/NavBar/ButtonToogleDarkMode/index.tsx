import React from 'react'

import useDarkMode from '../../../hooks/useDarkMode'

const ButtonToggleDarkMode = () => {
  const { isDarkMode, setDarkMode, setLightMode } = useDarkMode()

  const handleClick = () => {
    isDarkMode ? setLightMode() : setDarkMode()
  }

  return (
    <div className="button-toggle-dark-mode" onClick={handleClick}>
      <i className={`fas ${isDarkMode ? 'fa-tint-slash' : 'fa-tint'}`}></i>
    </div>
  )
}

export default React.memo(ButtonToggleDarkMode)
