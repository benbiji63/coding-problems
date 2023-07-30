// A 2D array of 'O' and 'X'
// Coordinate of 'X' if there's only one array else an empty array

// Using two nested loops go through the 2D array find coordinates of 'X' and push it to coordinateArray
// If the length of an array is greater than 2 return [] else flatten the coordinateArray array and returnit
const xMarksTheSpot = input => {
  const coordinateArray = [];
  for (let i = 0; i < input.length; i++) {
    let subArray = input[i];
    for (let j = 0; j < subArray.length; j++) {
      if (subArray[j] === 'X' || subArray[j] === 'x') {
        coordinateArray.push([i, j]);
      }
    }
  }
  return coordinateArray.length > 1 ? [] : coordinateArray.flat();
};
