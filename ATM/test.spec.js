const Test = require('@codewars/test-compat');

describe("solve", function() {
  it("should work when chosing notes is possible", function() {
    Test.assertEquals(solve(770), 4, "Wrong result for 770");
    Test.assertEquals(solve(550), 2, "Wrong result for 550");
    Test.assertEquals(solve(10), 1, "Wrong result for 10");
    Test.assertEquals(solve(1250), 4, "Wrong result for 1250");
  });
  
  it("should return -1 if chosing notes is not possible", function() {
    Test.assertEquals(solve(125), -1, "Wrong result for 125");
    Test.assertEquals(solve(666), -1, "Wrong result for 666");
    Test.assertEquals(solve(42), -1, "Wrong result for 42");
  });
});