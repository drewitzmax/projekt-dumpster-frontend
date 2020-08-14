import {$, browser} from 'protractor';
import {Header} from '../../../pageObjects/margins/header.po';
import {foodprovider} from '../../../dataObjects/foodprovider.data';

// Foodprovider Login
describe('Foodprovider login - TestSpec', () => {
  const header = new Header();

  beforeEach(async () => {
    await browser.get(browser.baseUrl);
  });

  it('Foodprovider should be able to login with correct credentials', async () => {
    await header.login(foodprovider.email, foodprovider.password);
    expect(await $('#logout').getText()).toEqual(foodprovider.email);
    await header.logoutButton.click();
  });

  it('Foodprovider should not be able to login with incorrect credentials', async () => {
    await header.login('falseprovider', '753615');
  });

  it('Foodprovider should not be able to login with blank fields', async () => {
    await header.login('', '');
  });

  afterAll(async () => {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
  });
});
