// Final answer
// Split string into an array filter it based on index and combine
function sortMyString(s) {
  let arrStr = s.split('');
  let evenString = arrStr.filter((letter, i) => i % 2 !== 0).join('');
  let oddString = arrStr.filter((letter, i) => i % 2 === 0).join('');
  return oddString + ' ' + evenString;
}
