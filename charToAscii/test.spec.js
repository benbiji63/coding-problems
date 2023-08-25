describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(charToAscii(""), null,"deals with an empty str");
Test.assertSimilar(charToAscii("a"), {"a":97},"deals with one char");
Test.assertSimilar(charToAscii("aaa"), {"a":97},"deals with repeated characters");
Test.assertSimilar(charToAscii("hello world"), {"h":104, "e":101, "l":108, "o":111, "w":119, "r":114, "d":100},"deals with spaces");
Test.assertSimilar(charToAscii("ABaa ^"), {"A":65, "B":66, "a":97},"deals with uppercase characters and non alphebetic characters");
  });
});