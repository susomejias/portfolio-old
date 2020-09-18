import React from 'react'
import { mount } from 'enzyme'

const TestHook = ({ callback }): null => {
  callback()
  return null
}

export const testHook = (callback): void => {
  mount(<TestHook callback={callback} />)
}
