import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Footer from './index'

describe('<Footer>', () => {
  it('should render with text', async () => {
    render(<Footer />)
    const footerText = await screen.getByText('Hecho a mano con ❤️')

    expect(footerText).toBeInTheDocument()
  })
})
