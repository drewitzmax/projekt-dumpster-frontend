// HeaderPo TestSpec
import {Header} from '../../pageObjects/header.po';

describe('Header TestSpec', () => {
  const header = new Header();

  beforeEach(async () => {
    await header.navigateTo();
  });

  it('All header elements are displayed', async () => {
    await expect(header.headerImg.isDisplayed);
    await expect(header.navbar.isDisplayed);
    await expect(header.homeButton.isDisplayed);
    await expect(header.signUpButton.isDisplayed);
    await expect(header.aboutButton.isDisplayed);
  });
});
