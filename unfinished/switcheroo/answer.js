function switcheroo(x){
  return x.split('').map(char=>  char !=='c'? char==='a'?'b':'a':'c').join('')
}

console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');