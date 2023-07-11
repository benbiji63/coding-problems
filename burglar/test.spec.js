const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests:", function() {
  it("Example 1", function() {
    assert.deepEqual(diamondBurglar(['*.*.*.*.*.', '...*..**..', '**.**...*.', '**..**..**']), 13);
  });
  
  it("Example 2", function() {
    assert.deepEqual(diamondBurglar(['..*.*.*...', '.**.*.*.**', '*........*']), 9);
  });
  
  it("Example 3", function() {
    assert.deepEqual(diamondBurglar(['..*....*..', '....*.....', '*...**....', '..**....**', '..**..**.*', '.*.*.*.**.']), 14);
  });
  
  it("Example 4", function() {
    assert.deepEqual(diamondBurglar(['.*...*...*', '..***..*..', '...**.*...', '.***.**..*']), 12);
  });
  
  it("Example 5", function() {
    assert.deepEqual(diamondBurglar(['..****..*.', '..***.....', '.*..*...*.', '......**..']), 9);
  });
});