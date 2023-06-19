// Initial answer
// Looped one time more than expected
function SeriesSum(n) {
  let sum = 1.00;
  let acc = 1;
  for ( let i = 0;i<n;i++){
    acc+=3;
    sum+=1/acc
  }
 return sum;
}
// Answer must have been string and have two decimal
function SeriesSum(n) {
  let sum = 1.00;
  let acc = 1;
  for ( let i = 1;i<n;i++){
    acc+=3;
    sum+=1/acc
  }
 return sum;
}
// Didn't  work for 0 as argument
function SeriesSum(n) {
  let sum = 1.00;
  let acc = 1;
  for ( let i = 1;i<n;i++){
    acc+=3;
    sum+=1/acc
  }
 return String(sum.toFixed(2));
}

function SeriesSum(n) {
  if(n<1){
    return '0.00';
  }
  let sum = 1.00;
  let acc = 1;
  for (let i = 1;i<n;i++){
    acc+=3;
    sum+=1/acc
  }
 return String(sum.toFixed(2));
}