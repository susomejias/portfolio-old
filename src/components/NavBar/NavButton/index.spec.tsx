import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import NavButton from './index'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('<NavButton>', () => {
  it('should be the highlighted button because its url is toEqual to the current url', async () => {
    useRouter.mockImplementation(() => ({
      pathname: '/'
    }))
    const componentProps = {
      text: 'navButtonText',
      url: '/',
      iconClass: 'fas fa-home'
    }
    render(<NavButton {...componentProps} />)

    const button = await screen.getByText('navButtonText').closest('a')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/')
    expect(button.classList.contains('current')).toBe(true)
  })

  it('should not be the highlighted button because its url is not toEqual to the current url', async () => {
    useRouter.mockImplementation(() => ({
      pathname: '/projects'
    }))

    const componentPropsNotCurrentRoute = {
      text: 'navButtonText',
      url: '/url-test',
      iconClass: 'fas fa-briefcase'
    }
    render(<NavButton {...componentPropsNotCurrentRoute} />)
    const button = await screen.getByText('navButtonText').closest('a')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/url-test')
    expect(button.classList.contains('current')).toBe(false)
  })
})
