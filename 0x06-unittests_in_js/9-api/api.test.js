// api.test.js

const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
  const BASE_URL = 'http://localhost:7865';

  it('should return the correct status code for GET /', (done) => {
    request(`${BASE_URL}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result for GET /', (done) => {
    request(`${BASE_URL}/`, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle other routes gracefully (404)', (done) => {
    request(`${BASE_URL}/non-existent`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Cart page', () => {
  const BASE_URL = 'http://localhost:7865';

  it('should return correct status code and result for a valid cart ID', (done) => {
    request(`${BASE_URL}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });  

  it('should return 404 status code for an invalid cart ID', (done) => {
    request(`${BASE_URL}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 404 status code for missing cart ID', (done) => {
    request(`${BASE_URL}/cart/`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

});
