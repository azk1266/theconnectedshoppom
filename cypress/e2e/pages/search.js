class Search {
  visit() {
    cy.visit('/');
  }
  searchExisting() {
    cy.get('input[name="q"]')
      .invoke('val', 'Cerradura de Cajón con Huella')
      .should('have.value', 'Cerradura de Cajón con Huella', { log: false });
  }
  searchNonExisting() {
    cy.get('input[name="q"]').type('manjar').should('have.value', 'manjar');
    cy.get('.Search__Results', { timeout: 9000 })
      .find('.ProductItem')
      .should('not.exist');
    cy.get('.Segment__Content > p')
      .contains('No se pudieron encontrar resultados')
      .should('exist');
  }
}

export default Search;
