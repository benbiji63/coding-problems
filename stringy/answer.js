function stringy(size) {
  const baseStr = '10';
  let string='';
  string = baseStr.repeat(size/2)

  if(size!==string.length){
    console.log(size!==string.length);
     string+='1'
  }
  return string
}