import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import NavBar from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('<NavBar>', () => {
  useRouter.mockImplementation(() => ({ pathname: '/' }))

  it('should render all NavButtons', async () => {
    render(<NavBar />)

    const homeButton = await screen.getByText('Inicio')
    const projectsButton = await screen.getByText('Proyectos')
    const talksButton = await screen.getByText('Ponencias')
    const devtoButton = await screen.getByText('Dev.to')
    const contactButton = await screen.getByText('Contacto')

    expect(homeButton).toBeInTheDocument()
    expect(projectsButton).toBeInTheDocument()
    expect(talksButton).toBeInTheDocument()
    expect(devtoButton).toBeInTheDocument()
    expect(contactButton).toBeInTheDocument()
  })
})
