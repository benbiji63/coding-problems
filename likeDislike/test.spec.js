const { assert } = require("chai");

describe("Likes vs. Dislikes",() => {
  it("description example tests",() => {
    assert.strictEqual( likeOrDislike([Dislike]), Dislike );
    assert.strictEqual( likeOrDislike([Like,Like]), Nothing );
    assert.strictEqual( likeOrDislike([Dislike,Like]), Like );
    assert.strictEqual( likeOrDislike([Like,Dislike,Dislike]), Nothing );
  });
  it("more example tests",() => {
    assert.strictEqual( likeOrDislike([Dislike,Dislike]), Nothing );
    assert.strictEqual( likeOrDislike([Like,Like,Like]), Like );
    assert.strictEqual( likeOrDislike([Like,Dislike]), Dislike );
    assert.strictEqual( likeOrDislike([Dislike,Like,Dislike]), Dislike );
    assert.strictEqual( likeOrDislike([Like,Like,Dislike,Like,Like,Like,Like,Dislike]), Dislike );
    assert.strictEqual( likeOrDislike([]), Nothing );
  });
});