import React from 'react'
import { mount } from 'enzyme'

import RoundedImage from './RoundedImage'

describe('<RoundedImage>', () => {
  const componentProps = {
    image: '/img/promises',
    size: 'small'
  }
  const wrapperWithPropsSmallSize = mount(<RoundedImage {...componentProps} />)
  it('should render', () => {
    expect(wrapperWithPropsSmallSize).toBeDefined()
  })

  console.log(wrapperWithPropsSmallSize.debug())
  it('should render with small size', () => {
    expect(wrapperWithPropsSmallSize.find('img.small').length).toEqual(1)
  })

  const componentPropsMediumSize = {
    image: '/img/promises',
    size: 'medium'
  }
  const wrapperWithPropsMediumSize = mount(
    <RoundedImage {...componentPropsMediumSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsMediumSize).toBeDefined()
  })

  it('should render with medium size', () => {
    expect(wrapperWithPropsMediumSize.find('img.medium').length).toEqual(1)
  })

  const componentPropsLargeSize = {
    image: '/img/promises',
    size: 'large'
  }
  const wrapperWithPropsLargeSize = mount(
    <RoundedImage {...componentPropsLargeSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsLargeSize).toBeDefined()
  })

  it('should render with large size', () => {
    expect(wrapperWithPropsLargeSize.find('img.large').length).toEqual(1)
  })

  const componentPropsDefaultSize = {
    image: '/img/promises',
    size: undefined
  }
  const wrapperWithPropsDefaultSize = mount(
    <RoundedImage {...componentPropsDefaultSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsDefaultSize).toBeDefined()
  })

  it('should render with default size', () => {
    expect(wrapperWithPropsDefaultSize.find('img.small').length).toEqual(1)
  })

  const componentPropsNotExistSize = {
    image: '/img/promises',
    size: 'testSize'
  }
  const wrapperWithPropsNotExistSize = mount(
    <RoundedImage {...componentPropsNotExistSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsNotExistSize).toBeDefined()
  })

  it('should render with default size', () => {
    expect(wrapperWithPropsNotExistSize.find('img.small').length).toEqual(1)
  })
})
