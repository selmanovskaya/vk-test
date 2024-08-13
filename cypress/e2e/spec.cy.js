
describe('template spec', () => {
  Cypress.on('uncaught:exception', (err) => {
      return false;
  });
  beforeEach(function() {
    cy.visit('/');
 })
  it('positive', () => {
    cy.get('#userName').type('name')
    cy.get('#userEmail').type('fake@email.com')
    cy.get('#submit').click()
    cy.get('#output').should('include.text', 'Name:nameEmail:fake@email.com')

  })
  it('negative', () => {
    cy.get('#userEmail').type('fake')
    cy.get('#submit').click()
    cy.get('#userEmail') .should('have.class', 'field-error')
  })
})