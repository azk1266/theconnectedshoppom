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
});
