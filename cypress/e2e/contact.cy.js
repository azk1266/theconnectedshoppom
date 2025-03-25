import Contact from './pages/contact';

const contact = new Contact();

describe('checkHomePage', () => {
  beforeEach(() => {
    contact.visit();
  });
  it('propertiesCheck', () => {
    contact.verifyTitle();
    contact.verifyInputFields();
  });
  it('positive test case', () => {
    contact.correctEmailEntering();
    contact.correctNameEntering();
    contact.correctTelephoneEntering();
    contact.messageEntering();
    contact.submit();
    contact.successMessage();
  });
  it('negative without name', () => {
    contact.correctEmailEntering();
    contact.correctTelephoneEntering();
    contact.messageEntering();
    contact.submit();
    contact.verifyDidntRedirected();
  });
  it('negative without email', () => {
    contact.correctNameEntering();
    contact.correctTelephoneEntering();
    contact.messageEntering();
    contact.submit();
    contact.verifyDidntRedirected();
  });
  it('negative email without at', () => {
    contact.emailEnteringWithoutAt();
    contact.correctNameEntering();
    contact.correctTelephoneEntering();
    contact.messageEntering();
    contact.submit();
    contact.verifyDidntRedirected();
  });
  it('negative without message', () => {
    contact.correctEmailEntering();
    contact.correctNameEntering();
    contact.correctTelephoneEntering();
    contact.submit();
    contact.verifyDidntRedirected();
  });
  it('negative without telephone number', () => {
    contact.correctEmailEntering();
    contact.correctNameEntering();
    contact.messageEntering();
    contact.submit();
    contact.verifyDidntRedirected();
  });
});
