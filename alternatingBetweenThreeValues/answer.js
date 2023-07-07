// p: a value of a property will be in ,  an object with keys a,b,c
// r: value of next element in the object
// 
function f(x, cc) {
  const indexOfX = Object.values(cc).indexOf(x)
  return indexOfX!==2? Object.values(cc)[indexOfX+1]:Object.values(cc)[0];
}
