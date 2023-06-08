const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example test cases", function() {
  it("Test case in description", function() {
    assert.strictEqual(solution(1, 5), 2);
  });
});