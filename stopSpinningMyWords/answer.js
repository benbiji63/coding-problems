// p:string of one or more words
// r: the same string, but with all five or more letter words reversed
// e: 'I lived in India' => 'I devil in aidnI'

// Split string  into an array and map  through it
// Reverse the words with length  more than 4 by splitting it into an array reversing the array and joining
// Join the array to a string
const spinWords = str => {
  return str
    .split(' ')
    .map(word => (word.length >= 5 ? word.split('').reverse().join(' ') : word))
    .join(' ');
};
