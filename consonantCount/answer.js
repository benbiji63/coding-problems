// p: a string with only english letters
// r: no.of consonants in the argument

// Split a string to array filter consonants and get its length
// Doesn't work for string with other characters other than alphabets
function consonantCount(str,vowels=['a','e','i','o','u']) {
  return str.toLowerCase().split('').filter(letter => !vowels.includes(letter)).length
}
// Final answer
function consonantCount(str,vowels=['a','e','i','o','u']) {
  return str.toLowerCase().replace(/[^a-z]+/g, '').split('').filter(letter => !vowels.includes(letter)).length
}

