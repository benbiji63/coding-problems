function solve(s) {
  let highest = 0
  let sum = 0
  
  for (const char of s) {
    if (isConsonant(char)) {
      sum += getValue(char)
      
      if (highest < sum) {
          highest = sum
      }
    } else {
      sum = 0
    }
  }  
  
  return highest
};

function getValue(char) {
  return char.charCodeAt(0) - 97 + 1
}

function isConsonant(char) {
  return !'aeiou'.includes(char)
}

const solve = s => s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0)-96,0 )), 0);