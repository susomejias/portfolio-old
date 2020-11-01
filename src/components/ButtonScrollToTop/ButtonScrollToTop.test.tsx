import React from 'react'
import { mount } from 'enzyme'

import ButtonScrollToTop from './ButtonScrollToTop'

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
