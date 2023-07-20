describe("Basic tests", function(){
  Test.assertDeepEquals(solve(["abode","ABc","xyzD"]),[4,3,1]);
  Test.assertDeepEquals(solve(["abide","ABc","xyz"]),[4,3,0]);
  Test.assertDeepEquals(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
  Test.assertDeepEquals(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);
  });