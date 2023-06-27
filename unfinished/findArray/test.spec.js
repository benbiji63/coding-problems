const chai = require("chai")
const assert = chai.assert
describe("Tests", () =>{
  it("BasicTests", () => {
    assert.deepEqual(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]), ['a', 'a'])
    assert.deepEqual(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]), [1, 1, 1])
    assert.deepEqual(findArray([1, 2, 3, 4, 5], [0]), [1])
    assert.deepEqual(findArray([1, 2, 3, 4, 5], [4,2,0]), [5,3,1])
    assert.deepEqual(findArray([1, 2, 3, 4, 5], [2,2,2]), [3,3,3])
    assert.deepEqual(findArray(['this', 'is', 'test'], [0, 1, 2]), ['this', 'is', 'test'])
  });

  it("Less basic tests", () =>{
    assert.deepEqual(findArray([1,2,3], []), [])
    assert.deepEqual(findArray([], [2,1,3]), [])
    assert.deepEqual(findArray([], []), [])
  });
});