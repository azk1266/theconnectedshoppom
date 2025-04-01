import Contact from './pages/contact';
import Homepage from './pages/homepage';

const homePage = new Homepage();
const contact = new Contact();

describe('checkHomePage', () => {
  let contactData;
  beforeEach(() => {
    cy.fixture('contactData').then((data) => {
      contactData = data;
    });
    contact.visit();
  });
  //   it('redirectFromHomePage', () => {
  //     homePage.visit();
  //     contact.clickContact();
  //   });
  it('propertiesCheck', () => {
    contact.verifyTitle();
    contact.verifyInputFields();
  });
  it('positive test case', () => {
    contact.emailEntering(contactData.valid.email);
    contact.nameEntering(contactData.valid.name);
    contact.phoneEntering(contactData.valid.phone);
    contact.messageEntering(contactData.valid.message);
    // contact.submit();
    // contact.successMessage();
  });
  it('negative without name', () => {
    contact.emailEntering(contactData.valid.email);
    // contact.nameEntering(contactData.empty.name);
    contact.phoneEntering(contactData.valid.phone);
    contact.messageEntering(contactData.valid.message);
    // contact.submit();
    // contact.verifyDidntRedirected();
  });
  it('negative without email', () => {
    contact.nameEntering(contactData.valid.name);
    contact.phoneEntering(contactData.valid.phone);
    contact.messageEntering(contactData.valid.message);
    // contact.emailEntering(contactData.empty.email);
    // contact.submit();
    // contact.verifyDidntRedirected();
  });
  it('negative email without at', () => {
    contact.emailEntering(contactData.invalid.email);
    contact.nameEntering(contactData.valid.name);
    contact.phoneEntering(contactData.valid.phone);
    contact.messageEntering(contactData.valid.message);
    // contact.submit();
    // contact.verifyDidntRedirected();
  });
  it('negative without message', () => {
    contact.emailEntering(contactData.valid.email);
    contact.nameEntering(contactData.valid.name);
    contact.phoneEntering(contactData.valid.phone);
    // contact.messageEntering(contactData.empty.message);
    // contact.submit();
    // contact.verifyDidntRedirected();
  });
  it('negative without telephone number', () => {
    contact.emailEntering(contactData.valid.email);
    contact.nameEntering(contactData.valid.name);
    // contact.phoneEntering(contactData.empty.phone);
    contact.messageEntering(contactData.valid.message);
    // contact.submit();
    // contact.verifyDidntRedirected();
  });
});
