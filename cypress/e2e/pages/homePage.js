class Homepage {
  visit() {
    cy.visit('/');
  }
  verifyTitle() {
    cy.title().should(
      'include',
      'The Connected Shop - Cerraduras & Sensores Inteligentes Casa y Oficina'
    );
  }
  verifyUrl() {
    cy.url().should('eql', Cypress.config('baseUrl') + '/');
  }
  getBody() {
    cy.get('body').should('be.visible');
  }
}

export default Homepage;
