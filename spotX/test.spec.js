const assert = require('chai').assert;

describe('Basic Tests', () => {
  
  it('Return an empty array if x is an empty array', () => {
    assert.deepEqual(xMarksTheSpot([]), []);
  });
  it('Return an empty array if no x found', () => {
    assert.deepEqual(xMarksTheSpot([['o', 'o'], ['o', 'o']]), []);
  });
  it('Return an empty array if more than one x found', () => {
    assert.deepEqual(xMarksTheSpot([['x', 'o'], ['o', 'x']]), []);
  });
  it('Return [0,0] when x at top left', () => {
    assert.deepEqual(xMarksTheSpot([['x', 'o'], ['o', 'o']]), [0, 0]);
  });
  it('Return [4,6] when x at position [4,6]', () => {
    let input = [
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ]
    assert.deepEqual(xMarksTheSpot(input), [4, 6]);
  });
  
});