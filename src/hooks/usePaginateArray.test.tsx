import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { act } from '@testing-library/react'

import { testHook } from '../utils/testHook'
import usePaginateArray from '../hooks/usePaginateArray'

configure({ adapter: new Adapter() })

let dataDisplayed, next, currentPage, maxPage

describe('usePaginateArray()', () => {
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
})
