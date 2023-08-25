function charToAscii(string) {
  if(string===''){
    return null
  }
  let obj = {};
  string= string.match(/[A-Za-z]/g)
  let chars = new Set(string);
  for (const str of chars.values()) {
    obj[str]=str.charCodeAt(0)
  }
  return obj
}