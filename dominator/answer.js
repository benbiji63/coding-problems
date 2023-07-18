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

// function dominator(arr) {
//   let values = [];
//   let numStr = '';
//   arr
//     .sort((a, b) => a < b)
//     .forEach((num, i) => {
//       if (num !== sortedArr[i + 1]) {
//         values.push(numStr);
//         numStr = '';
//         numStr += num;
//       } else {
//         numStr += num;
//       }
//     });
// }
//  A array of numbers, num>= 0
//  the number that repeats most have a count more than half of arr.length, else -1
// [2,3,4,5,2,2,2,2] => 2
// [] => -1
// [2,3,45,2,3] => -1
function dominator(arr) {
  let values = {};
  for (const num of arr) {
    if (!values.hasOwnProperty(`${num}`)) {
      values[num] = 1;
      continue;
    }
    values[num] += 1;
  }
  const val = Object.keys(values).map(key=>[Number(key),values[key]]).sort((a,b)=>a[1]>b[1]?-1:1)[0]
  return (val[1]>(arr.length/2)?val[0]:-1);
}

console.log(dominator([2, 3, 4, 5, 2, 2, 2, 2]), 2);
console.log(dominator([]), -1);
