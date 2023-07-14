function waterbombs (neighborhood, spread) {
  let firePattern = new RegExp(`x{1,${spread}}`, "g")
  let fires = neighborhood.match(firePattern)
  
  if (!fires) return 0
  return fires.length
}