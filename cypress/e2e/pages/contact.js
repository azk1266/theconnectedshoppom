class Contact {
  constructor() {
    this.url = '/pages/contactenos';
    this.partOfTitle = 'Contáctenos';
    this.contactButtonName = 'a[href="/pages/contactenos"]';
    this.nameInput = 'input[name="contact[name]"]';
    this.emailInput = 'input[name="contact[email]"]';
    this.phoneInput = 'input[name="contact[Su teléfono]"]';
    this.messageInput = '.Form__Textarea';
    this.submitButton = 'form[action="/contact#contact_form"]'; // button[type="submit"]
    this.successMessage = 'Gracias por contactarnos';
  }
  clickContact() {
    cy.get(this.contactButtonName).click();
  }
  visit() {
    cy.visit(this.url);
  }
  verifyTitle() {
    cy.title().should('include', this.partOfTitle);
  }
  verifyInputFields() {
    cy.verifyTheInputField(this.nameInput, 'placeholder', 'Tu nombre'); //name
    cy.verifyTheInputField(
      this.emailInput,
      'placeholder',
      'Tu correo electrónico'
    ); //email
    cy.verifyTheInputField(this.phoneInput, 'placeholder', 'Su teléfono'); //tel.number
    cy.verifyTheInputField(this.messageInput, 'placeholder', 'Tu mensaje'); // message
  }
  emailEntering(email) {
    cy.dataEntering(this.emailInput, email);
  }
  phoneEntering(phone) {
    cy.dataEntering(this.emailInput, phone);
  }
  nameEntering(name) {
    cy.dataEntering(this.emailInput, name);
  }
  messageEntering(message) {
    cy.dataEntering(this.emailInput, message);
  }
  submit() {
    // cy.get(this.submitButton).submit();
  }
  successMessage() {
    // cy.contains(this.successMessage).should('be.visible');
  }
  verifyDidntRedirected() {
    cy.url().should('include', '/contactenos');
    cy.contains(this.successMessage).should('not.exist');
  }
}

export default Contact;
