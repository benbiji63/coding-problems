const { assert } = require('chai');

describe("Sample tests", function() {
  
  function dotest(input, expected) {
    let actual = consonantCount(input);
    assert.strictEqual(actual, expected, `Invalid answer for str='${input}'`);    
  }
    
  it("Empty string", function() {
    dotest('', 0);
  });

  it("Only vowels", function() {
    dotest('aeiouAEIOU', 0);
    dotest('aaa', 0);
  });

  it("Only consonants", function() {
    dotest('bcdfghjklmnpqrstvwxyz', 21);
    dotest('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ', 42);
  });

  it("Test with 'Y'", function() {
    dotest('y', 1);
    dotest('Y', 1);
  });

  it("Regex \\w trap", function() {
    dotest('01234567890_', 0);
  });

  it("Special characters", function() {
    dotest(' ^&$#', 0);
  });

  it("Full  alphabet", function() {
    dotest('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#', 42);
  });
});