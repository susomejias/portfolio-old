import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ButtonBadge from './ButtonBadge'

configure({ adapter: new Adapter() })

describe('<ButtonBadge>', () => {
  const componentProps = {
    text: 'Link test',
    isLink: true,
    url: 'https://google.es',
    isTargetBlank: true
  }
  const wrapperWithProps = mount(<ButtonBadge {...componentProps} />)
  it('should render', () => {
    expect(wrapperWithProps).toBeDefined()
  })
  it('should render with text Link test', () => {
    expect(wrapperWithProps.find('a').text()).toEqual('Link test')
  })
  it('should render with url https://google.es/', () => {
    expect(wrapperWithProps.find('a').prop('href')).toEqual(
      'https://google.es/'
    )
  })
  it('should render with target _blank', () => {
    expect(wrapperWithProps.find('a').prop('target')).toEqual('_blank')
  })

  const componentPropsNotLinkbutton = {
    text: 'Link test',
    isLink: false,
    url: '#',
    isTargetBlank: false
  }
  const wrapperWithPropsNotLinkbutton = mount(
    <ButtonBadge {...componentPropsNotLinkbutton} />
  )
  it('should render', () => {
    expect(wrapperWithPropsNotLinkbutton).toBeDefined()
  })
  it('should render with text', () => {
    expect(wrapperWithPropsNotLinkbutton.find('p').text()).toEqual('Link test')
  })
  it('should render with url https://google.es/', () => {
    expect(wrapperWithPropsNotLinkbutton.find('a').prop('href')).toEqual('3')
  })
  it('should not render with a element', () => {
    expect(wrapperWithPropsNotLinkbutton.find('a').length).toEqual(0)
  })
})
