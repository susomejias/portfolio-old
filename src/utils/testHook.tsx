import React from 'react'
import { mount } from 'enzyme'

const TestHook = ({ callback }): null => {
  callback()
  return null
}

export const testHook = (callback) => {
  mount(<TestHook callback={callback} />)
}
