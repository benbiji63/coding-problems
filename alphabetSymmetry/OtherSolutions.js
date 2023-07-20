function solve(arr){  
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabet.indexOf(y)).length);
};

function solve(arr) {  
  return arr.map(x => [...x.toLowerCase()].reduce((s,v,i) => s + (v.charCodeAt() == i + 97), 0))
}