/// <reference types="Cypress" />

describe('test for opening website', () => {
  before( () => {
    cy.visit('https://automationintesting.online/');
    cy.get('')
  });
  it('It should test for the title of website', () => {
    cy.get('img.hotel-logoUrl')
  })
})