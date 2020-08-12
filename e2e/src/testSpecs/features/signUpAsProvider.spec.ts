import {Header} from '../../pageObjects/margins/header.po';
import {$$, browser} from 'protractor';
import {SignUp} from '../../pageObjects/signUp.po';

describe('signUp feature testspec', () => {
  const header = new Header();
  const signUp = new SignUp();

  it('should navigate to signUp page', async () => {
    await browser.get(browser.baseUrl);
    await header.dropDownButton.click();
    await header.signUpButton.click();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup');
  });

  it('should choose food supplier', async () => {
    await signUp.chooseFoodProvider();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup/supplier');
  });
});
