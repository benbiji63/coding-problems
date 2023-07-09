// p: a string with 'Y' on left and 'F' with '-' on either side of them
// r: a string starting with  'O' and 'i' added with half the distance between  'F' and 'Y' and a ' F!' at end
// Create a variable oi and initialize  it with and find the distance between F AN Y
// add i to oi distance/2 times
// return it with ' F!'

function madShout(sidewalk) {
  let oi = 'O';
  let distance = Math.ceil((sidewalk.indexOf('F') - sidewalk.indexOf('Y')) / 2);
  for (let i = 0; i < distance; i++) {
    oi += 'i';
  }
  return oi + ' F!';
}
