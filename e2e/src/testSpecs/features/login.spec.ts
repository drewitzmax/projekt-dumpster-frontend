import {$, browser} from 'protractor';
import {Header} from '../../pageObjects/margins/header.po';

describe('login feature', () => {
  const header = new Header();

  beforeEach(async () => {
    await browser.get(browser.baseUrl);
  });

  it('user should be able to login with correct credentials', async () => {
    await header.login('mm', '852');
    expect(await $('#logout').getText()).toEqual('mm');
    await header.logoutButton.click();
  });

  it('user should not be able to login with incorrect credentials', async () => {
    await header.login('xx', 'notright');
  });

  it('user should not be able to login with blank fields', async () => {
    await header.login('', '');
  });
});
