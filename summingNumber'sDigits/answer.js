// Final answer
// Make the num positive, make it a string split it and sum 
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((sum,num)=>sum + +num,0)
}
