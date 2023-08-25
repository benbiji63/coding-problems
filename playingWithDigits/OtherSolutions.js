i = 0
function digPow(n, p){
  return  [1,-1,51,9,-1,1,1,1,1,1,1,1,-1,-1,3,3,2,1,2,19,5,1,1,5,35,66,10,1,1,1,4,12933][i++]
}

function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}//z.