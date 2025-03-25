class Contact {
  visit() {
    cy.visit('/pages/contactenos');
  }
  verifyTitle() {
    cy.title().should('include', 'Contáctenos');
  }
  verifyInputFields() {
    cy.get(':nth-child(1) > .Form__Input') //name
      .should('have.attr', 'placeholder', 'Tu nombre')
      .should('exist');
    cy.get(':nth-child(2) > .Form__Input') //email
      .should('have.attr', 'placeholder', 'Tu correo electrónico')
      .should('exist');
    cy.get(':nth-child(4) > .Form__Input') //tel.number
      .should('have.attr', 'placeholder', 'Su teléfono')
      .should('exist');
    cy.get('.Form__Textarea') // message
      .should('have.attr', 'placeholder', 'Tu mensaje')
      .should('exist');
  }
  correctNameEntering() {
    cy.get(':nth-child(1) > .Form__Input')
      .type('Mark')
      .should('have.value', 'Mark');
  }
  correctEmailEntering() {
    cy.get(':nth-child(2) > .Form__Input')
      .type('lospe3s2@gmail.com')
      .should('have.value', 'lospe3s2@gmail.com');
  }
  emailEnteringWithoutAt() {
    cy.get(':nth-child(2) > .Form__Input')
      .type('p399gmail.com')
      .should('have.value', 'p399752d');
  }
  correctTelephoneEntering() {
    cy.get(':nth-child(4) > .Form__Input')
      .type('+34657839055')
      .should('have.value', '+34657839055');
  }
  messageEntering() {
    cy.get('.Form__Textarea')
      .type('Everything is working correctly')
      .should('have.value', 'Everything is working correctly');
  }
  submit() {
    // cy.get('.#contact_form > button').click();
    cy.get('form[action="/contact#contact_form"]').submit();
  }
  successMessage() {
    cy.contains('Gracias por contactarnos').should('be.visible');
  }
  verifyDidntRedirected() {
    cy.url().should('include', '/contactenos');
    cy.contains('Gracias por contactarnos').should('not.exist');
  }
}

export default Contact;
