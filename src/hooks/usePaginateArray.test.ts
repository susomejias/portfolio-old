import { act } from '@testing-library/react'

import { testHook } from '../utils/testHook'

import usePaginateArray from './usePaginateArray'

describe('usePaginateArray()', () => {
  let dataDisplayed, next, currentPage, maxPage
  const data = [
    {
      title: 'tweepyStreamerToCsv',
      description:
        'Scripts hechos en python, con los que se podrá obtener tweets en tiempo real y continuo, ideal para obtener gran cantidad de tweets, para el análisis de los mismos, mediante el uso de la API para twitter tweepy.',
      image: '/img/python',
      url: 'https://github.com/susomejias/tweepyStreamerToCsv',
      authors: [{ name: 'Suso Mejías', image: '/img/avatar' }]
    },

    {
      title: 'PromisesJSvanilla',
      description:
        'Introducción al uso de Promises en JS Vanilla. Esta funcionalidad fue incluida en la versión 6 de ECMASCRIPT, con la idea de facilitar el uso de la asincronía en JS Vanilla.',
      image: '/img/promises',
      url: 'https://github.com/susomejias/PromisesJSvanilla',
      authors: [{ name: 'Suso Mejías', image: '/img/avatar' }]
    },
    {
      title: 'tweepyStreamerToCsv',
      description:
        'Scripts hechos en python, con los que se podrá obtener tweets en tiempo real y continuo, ideal para obtener gran cantidad de tweets, para el análisis de los mismos, mediante el uso de la API para twitter tweepy.',
      image: '/img/python',
      url: 'https://github.com/susomejias/tweepyStreamerToCsv',
      authors: [{ name: 'Suso Mejías', image: '/img/avatar' }]
    },

    {
      title: 'PromisesJSvanilla',
      description:
        'Introducción al uso de Promises en JS Vanilla. Esta funcionalidad fue incluida en la versión 6 de ECMASCRIPT, con la idea de facilitar el uso de la asincronía en JS Vanilla.',
      image: '/img/promises',
      url: 'https://github.com/susomejias/PromisesJSvanilla',
      authors: [{ name: 'Suso Mejías', image: '/img/avatar' }]
    }
  ]
  testHook(() => {
    ;({ dataDisplayed, next, currentPage, maxPage } = usePaginateArray(data, 2))
  })
  it('should have 2 elements', () => {
    expect(dataDisplayed.length).toEqual(2)
  })

  it('should have 2 elements', () => {
    act(() => next())
    expect(dataDisplayed.length).toEqual(4)
  })

  it('should currentPage is equal 2', () => {
    expect(currentPage).toEqual(2)
  })

  it('should maxPage is equal 2', () => {
    expect(maxPage).toEqual(2)
  })
})

describe('usePaginateArray() without data', () => {
  let dataDisplayed, next, currentPage, maxPage
  testHook(() => {
    ;({ dataDisplayed, next, currentPage, maxPage } = usePaginateArray(
      undefined,
      2
    ))
  })
  it('should have 0 elements', () => {
    expect(dataDisplayed.length).toEqual(0)
  })

  it('should currentPage is equal 1', () => {
    expect(currentPage).toEqual(1)
  })

  it('should maxPage is equal 1', () => {
    act(() => next())
    expect(maxPage).toEqual(1)
  })
})
