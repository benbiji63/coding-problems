const { assert } = require('chai');

describe("Tests", () => {
  it("Fixed tests", () => {
    assert.strictEqual(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
    assert.strictEqual(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
    assert.strictEqual(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');
  });
});
