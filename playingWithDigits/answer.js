// A +ve number given in the form abcd and a +ve integer number
// Go through each number an raise  it to a power starting from p,p+1,p+2... and find if it's a multiple of first number

// Split the number to array and map it and find power of each while increasing p sum its values using reduce
// If the sum is a multiple of n return its there quotient else return -1
function digPow(n, p) {
  let multiple = n.toString().split('').map(num=>parseInt(num)**(p++)).reduce((acc,num)=>acc+num);
  return multiple%n===0?multiple/n:-1
}

function digPow(n, p) {
  let multiple = n.toString().split('').reduce((acc,num)=>acc+parseInt(num)**(p++),0);
  return multiple%n===0?multiple/n:-1
}
