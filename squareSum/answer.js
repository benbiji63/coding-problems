function squareSum(numbers){
  return numbers.reduce((sumOfSquare,num) => sumOfSquare+= num**2,0)
}