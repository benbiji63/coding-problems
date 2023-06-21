// Initial code to be debugged
function getSumOfDigits(integer) {
  var sum = null;
  var digits = Math.floor(integer).toString();
  for (var ix = 1; ix < digits.length; ix = sum + 1) {
    sum = +digits[ix + 1];
  }
  return sum;
}
// Final answer
function getSumOfDigits(integer) {
  let sum = 0;
  const digits = Math.floor(integer).toString();
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  return sum;
}
