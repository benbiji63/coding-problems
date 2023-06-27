const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("What dominates your array?", () => {
  it("Fixed tests", () => {
    assert.strictEqual(dominator([3,4,3,2,3,1,3,3]),3);
    assert.strictEqual(dominator([1,2,3,4,5]),-1);
    assert.strictEqual(dominator([1,1,1,2,2,2]),-1);
    assert.strictEqual(dominator([1,1,1,2,2,2,2]),2);
  })  
});