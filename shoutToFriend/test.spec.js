const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests:", function() {
  it("Example 1", function() {
    assert.deepEqual(madShout('-----------------Y--------F--------------'), 'Oiiiii F!');
  });
  
  it("Example 2", function() {
    assert.deepEqual(madShout('------------Y-F------------------'), 'Oi F!');
  });
  
  it("Example 3", function() {
    assert.deepEqual(madShout('----------YF---------'), 'Oi F!');
  });
  
  it("Example 4", function() {
    assert.deepEqual(madShout('------------Y-------------F---------------'), 'Oiiiiiii F!');
  });
  
  it("Example 5", function() {
    assert.deepEqual(madShout('--------Y----------------F-------'), 'Oiiiiiiiii F!');
  });
});