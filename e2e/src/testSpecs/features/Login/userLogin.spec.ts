import {Header} from '../../../pageObjects/margins/header.po';
import {$, browser} from 'protractor';
import {user} from '../../../dataObjects/user.data';

// User Login
describe('User login - TestSpec', () => {
  const header = new Header();

  beforeEach(async () => {
    await browser.get(browser.baseUrl);
  });

  it('User should be able to login with correct credentials', async () => {
    await header.login(user.email, user.password);
    expect(await $('#logout').getText()).toEqual(user.email);
    await header.logoutButton.click();
  });

  it('User should not be able to login with incorrect credentials', async () => {
    await header.login('falseuser', '3571598');
  });

  it('User should not be able to login with blank fields', async () => {
    await header.login('', '');
  });
});
