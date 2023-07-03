// Initial answer
// Doesn't work with cases with three or more zeroes together
function getFreeUrinals(urinals) {
  if (urinals.includes('11')) {
    return -1;
  }
  return urinals
    .split('')
    .filter(
      (ele, i) =>
        ele === '0' && urinals[i - 1] !== '1' && urinals[i + 1] !== '1'
    ).length;
}
// Failed in situations with random order
function getFreeUrinals(urinals) {
  const arr = urinals.split('');
  if (urinals.includes('11')) {
    return -1;
  } else if (urinals.includes('000')) {
    if(urinals.includes('0001')||urinals.includes('1000')){
      return Math.ceil((arr.filter(num=>num==='0').length/2)-1);
    }
    return Math.ceil((arr.filter(num=>num==='0').length/2));
  } else {
    return arr.filter(
      (ele, i) =>
        ele === '0' && urinals[i - 1] !== '1' && urinals[i + 1] !== '1'
    ).length;
  }
}

function getFreeUrinals(urinals){
  if (urinals.match("11")) {
    return -1
  }
  let counter = 0;
  for (let i = 0; i < urinals.length; i++) {
    if (urinals[i] == 0) {
      if ((i == 0 || urinals[i - 1] == 0) && (i == urinals.length - 1 || urinals[i + 1] == 0)) {
        counter++;
        urinals = urinals.substring(0, i) + "1" + urinals.substring(i+1);
      }
    }
  }
  return counter;
}