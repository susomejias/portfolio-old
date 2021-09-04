import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import ExperienceTimeline from './index'

describe('<ExperienceTime />', () => {
  it('should renders all elements correctly', async () => {
    const experience = [
      {
        companyName: 'Product Hackers',
        companyImage: null,
        startDate: new Date('03/01/2021'),
        endDate: new Date('04/01/2021'),
        jobName: 'FrontEnd Developer - (Remoto)',
        description: [
          'Dentro de Product Hackers tengo como objetivo seguir mejorando tanto a nivel de performance como de UX uno de los medios digitales más grandes de España.',
          'Para ello usamos tecnologías como React, JavaScript, SCSS, NodeJS, Git, GitHub, CI, Testing etc',
          'Destacar que gracias a las mejoras hemos introducido, el medio digital ha crecido exponencialmente en número de visitas, usuarios y ranking en comScore.'
        ]
      },
      {
        companyName: 'Wealize',
        companyImage: null,
        startDate: new Date('05/01/2020'),
        endDate: new Date('03/01/2021'),
        jobName: 'Software Developer - (Remoto)',
        description: [
          'Dentro de Wealize tenía como objetivo seguir aumentando las funcionalidades del producto core de la empresa creado para aportar soluciones a diferentes problemas mediante chatbots creados a medida.',
          'Para ello usábamos tecnologías como NextJS, TypeScript, Redux, Styled Components, Git, GitHub, CI, Testing, WebSockets, Django etc',
          'En esta etapa me gustaría destacar además de los desarrollos para el producto comentado anteriormente, el desarrollo de la landing de la empresa en pleno proceso de rebranding.'
        ]
      },
      {
        companyName: 'ICCA',
        companyImage: null,
        startDate: new Date('10/01/2018'),
        endDate: new Date('04/01/2020'),
        jobName: 'Full-Stack Developer',
        description: [
          'Dentro del ICCA tenía como objetivo refactorizar y añadir nuevas features dentro de unas de las plataformas core de una de las compañías energéticas más grande de España.',
          'Para ello usábamos tecnologías como C#, .NET, SQLServer, JavaScript, CSS3, Xamarin etc',
          'En esta estapa destacaría como principal aprendizaje el trabajar con un projecto de unas dimensiones muy considerables, con lo que ello conlleva, además de aprender a trabajar con parte de las tecnologías que comento arriba.'
        ]
      }
    ]

    render(<ExperienceTimeline experience={experience} />)

    const productHackersTitle = await document.querySelectorAll(
      '.company-name'
    )[0]
    const productHackersJobTitle = await document.querySelectorAll(
      '.job-title'
    )[0]
    const productHackersDates = await document.querySelectorAll('.dates')[0]
    const productHackersDescription = await document.querySelectorAll(
      '.job-description'
    )[0]
    expect(productHackersTitle.textContent).toEqual(experience[0].companyName)
    expect(productHackersJobTitle.textContent).toEqual(experience[0].jobName)
    expect(productHackersDates.textContent).toEqual(
      'mar 2021 - abr 2021, 1 meses'
    )
    expect(productHackersDescription.textContent).toEqual(
      experience[0].description.join('')
    )

    const wealizeTitle = await document.querySelectorAll('.company-name')[1]
    const wealizeJobTitle = await document.querySelectorAll('.job-title')[1]
    const wealizeDates = await document.querySelectorAll('.dates')[1]
    const wealizeDescription = await document.querySelectorAll(
      '.job-description'
    )[1]
    expect(wealizeTitle.textContent).toEqual(experience[1].companyName)
    expect(wealizeJobTitle.textContent).toEqual(experience[1].jobName)
    expect(wealizeDates.textContent).toEqual('may 2020 - mar 2021, 10 meses')
    expect(wealizeDescription.textContent).toEqual(
      experience[1].description.join('')
    )

    const ICCATitle = await document.querySelectorAll('.company-name')[2]
    const ICCAJobTitle = await document.querySelectorAll('.job-title')[2]
    const ICCADates = await document.querySelectorAll('.dates')[2]
    const ICCADescription = await document.querySelectorAll(
      '.job-description'
    )[2]
    expect(ICCATitle.textContent).toEqual(experience[2].companyName)
    expect(ICCAJobTitle.textContent).toEqual(experience[2].jobName)
    expect(ICCADates.textContent).toEqual('oct 2018 - abr 2020, 1 año/s')
    expect(ICCADescription.textContent).toEqual(
      experience[2].description.join('')
    )
  })

  it('should renders elements correctly when passing null endDate', async () => {
    const experience = [
      {
        companyName: 'Product Hackers',
        companyImage: null,
        startDate: new Date('03/01/2021'),
        endDate: null,
        jobName: 'FrontEnd Developer - (Remoto)',
        description: [
          'Dentro de Product Hackers tengo como objetivo seguir mejorando tanto a nivel de performance como de UX uno de los medios digitales más grandes de España.',
          'Para ello usamos tecnologías como React, JavaScript, SCSS, NodeJS, Git, GitHub, CI, Testing etc',
          'Destacar que gracias a las mejoras hemos introducido, el medio digital ha crecido exponencialmente en número de visitas, usuarios y ranking en comScore.'
        ]
      }
    ]

    const mockDate = new Date('2021-03-01')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const spy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate)

    render(<ExperienceTimeline experience={experience} />)

    spy.mockRestore()

    const productHackersTitle = await document.querySelectorAll(
      '.company-name'
    )[0]
    const productHackersJobTitle = await document.querySelectorAll(
      '.job-title'
    )[0]
    const productHackersDates = await document.querySelectorAll('.dates')[0]
    const productHackersDescription = await document.querySelectorAll(
      '.job-description'
    )[0]
    expect(productHackersTitle.textContent).toEqual(experience[0].companyName)
    expect(productHackersJobTitle.textContent).toEqual(experience[0].jobName)
    expect(productHackersDates.textContent).toEqual(
      'mar 2021 - Actualidad, 0 meses'
    )
    expect(productHackersDescription.textContent).toEqual(
      experience[0].description.join('')
    )
  })
})
