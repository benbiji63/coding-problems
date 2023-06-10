// Works sufficiently but performance must be improved
function maxProduct(arr) {
  let sortedArray = arr.sort((a, b) => b - a);
  return sortedArray[0] * sortedArray[1];
}
// Built a version that was quicker  using an extra function  which returned index of largest number and splicing that array and getting the element;
function getIndexOfLargestElement(arr) {
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}
function maxProduct(arr) {
  let largestNum = arr.splice(getIndexOfLargestElement(arr), 1);
  let secondLargestNum = arr.splice(getIndexOfLargestElement(arr), 1);
  return largestNum * secondLargestNum;
}

maxProduct([56, 335, 195, 443, 6, 494, 252]);
