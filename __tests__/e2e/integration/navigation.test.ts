import {
  EXPERIENCE_HREF,
  HOME_HREF,
  POSTS_HREF,
  PRESENTATIONS_HREF,
  PROJECTS_HREF
} from '../../../src/constants/hrefs'

describe('User want navigate between pages', () => {
  it('Should navigate to home page', () => {
    cy.visit('/')

    cy.location('pathname').should('eq', HOME_HREF)
  })

  it('Should navigate to projects page', () => {
    cy.visit(PROJECTS_HREF)

    cy.location('pathname').should('eq', PROJECTS_HREF)
  })

  it('Should navigate to experience page', () => {
    cy.visit(EXPERIENCE_HREF)

    cy.location('pathname').should('eq', EXPERIENCE_HREF)
  })

  it('Should navigate to presentations page', () => {
    cy.visit(PRESENTATIONS_HREF)

    cy.location('pathname').should('eq', PRESENTATIONS_HREF)
  })

  it('Should navigate to posts page', () => {
    cy.visit(POSTS_HREF)

    cy.location('pathname').should('eq', POSTS_HREF)
  })
})
