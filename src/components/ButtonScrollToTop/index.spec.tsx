import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

import ButtonScrollToTop from './index'

describe('<ButtonScrollToTop>', () => {
  it('should render button and click', async () => {
    window.scrollTo = jest.fn()

    render(<ButtonScrollToTop />)
    const button = await document.querySelector('.scroll-top-button')

    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledTimes(1)
  })
})
