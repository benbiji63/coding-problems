// An a array of integers,a function to execute on numbers,an initial value
// Runs the given function on all  elements of the array and get the final input of the array from inital value

// const reduce = function(nums, fn, init) {
//   // reduce the array and run fn for all elements with accumulator value as init
//   return nums.reduce((acc,num)=>fn(acc,num),init)
// };

const reduce = function (nums, fn, init) {
  nums.forEach(num => {
    init = fn(init, num);
  });
  return init;
};
