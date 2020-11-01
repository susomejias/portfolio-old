import React from 'react'
import { mount } from 'enzyme'

import ButtonToggleDarkMode from './ButtonToggleDarkMode'

describe('<ButtonToggleDarkMode>', () => {
  const wrapper = mount(<ButtonToggleDarkMode />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should show the icon with the classes fas fa-tint', () => {
    expect(wrapper.find('.fas.fa-tint').length).toEqual(1)
  })

  it('should show the icon with the classes fas fa-tint-slash and change to dark-theme', () => {
    wrapper.find('.button-toggle-dark-mode').simulate('click')
    expect(wrapper.find('.fas.fa-tint-slash').length).toEqual(1)
  })

  it('should show the icon with the classes fas fa-tint-slash and change to light-theme', () => {
    wrapper.find('.button-toggle-dark-mode').simulate('click')
    expect(wrapper.find('.fas.fa-tint').length).toEqual(1)
  })
})
