// function dominator(arr) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let turns = [];
//   let count = 0;
//   sortedArr.forEach((num, i) => {
//     if (num !== sortedArr[i + 1]) {
//       turns.push(count)
//       count = 0;
//     }
//     if (num === sortedArr[i + 1]) {
//       count++
//     }
//   });
//   return turns.sort((a, b) => a - b).pop();
// }

// Initial solution

function dominator(arr) {
  let values = [];
  let numStr = '';
  arr
    .sort((a, b) => a < b)
    .forEach((num, i) => {
      if (num !== sortedArr[i + 1]) {
        values.push(numStr);
        numStr = '';
        numStr += num;
      } else {
        numStr += num;
      }
    });

  
}
