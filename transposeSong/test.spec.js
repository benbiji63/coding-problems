const chai = require("chai");
const assert = chai.assert;

describe("transpose", function() {
  it("Sample Tests", function() {
  [
    [ ['A'], 1, ['A#'] ],
    [ ['E'], 5, ['A'] ],
    [ ['D#'] , 8  , ['B'] ],
    [ ['Ab', 'Gb'] , 2  , ['A#', 'G#'] ],
    [ ['Bb', 'C#', 'E'] , -4  , ['F#', 'A', 'C'] ],
    [ ['A#', 'C#', 'D', 'D#', 'A#', 'F#', 'D#'] , -6  , ['E', 'G', 'G#', 'A', 'E', 'C', 'A'] ],
    [ ['C', 'C', 'C#', 'D', 'F', 'D', 'F', 'D', 'D', 'C#', 'C', 'G', 'C', 'C'] , 4  , ['E', 'E', 'F', 'F#', 'A', 'F#', 'A', 'F#', 'F#', 'F', 'E', 'B', 'E', 'E'] ] 
  ].forEach(function(tst){
    let inp = tst[0], int = tst[1], exp = tst[2], msg = `Input: [${inp}], ${int}`;
    assert.deepEqual(transpose(inp, int), exp, msg );
  });
  });
});