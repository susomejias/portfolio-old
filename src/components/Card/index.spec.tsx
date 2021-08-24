import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Card from './index'

describe('<Card>', () => {
  const authors: Author[] = [{ name: 'Susomejias', image: '/img/avatar' }]
  const componentPropsPrivateCode = {
    image: '/img/promises',
    title: 'Card title',
    description: 'Card description',
    showPrivateCodeMessage: true,
    url: '#',
    authors: authors
  }

  it('should render card with private code message', async () => {
    render(<Card {...componentPropsPrivateCode} />)
    const privateCodeMessage = await screen.getByText('Código privado')

    expect(privateCodeMessage).toBeInTheDocument()
  })

  it('should render card elements with private code props', async () => {
    render(<Card {...componentPropsPrivateCode} />)
    const cardTitle = await screen.getByText('Card title')
    const cardDescription = await screen.getByText('Card description')
    const cardAuthorName = await screen.getByText('Susomejias')

    expect(cardTitle).toBeInTheDocument()
    expect(cardDescription).toBeInTheDocument()
    expect(cardAuthorName).toBeInTheDocument()
  })

  const componentPropsNotPrivateCodeIsLink = {
    image: '/img/promises',
    title: 'Card title',
    description: 'Card description',
    showPrivateCodeMessage: false,
    url: 'https://www.google.es',
    authors: authors
  }

  it('should render card with not private code message', async () => {
    render(<Card {...componentPropsNotPrivateCodeIsLink} />)
    const privateCodeMessage = await document.querySelector(
      '.private-code-message'
    )

    expect(privateCodeMessage).not.toBeInTheDocument()
  })

  it('should render card with a element', async () => {
    render(<Card {...componentPropsNotPrivateCodeIsLink} />)
    const cardClickable = await document.querySelector('a.card')

    expect(cardClickable).toBeInTheDocument()
  })

  it('should render card elements with not private code props', async () => {
    render(<Card {...componentPropsNotPrivateCodeIsLink} />)
    const cardTitle = await screen.getByText('Card title')
    const cardDescription = await screen.getByText('Card description')
    const cardAuthorName = await screen.getByText('Susomejias')

    expect(cardTitle).toBeInTheDocument()
    expect(cardDescription).toBeInTheDocument()
    expect(cardAuthorName).toBeInTheDocument()
  })

  it('should not render authors names when authors length is greater that 4', async () => {
    const authorsWithLengthGreaterThanFour: Author[] = [
      { name: 'Susomejias', image: '/img/avatar' },
      { name: 'Author1', image: '/img/avatar' },
      { name: 'Author2', image: '/img/avatar' },
      { name: 'Author3', image: '/img/avatar' },
      { name: 'Author4', image: '/img/avatar' }
    ]
    const componentPropsAuthorsWithLengthGreaterThanFour = {
      image: '/img/promises',
      title: 'Card title',
      description: 'Card description',
      showPrivateCodeMessage: true,
      url: '#',
      authors: authorsWithLengthGreaterThanFour
    }

    render(<Card {...componentPropsAuthorsWithLengthGreaterThanFour} />)
    const authorsNames = await document.querySelector('.card-author-name')

    expect(authorsNames).not.toBeInTheDocument()
  })
})
