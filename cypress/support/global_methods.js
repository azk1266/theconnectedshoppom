export const verifyTheInputField = (selector, attr, text) => {
  cy.get(selector).should('have.attr', attr, text).should('exist');
};
export const dataEntering = (selector, data) => {
  cy.get(this.emailInput).type(data).should('have.value', data);
};
export const getLogoPrimaryOrTransparent = (selector, src, width, height) => {
  cy.get(selector)
    .should('exist')
    .and('have.attr', 'src', src)
    .and('have.attr', 'width', width)
    .and('have.attr', 'height', height);
};
