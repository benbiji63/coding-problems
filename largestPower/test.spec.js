const chai = require("chai");
const assert = chai.assert;

describe("Example cases", function() {
  it("basic tests", function() {
    assert.deepEqual(largestPower(90), [81, 2])
    assert.deepEqual(largestPower(6), [4, 1])
    assert.deepEqual(largestPower(65), [64, 3])
    assert.deepEqual(largestPower(3), [1, -1])
    assert.deepEqual(largestPower(1), [0, -1])
    assert.deepEqual(largestPower(81), [64, 3])
    assert.deepEqual(largestPower(29), [27, 1])
    assert.deepEqual(largestPower(4), [1, -1])
  });
});