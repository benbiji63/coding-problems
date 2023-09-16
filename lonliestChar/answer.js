//  A string with a-z characters and ' '
// Character with most number of  ' ' in to their side as an array

function loneliest(str) {
  let copy = str;
  let chars = str.replace(/ /g, '');
  let spacing = [];

  for (let i = 0; i < chars.length-1; i++) {
    const total = str.indexOf(chars[i + 1]) - str.indexOf(chars[i - 1]) - 1;
    spacing.push({ char: chars[i], spaces: total });
  }
  

  spacing.push({char:chars.at(-1),spaces:str.indexOf(chars.at(-1)) - str.indexOf(chars.at(-2))})
  
  return   spacing.sort((a, b) => a.spaces > b.spaces?-1:1).filter((char,i,arr)=>char.spaces===arr[0].spaces).map(ele=>ele.char);
}

