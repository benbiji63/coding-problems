// Works for a 3D plane
//  First idea I came up with
// function quadrant(...cords) {
//   const reverse = cords.reverse();
//   let quadrant = 1;
//   let value = 4;
//   reverse.forEach(num => {
//     if (num < 0) {
//       quadrant += value;
//     }
//     value = Math.floor(value / 2);
//   });
//   return quadrant;
// }

// function quadrant(...cords) {
//   const reverse = cords.reverse();
//   let quadrant = 8;
//   reverse.forEach(num => {
//   let value = quadrant/2;
//     if (num > 0) {
//       quadrant -= value;
//       console.log(quadrant);
//     }
//   });
//   return quadrant;
// }

// function quadrant(...cords) {
//   let quadrant = 1;
//   let value = 1;
//   for (const cord of cords) {
//     if(cord<0){
//       quadrant+=value
//     }
//     value*=2;
//   }
//   return quadrant
// }

// function quadrant(...cords) {
//   let quadrant = 1;
//   return quadrant
// }

function quadrant(x, y) {
  let quadrant ;
  if (x>0&&y>0) quadrant=1
  if (x<0&&y>0) quadrant=2
  if (x<0&&y<0) quadrant=3
  if (x>0&&y<0) quadrant=4
  return quadrant;
}
