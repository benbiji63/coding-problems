function secondSymbol(s, symbol) {
  let count = 0  
  
  return [...s].findIndex(c => {
    if(c === symbol) count++
    return count === 2 && c === symbol
  })
}