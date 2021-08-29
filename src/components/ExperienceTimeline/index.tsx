import React, { Fragment } from 'react'
import { differenceInMonths, differenceInYears } from 'date-fns'

interface TimelineProps {
  experience: Experience[]
}

const ExperienceTimeline = (props: TimelineProps): JSX.Element => {
  const { experience } = props

  return (
    <div className="timeline">
      {experience.map((element: Experience, index) => {
        const diffMonths = Math.abs(
          differenceInMonths(element.startDate, element.endDate || new Date())
        )

        const diffYears = Math.abs(
          differenceInYears(element.startDate, element.endDate || new Date())
        )

        return (
          <Fragment key={index}>
            <div className="experience">
              <div className="card">
                <div className="container">
                  <h4 className="company-name">{element.companyName}</h4>
                  <h5 className="job-title">{element.jobName}</h5>
                  <div className="dates">
                    <span className="start-date">
                      {element.startDate.toLocaleDateString('es-ES', {
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <span> - </span>
                    {element.endDate ? (
                      <span className="end-date">
                        {element.endDate.toLocaleDateString('es-ES', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    ) : (
                      <span className="end-date">Actualidad</span>
                    )}
                    ,{' '}
                    {diffYears < 1 ? (
                      <span>{diffMonths} meses</span>
                    ) : (
                      <span>{diffYears} año/s</span>
                    )}
                  </div>
                  <div className="job-description">
                    {element.description.map((paragraph, index) => {
                      return <p key={index}>{paragraph}</p>
                    })}
                  </div>
                </div>
              </div>
            </div>
            {index < experience.length - 1 ? (
              <hr className="separator" />
            ) : null}
          </Fragment>
        )
      })}
    </div>
  )
}

export default ExperienceTimeline
