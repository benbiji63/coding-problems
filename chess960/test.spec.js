describe('tests suite', function () {
  const { assert } = require('chai');

  function doTest(pieces, expected) {
    const actual = isValidChess960(pieces);
    assert.strictEqual(actual, expected, `for ${pieces}\n`);
  }

  it('sample tests', function () {
    doTest('RNBQKBNR', true);
    doTest('QNNBBRKR', true);
    doTest('QRNNBBRK', false);
    doTest('QNBNBRKR', false);
  });
});
