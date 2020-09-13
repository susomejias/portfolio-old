import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as nextRouter from 'next/router'

import NavBar from './NavBar'

configure({ adapter: new Adapter() })

describe('<NavBar>', () => {
  nextRouter.useRouter = jest.fn()
  nextRouter.useRouter.mockImplementation(() => ({ pathname: '/' }))

  const wrapper = mount(<NavBar />)
  it('should render', () => {
    expect(wrapper).toBeDefined()
  })
  it('should render all NavButtons', () => {
    expect(wrapper.find('.nav-button').length).toEqual(5)
  })
})
