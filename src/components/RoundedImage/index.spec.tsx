import React from 'react'
import { shallow } from 'enzyme'

import RoundedImage from './'

describe('<RoundedImage>', () => {
  const componentProps = {
    image: '/img/promises.png',
    size: 'small'
  }
  const wrapperWithPropsSmallSize = shallow(
    <RoundedImage {...componentProps} />
  )
  it('should render', () => {
    expect(wrapperWithPropsSmallSize).toBeDefined()
  })

  it('should render with small size', () => {
    expect(wrapperWithPropsSmallSize.hasClass('small')).toEqual(true)
  })

  const componentPropsMediumSize = {
    image: '/img/promises.png',
    size: 'medium'
  }
  const wrapperWithPropsMediumSize = shallow(
    <RoundedImage {...componentPropsMediumSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsMediumSize).toBeDefined()
  })

  it('should render with medium size', () => {
    expect(wrapperWithPropsMediumSize.hasClass('medium')).toEqual(true)
  })

  const componentPropsLargeSize = {
    image: '/img/promises.png',
    size: 'large'
  }
  const wrapperWithPropsLargeSize = shallow(
    <RoundedImage {...componentPropsLargeSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsLargeSize).toBeDefined()
  })

  it('should render with large size', () => {
    expect(wrapperWithPropsLargeSize.hasClass('large')).toEqual(true)
  })

  const componentPropsDefaultSize = {
    image: '/img/promises.png',
    size: undefined
  }
  const wrapperWithPropsDefaultSize = shallow(
    <RoundedImage {...componentPropsDefaultSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsDefaultSize).toBeDefined()
  })

  it('should render with default size', () => {
    expect(wrapperWithPropsDefaultSize.hasClass('small')).toEqual(true)
  })

  const componentPropsNotExistSize = {
    image: '/img/promises.png',
    size: 'testSize'
  }
  const wrapperWithPropsNotExistSize = shallow(
    <RoundedImage {...componentPropsNotExistSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsNotExistSize).toBeDefined()
  })

  it('should render with default size', () => {
    expect(wrapperWithPropsNotExistSize.hasClass('small')).toEqual(true)
  })
})
