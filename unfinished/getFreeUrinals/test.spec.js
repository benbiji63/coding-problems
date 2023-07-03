const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('SampleTestsValid', function () {
  it('given 10001', function () {
    assert.deepEqual(getFreeUrinals('10001'), 1);
  });
  it('given 1001', function () {
    assert.deepEqual(getFreeUrinals('1001'), 0);
  });
  it('given 00000', function () {
    assert.deepEqual(getFreeUrinals('00000'), 3);
  });
  it('given 0000', function () {
    assert.deepEqual(getFreeUrinals('0000'), 2);
  });
  it('given 01000', function () {
    assert.deepEqual(getFreeUrinals('01000'), 1);
  });
  it('given 00010', function () {
    assert.deepEqual(getFreeUrinals('00010'), 1);
  });
  it('given 10000', function () {
    assert.deepEqual(getFreeUrinals('10000'), 2);
  });
  it('given 1', function () {
    assert.deepEqual(getFreeUrinals('1'), 0);
  });
  it('given 0', function () {
    assert.deepEqual(getFreeUrinals('0'), 1);
  });
  it('given 10', function () {
    assert.deepEqual(getFreeUrinals('10'), 0);
  });
});

describe('SampleTestsWrong', function () {
  it('given 110', function () {
    assert.deepEqual(getFreeUrinals('110'), -1);
  });
  it('given 101100001', function () {
    assert.deepEqual(getFreeUrinals('101100001'), -1);
  });
});
