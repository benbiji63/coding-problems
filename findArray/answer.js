// Initial Answer
// Makes an finalArr array and push value of indexes at arr2 to finalArr
// Doesn't work for an empty array
function findArray(arr1, arr2) {
  let finalArr = [];
  for (const index of arr2) {
    finalArr.push(arr1[index]);
  }
  return finalArr;
}
// Final Answer
// Added a conditional to check for empty array
function findArray(arr1, arr2) {
  if (arr1.length < 1) {
    return [];
  }
  let finalArr = [];
  for (const index of arr2) {
    finalArr.push(arr1[index]);
  }
  return finalArr;
}
// Same code written using map function
function findArray(arr1, arr2) {
  if (arr1.length < 1) {
    return [];
  }
  return arr2.map(ele => arr1[ele]);
}
// One liner
const finalArray = (arr1, arr2) =>
  arr1.length ? arr2.map(ele => arr1[ele]) : [];
