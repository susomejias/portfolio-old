import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ButtonToggleDarkMode from './ButtonToggleDarkMode'

configure({ adapter: new Adapter() })

describe('<ButtonToggleDarkMode>', () => {
  const wrapper = mount(<ButtonToggleDarkMode />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should show the icon with the classes fas fa-tint', () => {
    expect(wrapper.find('.fas.fa-tint').length).toEqual(1)
  })

  it('should show the icon with the classes fas fa-tint-slash and change to dark-theme', () => {
    console.log(wrapper.debug())
    wrapper.find('.button-toggle-dark-mode').simulate('click')
    console.log(wrapper.debug())
    expect(wrapper.find('.fas.fa-tint-slash').length).toEqual(1)
  })

  it('should show the icon with the classes fas fa-tint-slash and change to light-theme', () => {
    wrapper.find('.button-toggle-dark-mode').simulate('click')
    expect(wrapper.find('.fas.fa-tint').length).toEqual(1)
  })
})
