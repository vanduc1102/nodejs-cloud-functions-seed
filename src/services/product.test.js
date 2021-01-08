const productService = require('./product');

const mockDeleteFn = jest.fn();
jest.mock('../database.js', () => ({
  datastore: () => jest.fn(),
  int: () => jest.fn(),
  key: () => jest.fn(),
  delete: productId => mockDeleteFn(productId)
}));

describe('Product', () => {
  it('test remove', async () => {
    const productId = await productService.remove('randomId');
    expect(productId).toEqual('randomId');
    expect(mockDeleteFn).toHaveBeenCalledTimes(1);
  });
});
