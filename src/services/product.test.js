const productService = require('./product');

jest.mock('@google-cloud/datastore', () => ({
  Datastore: jest.fn()
}));

describe('Product', () => {
  it('test remove', () => {
    expect(productService.remove('randomId')).toBeTruthy();
  });
});
