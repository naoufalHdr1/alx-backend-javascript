// 4-pricing.js

import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateAmount(amount);
    this._currency = this._validateCurrency(currency);
  }

  // Validation methods
  static _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return amount;
  }

  static _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    return currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(amount) {
    this._amount = this._validateAmount(amount);
  }

  set currency(currency) {
    this._currency = this._validateCurrency(currency);
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
