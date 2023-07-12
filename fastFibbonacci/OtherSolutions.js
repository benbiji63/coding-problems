// calculate every turn with single repetition
function fib(num, current = 0, next = 1) {
  if (num === 0)
    return current;
    
  return fib(--num, next, current + next);
}

var f = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const fib = n => f[n] > -1 ? f[n] : f[n] = fib(n - 1) + fib(n - 2);