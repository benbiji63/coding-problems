const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Sample Tests', () => {
  it('test', () => {
    assert.strictEqual(f(3, { a: 3, b: 4, c: 5 }), 4);
    assert.strictEqual(f(4, { a: 3, b: 4, c: 5 }), 5);
    assert.strictEqual(f(5, { a: 3, b: 4, c: 5 }), 3);
  });
});
