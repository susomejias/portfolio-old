import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

import ButtonToggleDarkMode from './index'

describe('<ButtonToggleDarkMode>', () => {
  it('should show the sun icon when initial value of dark mode is false', async () => {
    render(<ButtonToggleDarkMode />)

    const buttonHide = await document.querySelector('.animate-hide-sun')
    const buttonShow = await document.querySelector('.animate-show-moon')

    expect(buttonHide).toBeInTheDocument()
    expect(buttonShow).toBeInTheDocument()
  })

  it('should show the moon icon when dark mode is activated', async () => {
    render(<ButtonToggleDarkMode />)

    const toggleButton = await document.querySelector(
      '.button-toggle-dark-mode'
    )
    fireEvent.click(toggleButton)

    const buttonHide = await document.querySelector('.animate-hide-sun')
    const buttonShow = await document.querySelector('.animate-show-moon')

    expect(buttonHide).not.toBeInTheDocument()
    expect(buttonShow).not.toBeInTheDocument()
  })
})
