// An array of containing only numbers or characters'
// The number of subsets that can created from it without repetition

function estSubsets(arr) {
  // Remove repeating elements from array
  let set = new Set(arr);
  // Get no of powers
  return Math.pow(2, set.size) - 1;
}

console.log(estSubsets([2, 3, 4, 5, 5, 6, 6, 7, 8, 8]));
console.log(
  estSubsets(
    ['a', 'z', 'z', 'z', 'b', 'j', 'f', 'k', 'b', 'd', 'j', 'j', 'n', 'm', 'm']
  )
);
