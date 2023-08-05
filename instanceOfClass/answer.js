// check if obj is inherited from classFunction
// an object and a class
// loop through the prototype of obj and check if it matches with prototype of  classFunction prototype 


const checkIfInstanceOf = function(obj, classFunction) {
  while(obj!=null){ 
    if (obj.prototype!==classFunction.prototype){
      return true
    }
    obj = obj.prototype
  }
  return false
};

const checkIfInstanceOf = function(obj, classFunction) {
  while(obj!=null){ 
    if (obj.constructor===classFunction){
      return true
    }
    obj = Object.getPrototypeOf(obj)
  }
  return false
};