import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Tag from './index'

describe('<Tag>', () => {
  it('should render text in Tag', async () => {
    const componentProps = {
      text: 'Test text'
    }

    render(<Tag {...componentProps} />)
    const tag = await screen.getByText('Test text')

    expect(tag).toBeInTheDocument()
  })
})
