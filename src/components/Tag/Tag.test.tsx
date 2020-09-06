import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Tag from './Tag'

configure({ adapter: new Adapter() })

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
