// Used filter method to check if an index in arr2 is in arr1
function findArray(arr1, arr2){
  return arr2.filter( i  => i< arr1.length ).map( i => arr1[i] )
}//z.