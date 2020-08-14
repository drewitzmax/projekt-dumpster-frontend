import {Home} from '../../pageObjects/home.po';

// Home TestSpec
describe('Home TestSpec', () => {
  const home = new Home();

  beforeEach(async () => {
    await home.navigateTo();
  });

  it('should display - Browse all Food Providers', async () => {
    expect(await home.welcomeMessage.getText()).toEqual('Browse all Food Providers');
  });
});
