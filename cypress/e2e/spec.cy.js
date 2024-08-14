import formPage from '../pages/formPage'

describe('template spec', () => {
  Cypress.on('uncaught:exception', (err) => {
      return false;
  });
  beforeEach(function() {
    cy.visit('/');
 })
  it('positive', () => {

    formPage.elements.nameInput().type('name')
    formPage.elements.emailInput().type('fake@email.com')
    formPage.clickOnSubmit();
    formPage.elements.output().should('include.text', 'Name:nameEmail:fake@email.com')

  })
  it('negative', () => {
    formPage.elements.emailInput().type('fake')
    formPage.clickOnSubmit();
    formPage.elements.emailInput() .should('have.class', 'field-error')
  })
})