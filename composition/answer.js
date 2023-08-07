// An array of function that can manipulate a variable 
// A function which takes in a variable and does all the operations in the array of outer function  from left to right
 
var compose = function(functions) {
	return function(x) {
        return functions.reduceRight((acc,fn)=>fn(acc),x)
    }
};
