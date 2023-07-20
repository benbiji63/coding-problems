// An array of words 
// The number of letters  that are in alphabetic order per word

// Create an empty to store values and an  array of alphabets
// Run a nested loop and if index and alphabets matches increase count and push it to values the end of nested loop 

function solve(arr) {
  let values = [];
  let alphabets =  Array.from(Array(26)).map((e,i)=>i+65).map(code => String.fromCharCode(code).toLowerCase());
  arr.map( word=>word.split(''))
  for ( let i = 0;i<arr.length;i++){
    let count = 0;
    let word = arr[i].toLowerCase()
    for ( let j = 0;j<=word.length;j++){
      if(word[j] === alphabets[j])
      count++;
    }
    values.push(count)
  }
  return values;
}


console.log(solve(['abode', 'ABc', 'xyzD']), [4, 3, 1]);
