// function duplicates(arr) {
//   let duplicateArray = [];

//   //TODO: return the array of duplicates from arr

//   for ( let i = 0;i<arr.length;i++){
//    for ( let j = i+1;j<=arr.length;j++){
//     if(arr[i]===arr[j]){
//       duplicateArray.unshift(arr[j]);
//       break;
//     }
//   }
//  }
//   return duplicateArray;
// }
//failed because repeating elements were added twice
function duplicates(array) {
  return array.filter((number, index, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === number && i !== index) {
        return true;
      }
    }
  });
}

// Failed because ele should only be pushed to array when it's found second time
function duplicates(arr) {
  let duplicate = [];
  arr.filter((ele, index) => {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] === ele &&
        duplicate.includes(arr[i]) === false &&
        index !== i
      ) {
        duplicate.push(ele);
        return true;
      }
    }
  });
  return duplicate;
}

function duplicates(arr) {
  let duplicate = [];
  arr.filter((ele, index) => {
    let tempArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (
        arr[i] === ele &&
        tempArray.includes(arr[i]) &&
        index !== i &&
        !duplicate.includes(arr[i])
      ) {
        duplicate.push(ele);
        return true;
      }
    }
  });
  return duplicate;
}
function duplicates(arr) {
  let duplicate = [];
  arr.filter((ele, index) => {
    let tempArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (
        arr[i] === ele &&
        tempArray.includes(arr[i]) &&
        index !== i &&
        !duplicate.includes(arr[i])
      ) {
        duplicate.push(ele);
      }
      tempArray.push(arr[i]);
    }
  });
    return duplicate;
}