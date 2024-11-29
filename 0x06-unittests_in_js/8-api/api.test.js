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
