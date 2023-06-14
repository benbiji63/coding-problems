Array.range = function(start, count) {
  let returnArr =[];
  while(returnArr.length<=count){
     returnArr.push(start);
     start++;
  }
  return returnArr;
}

Array.prototype.sum = function() {
   return this.reduce((acc,cur)=>acc+=cur,0)  
}