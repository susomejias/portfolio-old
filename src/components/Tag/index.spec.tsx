import React from 'react'
import { mount } from 'enzyme'

import Tag from './index'

describe('<Tag>', () => {
  const componentProps = {
    text: 'Test text'
  }
  const wrapperWithProps = mount(<Tag {...componentProps} />)
  it('should render', () => {
    expect(wrapperWithProps).toBeDefined()
  })
  it('should render text in Tag', () => {
    expect(wrapperWithProps.text()).toEqual('Test text')
  })
})
