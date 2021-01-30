import React from 'react'
import { mount } from 'enzyme'

import Footer from './index'

describe('<Footer>', () => {
  const wrapper = mount(<Footer />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
  })
  it('wrapperWithPropsLinkButton: should render with text', () => {
    expect(wrapper.find('span').text()).toEqual('Hecho a mano con ❤️')
  })
})
