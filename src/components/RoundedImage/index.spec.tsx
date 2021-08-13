import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import RoundedImage from './'

describe('<RoundedImage>', () => {
  it('should render with small size', async () => {
    const smallSizeProps = {
      image: '/img/promises.png',
      size: 'small'
    }

    render(<RoundedImage {...smallSizeProps} />)
    const smallImage = await document.querySelector('.small')

    expect(smallImage).toBeInTheDocument()
  })

  it('should render with medium size', async () => {
    const mediumSizeProps = {
      image: '/img/promises.png',
      size: 'medium'
    }

    render(<RoundedImage {...mediumSizeProps} />)
    const mediumImage = await document.querySelector('.medium')

    expect(mediumImage).toBeInTheDocument()
  })

  it('should render with large size', async () => {
    const componentPropsLargeSize = {
      image: '/img/promises.png',
      size: 'large'
    }
    render(<RoundedImage {...componentPropsLargeSize} />)
    const largeImage = await document.querySelector('.large')

    expect(largeImage).toBeInTheDocument()
  })

  it('should render with default size', async () => {
    const componentPropsDefaultSize = {
      image: '/img/promises.png',
      size: undefined
    }
    render(<RoundedImage {...componentPropsDefaultSize} />)
    const smallImage = await document.querySelector('.small')

    expect(smallImage).toBeInTheDocument()
  })

  it('should render with default size', async () => {
    const componentPropsNotExistSize = {
      image: '/img/promises.png',
      size: 'testSize'
    }
    render(<RoundedImage {...componentPropsNotExistSize} />)
    const smallImage = await document.querySelector('.small')

    expect(smallImage).toBeInTheDocument()
  })
})
