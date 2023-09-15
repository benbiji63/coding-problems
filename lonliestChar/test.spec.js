const chai = require("chai");
const assert = chai.assert;

describe("Iterator for 'getDouble' function", function() {
  var getDouble = function (n) {
      return n + n;
    };
    
  it("Running the iterator for once", function() {
    var doubleIterator = createIterator(getDouble, 1);
    
    assert.strictEqual(doubleIterator(3), 6, "Returns double of 3 as 6");
    assert.strictEqual(doubleIterator(5), 10, "Returns double of 5 as 10");
  });
  
  it("Running the iterator twice", function() {
    var getQuadruple = createIterator(getDouble, 2);
    
    assert.strictEqual(getQuadruple(2), 8, "Returns quadruple of 2 as 8");
    assert.strictEqual(getQuadruple(5), 20, "Returns quadruple of 5 as 20");
  });
});