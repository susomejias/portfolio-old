import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import CardPostDevto from './index'

describe('<CardPostDevto>', () => {
  const componentProps = {
    image: '/img/promises',
    title: 'title test',
    description: 'description',
    commentsCount: 1,
    reactions: 4,
    url: 'https://dev.to/theneonproject/translations-for-react-using-i18n-hook-1616',
    tags: ['react', 'javascript']
  }

  it('should render card with a element', async () => {
    render(<CardPostDevto {...componentProps} />)
    const cardClickable = await document.querySelector('a.card-devto-post')

    expect(cardClickable).toBeInTheDocument()
  })
  it('should render card elements', async () => {
    render(<CardPostDevto {...componentProps} />)

    const cardTitle = await screen.getByText('title test')
    const cardDescription = await screen.getByText('description')
    const cardReactions = await screen.getByText('4')
    const cardReactTag = await screen.getByText('react')
    const cardJavascriptTag = await screen.getByText('javascript')

    expect(cardTitle).toBeInTheDocument()
    expect(cardDescription).toBeInTheDocument()
    expect(cardReactions).toBeInTheDocument()
    expect(cardReactTag).toBeInTheDocument()
    expect(cardJavascriptTag).toBeInTheDocument()
  })
})
