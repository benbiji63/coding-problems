// A number between 1 <= n <= 1500 which represents money

// You have 10, 20, 50, 100, 200 and 500 notes

// If it's not a multiple of ten it can't be for this question
//
function solve(n) {
  // Return the minimum number of notes required to match the value of input. If it isn't possible return-1
  if (n % 10 !== 0) {
    return -1;
  }
  // Create an array of available type of notes and a variable count to keep the count of how many notes are required
  let availableNotes = new Array(500, 200,100, 50, 20, 10);
  let count = 0;
  while (n>0) {
    // If the input is greater than first value in availableNotes array subtract the value from input and increment count
    if (n >= availableNotes[0]) {
      count++;
      n -= availableNotes[0];
    }
    //  If it's less than first value in  availableNotes then remove the first value
    else {
      availableNotes.shift();
    }
  }
  return count;
}



