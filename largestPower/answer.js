// Initial answer
// Didn't work for special cases
function largestPower(n) {
  let largest = 1;
  let count = -1;
  for (let i = 2; i < n; i++) {
    for (let j = 2; j < n; j++) {
      if (i ** j > n) {
        break;
      }
      if (i ** j > largest) {
        largest = i ** j;
        count = 1;
      } else if (i ** j === largest) {
        count++;
      }
    }
  }
  return [largest, count];
}
console.log(largestPower(65));
// Final answer
function largestPower(n) {
  if (n <= 1) {
    return [0, -1];
  }
  let largest = 1;
  let count = -1;
  for (let i = 2; i < n; i++) {
    for (let j = 2; j < n; j++) {
      if (i ** j >= n) {
        break;
      }
      if (i ** j > largest) {
        largest = i ** j;
        count = 1;
      } else if (i ** j === largest) {
        count++;
      }
    }
  }
  return [largest, count];
}
