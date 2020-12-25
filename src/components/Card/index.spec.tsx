import React from 'react'
import { mount } from 'enzyme'

import Card from './index'

describe('<Card>', () => {
  const authors: Author[] = [{ name: 'Suso Mejías', image: '/img/avatar' }]
  const componentPropsPrivateCode = {
    image: '/img/promises',
    title: 'Card title',
    description: 'Card description',
    showPrivateCodeMessage: true,
    url: '#',
    authors: authors
  }
  const wrapperWithPropsPrivateCode = mount(
    <Card {...componentPropsPrivateCode} />
  )
  it('should render', () => {
    expect(wrapperWithPropsPrivateCode).toBeDefined()
  })
  it('should render card with div element', () => {
    expect(wrapperWithPropsPrivateCode.find('div.card').length).toEqual(1)
  })
  it('should render card elements', () => {
    expect(wrapperWithPropsPrivateCode.find('.card-title').text()).toEqual(
      'Card title'
    )
    expect(
      wrapperWithPropsPrivateCode.find('.card-description').text()
    ).toEqual('Card description')

    expect(
      wrapperWithPropsPrivateCode.find('.card-author-name').first().text()
    ).toEqual('Suso Mejías')
  })

  const componentPropsNotPrivateCodeIsLink = {
    image: '/img/promises',
    title: 'Card title',
    description: 'Card description',
    showPrivateCodeMessage: false,
    url: 'https://www.google.es',
    authors: authors
  }
  const wrapperWithPropsNotPrivateCodeIsLink = mount(
    <Card {...componentPropsNotPrivateCodeIsLink} />
  )
  it('should render', () => {
    expect(wrapperWithPropsNotPrivateCodeIsLink).toBeDefined()
  })
  it('should render card with a element', () => {
    expect(wrapperWithPropsNotPrivateCodeIsLink.find('a.card').length).toEqual(
      1
    )
  })
  it('should render card elements', () => {
    expect(
      wrapperWithPropsNotPrivateCodeIsLink.find('.card-title').text()
    ).toEqual('Card title')
    expect(
      wrapperWithPropsNotPrivateCodeIsLink.find('.card-description').text()
    ).toEqual('Card description')

    expect(
      wrapperWithPropsNotPrivateCodeIsLink
        .find('.card-author-name')
        .first()
        .text()
    ).toEqual('Suso Mejías')
  })

  const authorsWithLengthGreaterThanFour: Author[] = [
    { name: 'Suso Mejías', image: '/img/avatar' },
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
  const wrapperWithAuthorsWithLengthGreaterThanFour = mount(
    <Card {...componentPropsAuthorsWithLengthGreaterThanFour} />
  )
  it('should render', () => {
    expect(
      wrapperWithAuthorsWithLengthGreaterThanFour.find('.card-author-name')
        .length
    ).toEqual(0)
  })
})
