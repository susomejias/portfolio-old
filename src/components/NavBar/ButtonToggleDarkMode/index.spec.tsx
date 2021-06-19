import React from 'react'
import { mount } from 'enzyme'

import ButtonToggleDarkMode from './index'

describe('<ButtonToggleDarkMode>', () => {
  const wrapper = mount(<ButtonToggleDarkMode />)

  it('should show the sun icon when dark mode is deactivated', () => {
    expect(wrapper.find('.animate-hide-sun').length).toEqual(0)
    expect(wrapper.find('.animate-show-moon').length).toEqual(0)
  })

  it('should show the moon icon and hide sun icon when clicked', () => {
    wrapper.find('.button-toggle-dark-mode').simulate('click')
    expect(wrapper.find('.animate-hide-sun').length).toEqual(1)
    expect(wrapper.find('.animate-show-moon').length).toEqual(1)
  })

  it('should show the moon icon and hide sun icon when clicked', () => {
    wrapper.find('.button-toggle-dark-mode').simulate('click')
    expect(wrapper.find('.animate-hide-sun').length).toEqual(0)
    expect(wrapper.find('.animate-show-moon').length).toEqual(0)
  })
})
