const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example tests", function () {
    it("Test simple string", function () {
        assert.deepEqual(loneliest('a'), ['a'], "result");
    });
  
    it("Test simple string", function () {
        assert.deepEqual(loneliest('abc d   ef  g   h i j      '), ['g'], "result");
    });
  
    it("Test simple string", function () {
        assert.deepEqual(loneliest('a   b   c '), ['b'], "result");
    });
  
    it("Test simple string", function () {
        assert.deepEqual(loneliest('  abc  d  z    f gk s '), ['z'], "result");
    });
  
    it("Test simple string", function () {
        assert.deepEqual(loneliest('a  b  c  de  ').sort(), ['b', 'c'], "result");
    });
  
    it("Test simple string", function () {
        assert.deepEqual(loneliest('abc').sort(), ['a', 'b', 'c'], "result");
    });
});