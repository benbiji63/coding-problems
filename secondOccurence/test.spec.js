const chai = require("chai");
const assert = chai.assert;

describe("Fixed test cases", function() {
  it("Basic test cases", function() {
    assert.strictEqual(secondSymbol('Hello world!!!','l'), 3, 'Find the index of the second symbol "l" in the string');
    assert.strictEqual(secondSymbol('Hello world!!!', 'o'), 7, 'Find the index of the second symbol "o" in the string');
    assert.strictEqual(secondSymbol('Hello world!!!', 'A'), -1, 'The symbol "A" is not in the string');
    assert.strictEqual(secondSymbol('', 'q'), -1, 'The symbol "q" is not in the string');
    assert.strictEqual(secondSymbol('Hello', '!'), -1, 'The symbol "!" is not in the string');

  });
});