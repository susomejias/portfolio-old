import { act, renderHook } from '@testing-library/react-hooks'

import usePaginateArray from './usePaginateArray'

describe('usePaginateArray()', () => {
  const data = [
    {
      title: 'tweepyStreamerToCsv',
      description:
        'Scripts hechos en python, con los que se podrá obtener tweets en tiempo real y continuo, ideal para obtener gran cantidad de tweets, para el análisis de los mismos, mediante el uso de la API para twitter tweepy.',
      image: '/img/python',
      url: 'https://github.com/susomejias/tweepyStreamerToCsv',
      authors: [{ name: 'Susomejias', image: '/img/avatar' }]
    },
    {
      title: 'PromisesJSvanilla',
      description:
        'Introducción al uso de Promises en JS Vanilla. Esta funcionalidad fue incluida en la versión 6 de ECMASCRIPT, con la idea de facilitar el uso de la asincronía en JS Vanilla.',
      image: '/img/promises',
      url: 'https://github.com/susomejias/PromisesJSvanilla',
      authors: [{ name: 'Susomejias', image: '/img/avatar' }]
    },
    {
      title: 'tweepyStreamerToCsv',
      description:
        'Scripts hechos en python, con los que se podrá obtener tweets en tiempo real y continuo, ideal para obtener gran cantidad de tweets, para el análisis de los mismos, mediante el uso de la API para twitter tweepy.',
      image: '/img/python',
      url: 'https://github.com/susomejias/tweepyStreamerToCsv',
      authors: [{ name: 'Susomejias', image: '/img/avatar' }]
    },
    {
      title: 'PromisesJSvanilla',
      description:
        'Introducción al uso de Promises en JS Vanilla. Esta funcionalidad fue incluida en la versión 6 de ECMASCRIPT, con la idea de facilitar el uso de la asincronía en JS Vanilla.',
      image: '/img/promises',
      url: 'https://github.com/susomejias/PromisesJSvanilla',
      authors: [{ name: 'Susomejias', image: 'img/avatar' }]
    }
  ]

  it('should have 2 elements', () => {
    const { result } = renderHook(() => usePaginateArray(data, 2))
    expect(result.current.dataDisplayed.length).toEqual(2)
  })

  it('should have 4 elements', () => {
    const { result } = renderHook(() => usePaginateArray(data, 2))
    act(() => result.current.next())
    expect(result.current.dataDisplayed.length).toEqual(4)
  })

  it('should currentPage is equal 2', () => {
    const { result } = renderHook(() => usePaginateArray(data, 2))
    act(() => result.current.next())
    expect(result.current.currentPage).toEqual(2)
  })

  it('should maxPage is equal 2', () => {
    const { result } = renderHook(() => usePaginateArray(data, 2))
    expect(result.current.maxPage).toEqual(2)
  })
})

describe('usePaginateArray() without data', () => {
  it('should have 0 elements', () => {
    const { result } = renderHook(() => usePaginateArray(undefined, 2))

    expect(result.current.dataDisplayed.length).toEqual(0)
  })

  it('should currentPage is equal 1', () => {
    const { result } = renderHook(() => usePaginateArray(undefined, 2))

    expect(result.current.currentPage).toEqual(1)
  })

  it('should maxPage is equal 1', () => {
    const { result } = renderHook(() => usePaginateArray(undefined, 2))

    act(() => result.current.next())
    expect(result.current.maxPage).toEqual(1)
  })
})
