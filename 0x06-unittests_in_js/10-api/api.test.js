// api.test.js

const request = require('request');
const { expect } = require('chai');

describe('API Endpoints', () => {
  const BASE_URL = 'http://localhost:7865';

  describe('Index page', () => {
    it('should return the correct status code and message for GET /', (done) => {
      request(`${BASE_URL}/`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('should return correct message for valid cart ID', (done) => {
      request(`${BASE_URL}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 for invalid cart ID', (done) => {
      request(`${BASE_URL}/cart/hello`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('Available payments', () => {
    it('should return correct payment methods object', (done) => {
      request(`${BASE_URL}/available_payments`, { json: true }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('Login', () => {
    it('should return welcome message for valid userName', (done) => {
      const options = {
        url: `${BASE_URL}/login`,
        method: 'POST',
        json: true,
        body: { userName: 'Betty' },
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('should return 400 status code for missing userName', (done) => {
      const options = {
        url: `${BASE_URL}/login`,
        method: 'POST',
        json: true,
        body: {},
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(400);
        done();
      });
    });
  });
});
