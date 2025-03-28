import HomePage from './pages/homepage';
import Header from './pages/header';

const homePage = new HomePage();
const header = new Header();

describe('checkHomePage', () => {
  beforeEach(() => {
    homePage.visit();
  });
  it('Open home page', () => {
    homePage.verifyUrl();
    homePage.verifyTitle();
    homePage.getBody();
  });
  it('Header logo check', () => {
    header.getLogo();
    header.getLogoPrimary();
    header.getLogoTransparent();
  });
  it('Horizontal mini menu check', () => {
    header.checkHorizontalMiniMenu();
    header.checkClickableSearch();
    header.checkClickableAccount();
    header.checkClickableCart();
  });
});
