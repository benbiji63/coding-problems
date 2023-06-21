function getSumOfDigits(integer) {
  return (integer + '').split('').reduce((sum, d) => sum + (+d || 0), 0);
}

function getSumOfDigits(integer) {
  return Array.from(String(integer), Number).reduce((a, b) => a + b);
}

const getSumOfDigits = int => [...(int + '')].reduce((a, b) => a + +b, 0);
function getSumOfDigits(n) {
  return  n && Math.abs(n%10) + getSumOfDigits(n/10|0);
}