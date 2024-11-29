// 6-payment_token.js

const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('Integration with external API', () => {
  it('should return a resolved promise with data when success is true', () => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.be.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
