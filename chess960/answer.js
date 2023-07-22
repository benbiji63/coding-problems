function isValidChess960(pieces) {
  if ((pieces.lastIndexOf('B') - pieces.indexOf('B')) % 2 !== 0) {
    if(pieces.lastIndexOf('R')> pieces.indexOf('K')&&pieces.indexOf('R')< pieces.indexOf('K')){
      return true
    }
  }
  return false;
}
