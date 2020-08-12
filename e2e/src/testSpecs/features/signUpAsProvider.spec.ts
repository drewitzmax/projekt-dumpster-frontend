import {Header} from '../../pageObjects/header.po';
import {$$, browser} from 'protractor';
import {SignUp} from '../../pageObjects/signUp.po';

describe('signUp feature testspec', () => {
  const header = new Header();
  const signUp = new SignUp();

  it('should navigate to signUp page', async () => {
    await header.navigateTo();
    await header.signUpButton.click();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup');
  });

  // fixing need
  it('should choose food supplier', async () => {
    await signUp.chooseFoodProvider();
    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/signup/suppliier');
  });


  it('should put data in the input fields', async () => {
    signUp.foodProviderInputs.get(0).sendKeys('test');
    signUp.foodProviderInputs.get(1).sendKeys('mustermann');
  });
});
