import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import ButtonBadge from './index'

describe('<ButtonBadge>', () => {
  const componentProps = {
    text: 'Link test',
    isLink: true,
    url: 'https://google.es',
    isTargetBlank: true
  }

  it('wrapperWithPropsLinkButton: should render with text Link test', async () => {
    render(<ButtonBadge {...componentProps} />)
    const button = await screen.getByText('Link test')

    expect(button).toBeInTheDocument()
  })

  it('wrapperWithPropsLinkButton: should render with url https://google.es/', async () => {
    render(<ButtonBadge {...componentProps} />)
    const button = await screen.getByText('Link test')

    expect(button).toHaveAttribute('href', 'https://google.es')
  })

  it('wrapperWithPropsLinkButton: should render with target _blank', async () => {
    render(<ButtonBadge {...componentProps} />)
    const button = await screen.getByText('Link test')

    expect(button).toHaveAttribute('target', '_blank')
  })

  it('wrapperWithPropsLinkButton: simulate click', async () => {
    render(<ButtonBadge {...componentProps} />)
    const button = await screen.getByText('Link test')

    fireEvent.click(button)
  })

  const componentPropsNotLinkbutton = {
    text: 'Link test',
    isLink: false,
    url: '#',
    isTargetBlank: false
  }

  it('wrapperWithPropsNotLinkbutton: should render with text', async () => {
    render(<ButtonBadge {...componentPropsNotLinkbutton} />)
    const button = await screen.getByText('Link test')

    expect(button).toBeInTheDocument()
  })

  it('wrapperWithPropsNotLinkbutton: should not render with a element', async () => {
    render(<ButtonBadge {...componentPropsNotLinkbutton} />)
    const button = await screen.getByText('Link test')

    expect(button).not.toHaveAttribute('href')
  })
})
