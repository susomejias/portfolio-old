import { act } from '@testing-library/react'

import { testHook } from '../utils/testHook'
import useDarkMode from './useDarkMode'

let isDarkMode, setDarkMode, setLightMode

describe('useDarkMode()', () => {
  testHook(() => {
    ;({ isDarkMode, setDarkMode, setLightMode } = useDarkMode())
  })
  it('should have light-theme', () => {
    expect(isDarkMode).toEqual(false)
  })

  it('should change to dark-theme', () => {
    act(() => setDarkMode())
    expect(isDarkMode).toEqual(true)
  })

  it('should change to light-theme', () => {
    act(() => setLightMode())
    expect(isDarkMode).toEqual(false)
  })
})
