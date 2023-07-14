const chai = require("chai");
const assert = chai.assert;

describe("Sample Tests", function() {
  it(`given fire: "xxxxYxYx" and w: 4`, function() {
    assert.strictEqual(waterbombs("xxxxYxYx", 4), 3);
  });
  it(`given fire: "xxYxx" and w: 3`, function() {
    assert.strictEqual(waterbombs("xxYxx", 3), 2);
  });
});

describe("Tiny Fires", function() {
  it(`given fire: "Y" and w: 4`, function() {
    assert.strictEqual(waterbombs("Y", 4), 0);
  });
  it(`given fire: "xx" and w: 1`, function() {
    assert.strictEqual(waterbombs("xx", 1), 2);
  });
});

describe("Medium Fires", function() {
  it(`given fire: "xxYxx" and w: 3`, function() {
    assert.strictEqual(waterbombs("xxYxx", 3), 2);
  });
  it(`given fire: "xxxYx" and w: 1`, function() {
    assert.strictEqual(waterbombs("xxxYx", 1), 4);
  });
});

describe("Big Fires", function() {
  it(`given fire: "xxxxYxYx" and w: 4`, function() {
    assert.strictEqual(waterbombs("xxxxYxYx", 4), 3);
  });
  it(`given fire: "xxxxxYxYx" and w: 2`, function() {
    assert.strictEqual(waterbombs("xxxxxYxYx", 2), 5);
  });
});