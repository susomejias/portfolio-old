import React from 'react'
import { mount } from 'enzyme'
import Image from 'next/image'

import ImageWithPlaceholder from './index'

describe('<ImageWithPlaceholder />', () => {
  const imageWithPlaceholderProps = {
    imageClassNames: 'image-class',
    imageUrl:
      'https://commons.wikimedia.org/wiki/File:Old_version_of_the_Wikipedia_logo_used_until_2010_(big,_English).png',
    imageAriaLabel: 'image-aria-label',
    imageTitle: 'image-title',
    imageQuality: 75,
    showLoadingAnimation: true,
    placeholderType: 'round' as const
  }
  const wrapper = mount(<ImageWithPlaceholder {...imageWithPlaceholderProps} />)
  const imageWithPlaceholderWithoutOptionalProps = {
    imageUrl:
      'https://commons.wikimedia.org/wiki/File:Old_version_of_the_Wikipedia_logo_used_until_2010_(big,_English).png'
  }
  const wrapperWithoutOptionalProps = mount(
    <ImageWithPlaceholder {...imageWithPlaceholderWithoutOptionalProps} />
  )

  it('should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapperWithoutOptionalProps).toBeDefined()
    expect(wrapper).toMatchSnapshot()
    expect(wrapperWithoutOptionalProps).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('img').prop('aria-label')).toEqual(
      imageWithPlaceholderProps.imageAriaLabel
    )
    expect(wrapper.find('img').prop('title')).toEqual(
      imageWithPlaceholderProps.imageTitle
    )
    expect(wrapper.find(Image).prop('src')).toEqual(
      imageWithPlaceholderProps.imageUrl
    )
    expect(wrapper.find('.round-shape').length).toEqual(1)
    expect(wrapper.find('div.show-loading-animation').length).toEqual(1)
    console.log(wrapper.debug())
    expect(wrapper.find('.image-class').length).toEqual(2)
  })

  it('should render content correctly without optional props', () => {
    expect(wrapperWithoutOptionalProps.find('img').length).toEqual(1)
    expect(wrapperWithoutOptionalProps.find('img').prop('aria-label')).toEqual(
      undefined
    )
    expect(wrapperWithoutOptionalProps.find('img').prop('title')).toEqual(
      undefined
    )
    expect(wrapperWithoutOptionalProps.find(Image).prop('src')).toEqual(
      imageWithPlaceholderProps.imageUrl
    )
    expect(wrapperWithoutOptionalProps.find('.rect-shape').length).toEqual(1)
    expect(
      wrapperWithoutOptionalProps.find('div.show-loading-animation').length
    ).toEqual(1)
  })
})
