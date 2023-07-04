// Finding words with 5 or more length with regex 
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split('').reverse().join('');
  });
}
