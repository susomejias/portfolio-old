import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import RoundedImage from './RoundedImage'

configure({ adapter: new Adapter() })

describe('<RoundedImage>', () => {
  const componentProps = {
    image: '/img/promises',
    size: '46px'
  }
  const wrapperWithPropsSmallSize = mount(<RoundedImage {...componentProps} />)
  it('should render', () => {
    expect(wrapperWithPropsSmallSize).toBeDefined()
  })

  const componentPropsMediumSize = {
    image: '/img/promises',
    size: '140px'
  }
  const wrapperWithPropsMediumSize = mount(
    <RoundedImage {...componentPropsMediumSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsMediumSize).toBeDefined()
  })

  const componentPropsLargeSize = {
    image: '/img/promises',
    size: '180px'
  }
  const wrapperWithPropsLargeSize = mount(
    <RoundedImage {...componentPropsLargeSize} />
  )
  it('should render', () => {
    expect(wrapperWithPropsLargeSize).toBeDefined()
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
})
