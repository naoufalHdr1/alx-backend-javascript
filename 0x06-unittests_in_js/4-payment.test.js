// 3-payment.test.js

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and verify behavior', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
