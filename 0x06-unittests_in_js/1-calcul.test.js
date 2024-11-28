// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle negative numbers', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });

    it('should handle zero', function () {
      assert.strictEqual(calculateNumber('SUM', 0, 4.5), 5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle negative numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });

    it('should handle zero', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 4.5), -5);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle negative numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -4.4, 2.4), -2);
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
    });
  });
});
