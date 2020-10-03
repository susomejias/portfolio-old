import {
  CONTACT_HREF,
  POSTS_HREF,
  PRESENTATIONS_HREF,
  PROJECTS_HREF
} from '../../../src/constants/hrefs'

describe('User want navigate between pages', () => {
  it('Should navigate to home page', () => {
    cy.visit('/')
  })

  describe('User want see projects', () => {
    it('Should click on projects link', () => {
      cy.get('[data-cy=projects-link]').click()
    })

    it('Location should be projects', () => {
      cy.location('pathname').should('eq', PROJECTS_HREF)
    })
  })

  describe('User want see presentations', () => {
    it('Should click on presentations link', () => {
      cy.get('[data-cy=presentations-link]').click()
    })

    it('Location should be presentations', () => {
      cy.location('pathname').should('eq', PRESENTATIONS_HREF)
    })
  })

  describe('User want see posts', () => {
    it('Should click on posts link', () => {
      cy.get('[data-cy=posts-link]').click()
    })

    it('Location should be posts', () => {
      cy.location('pathname').should('eq', POSTS_HREF)
    })
  })

  describe('User want see contact', () => {
    it('Should click on contact link', () => {
      cy.get('[data-cy=contact-link]').click()
    })

    it('Location should be contact', () => {
      cy.location('pathname').should('eq', CONTACT_HREF)
    })
  })
})
