// Initial code to  be debugged
function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}
// Final Answer
// Gets first character changes it to toUpperCase and concatenate with rest of the string
function capitalizeWord(word) {
  return word.substring(0, 1).toUpperCase() + word.slice(1);
}
