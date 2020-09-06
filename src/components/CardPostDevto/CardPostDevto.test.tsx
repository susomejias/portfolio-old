import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CardPostDevto from './CardPostDevto'

configure({ adapter: new Adapter() })

describe('<CardPostDevto>', () => {
  const componentProps = {
    image: 'img/promises.webp',
    title: 'title test',
    description: 'description',
    commentsCount: 1,
    reactions: 4,
    url:
      'https://dev.to/theneonproject/translations-for-react-using-i18n-hook-1616',
    tags: ['react', 'javascript']
  }
  const wrapperWithProps = mount(<CardPostDevto {...componentProps} />)
  it('should render', () => {
    expect(wrapperWithProps).toBeDefined()
  })
  it('should render card with a element', () => {
    expect(wrapperWithProps.find('a.card-devto-post').length).toEqual(1)
  })
  it('should render card elements', () => {
    expect(wrapperWithProps.find('.card-title').text()).toEqual('title test')
    expect(wrapperWithProps.find('.card-description').text()).toEqual(
      'description'
    )
    expect(wrapperWithProps.find('.card-reaction').length).toEqual(2)
    expect(wrapperWithProps.find('.card-tags span').length).toEqual(2)
  })
})
