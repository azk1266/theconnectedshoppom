import Contact from './pages/contact';
import Homepage from './pages/homepage';

const homePage = new Homepage();
const contact = new Contact();

describe('checkHomePage', () => {
  beforeEach(() => {
    contact.visit();
  });
  it('redirectFromHomePage', () => {
    homePage.visit();
    contact.visitContact();
  });
  it('propertiesCheck', () => {
    contact.verifyTitle();
    contact.verifyInputFields();
  });
  it('positive test case', () => {
    contact.emailEntering('mark333@gmail.com');
    contact.nameEntering('Mark');
    contact.phoneEntering('+34956304648');
    contact.messageEntering('I have problem with my order №20853020020');
    contact.submit();
    contact.successMessage();
  });
  it('negative without name', () => {
    contact.emailEntering('mark333@gmail.com');
    contact.phoneEntering('+34956304648');
    contact.messageEntering('I have problem with my order №20853020020');
    contact.submit();
    contact.verifyDidntRedirected();
  });
  it('negative without email', () => {
    contact.nameEntering('Mark');
    contact.phoneEntering('+34956304648');
    contact.messageEntering('I have problem with my order №20853020020');
    contact.submit();
    contact.verifyDidntRedirected();
  });
  it('negative email without at', () => {
    contact.emailEntering('mark333gmail.com');
    contact.nameEntering('Mark');
    contact.phoneEntering('+34956304648');
    contact.messageEntering('I have problem with my order №20853020020');
    contact.submit();
    contact.verifyDidntRedirected();
  });
  it('negative without message', () => {
    contact.emailEntering('mark333@gmail.com');
    contact.nameEntering('Mark');
    contact.phoneEntering('+34956304648');
    contact.submit();
    contact.verifyDidntRedirected();
  });
  it('negative without telephone number', () => {
    contact.emailEntering('mark333@gmail.com');
    contact.nameEntering('Mark');
    contact.messageEntering('I have problem with my order №20853020020');
    contact.submit();
    contact.verifyDidntRedirected();
  });
});
