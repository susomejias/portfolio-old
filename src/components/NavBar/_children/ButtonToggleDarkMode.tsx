import React, { useState, useEffect } from 'react'

import useDarkMode from '../../../hooks/useDarkMode'

const ButtonToggleDarkMode = () => {
  const [iconClassName, setIconClassName] = useState('fas fa-tint')

  const { isDarkMode, setDarkMode, setLightMode } = useDarkMode()

  useEffect(() => {
    isDarkMode
      ? setIconClassName('fas fa-tint-slash')
      : setIconClassName('fas fa-tint')
  }, [isDarkMode])

  const handleClick = () => {
    isDarkMode ? setLightMode() : setDarkMode()
  }

  return (
    <div className="button-toggle-dark-mode" onClick={handleClick}>
      <i className={iconClassName}></i>
    </div>
  )
}

export default React.memo(ButtonToggleDarkMode)
