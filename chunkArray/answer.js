// An array of , a number determining the subArray
// An array filled with subArrays with length of size , the last subArray can be of lesser length
// Slice elements from initial array with length size and push it to resultArr
const chunk = function (arr, size) {
  let resultArr =[]
  while(arr.length!==0){
    resultArr.push(arr.splice(0,size))
  }
  return resultArr;
};