// p:a array of string filled with '*'(diamonds) and '.', it will contain maximum of ten  characters
// : no.of turn took by the burglar needs to steal all the diamonds

// set count to zero, add 1 to count when you find a diamond and 2 diamonds adjacent
function diamondBurglar(locker) {
  let count = 0;
  for (const str of locker) {
    const diamonds = str.match(/\*/g).length;
    const adjacentDiamonds = str.match(/\*\*/g).length;
    count += diamonds-adjacentDiamonds
  }
  return count;
}
// adjacent

diamondBurglar(['*.*.*.*.*.', '...*..**..', '**.**...*.', '**..**..**'])

function diamondBurglar(locker) {
  let count = 0;
  for (const str of locker) {
    const diamonds = str.match(/\*/g).length;
    const adjacentDiamonds = str.match(/\*\*/g).length;
    count += diamonds-adjacentDiamonds
  }
  return count;
}
// 
function diamondBurglar(locker){
  return locker.join('.').match(/\*{1,2}/g).length 
}