// A function to be repeated, a number n that shows how many times to repeat
// Create a function that runs a function n times, takes the return values of previous value  and return its final return value

const createIterator = function (func, n) {
  return function (para) {
    let val =func(para) ;
    for (let i = 0; i < n-1; i++) {
       val = func(val);
    }
    return val;
  };
};