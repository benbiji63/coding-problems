//  A lowercase string that has alphabetic characters only and no spaces
//  Group  consonants and add their positional value and find biggest among them
function solve(s) {
  // Create an array of characters
  const alphabets = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  // Group letters removing vowels
  const consonantsOnlyStr = s.split(/[aeiou]/gi).filter(str => str != '');

  const val = consonantsOnlyStr.reduce((largestValue, subStr) => {
    let val = subStr.split('').reduce((acc, char) => {
      return acc + alphabets.indexOf(char)+1;
    }, 0);
    return largestValue < val ? val : largestValue;
  }, 0);
  return val;
}

