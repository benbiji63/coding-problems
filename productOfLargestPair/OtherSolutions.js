// Version were largest element was found with inbuilt function
function maxProduct(a) {
  var biggest = Math.max.apply(Math, a);
  a.splice(a.indexOf(biggest), 1);
  return biggest * Math.max.apply(Math, a);
}

function maxProduct(a) {
  return a.splice(a.indexOf(Math.max.apply(Math,a)),1) * Math.max.apply(Math,a);
 }

 function maxProduct(a) {
  const max = Math.max(...a);
  return max*a.reduce((x,c) => c!==max&&c>x?c:x,0);
}