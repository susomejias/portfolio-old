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

  it('should render with text Link test', async () => {
    render(<ButtonBadge {...componentProps} />)
    const button = await screen.getByText('Link test')

    expect(button).toBeInTheDocument()
  })

  it('should render with url https://google.es/ when pass props with isLink to true', async () => {
    render(<ButtonBadge {...componentProps} />)
    const button = await screen.getByText('Link test')

    expect(button).toHaveAttribute('href', 'https://google.es')
  })

  it('should render with target _blank when pass props with isLink to true', async () => {
    render(<ButtonBadge {...componentProps} />)
    const button = await screen.getByText('Link test')

    expect(button).toHaveAttribute('target', '_blank')
  })

  it('simulate click when pass props with isLink to true', async () => {
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

  it('should render with text when pass props with isLink to false', async () => {
    render(<ButtonBadge {...componentPropsNotLinkbutton} />)
    const button = await screen.getByText('Link test')

    expect(button).toBeInTheDocument()
  })

  it('should not render with a element when pass props with isLink to false', async () => {
    render(<ButtonBadge {...componentPropsNotLinkbutton} />)
    const button = await screen.getByText('Link test')

    expect(button).not.toHaveAttribute('href')
  })
})
