
// Completes checking with a single loop and pushes 
// Doesn't work if only one row has and there are more than 1 in it
const xMarksTheSpot = (input) => {
  let coords = []

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("x")) {
      coords.push([i, input[i].indexOf("x")])
    }
  }
  if (coords.length === 1) {i
    return coords[0]
  } else {
    return []
  }
}