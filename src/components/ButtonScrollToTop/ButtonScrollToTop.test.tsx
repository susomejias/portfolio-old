import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ButtonScrollToTop from './ButtonScrollToTop'

configure({ adapter: new Adapter() })

describe('<ButtonScrollToTop>', () => {
  const wrapper = mount(<ButtonScrollToTop />)
  it('should render', () => {
    expect(wrapper).toBeDefined()
  })
  it('should render button and click', () => {
    expect(wrapper.find('.scroll-top-button.fas.fa-angle-up').length).toEqual(1)
    wrapper.find('.scroll-top-button.fas.fa-angle-up').simulate('click')
  })
})
