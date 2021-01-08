require('./setup');

const request = require('supertest');
const app = require('../src/server');

const mockSearchFn = jest.fn();

jest.mock('../src/services/product.js', () => ({
  search: () => mockSearchFn()
}));

describe('test server', () => {
  it('should return list', (done) => {
    const mockProduct = {};
    mockSearchFn.mockReturnValueOnce([mockProduct]);
    request(app).get('/products')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual([mockProduct]);
        done();
      });
  });
});
