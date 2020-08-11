import { Offer } from './offer.model';

describe('Offer', () => {
  it('should create an instance', () => {
    expect(new Offer(null,null,null,null,null)).toBeTruthy();
  });
});
