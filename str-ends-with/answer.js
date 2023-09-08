
// Two string
// Return true if first string ends with second string else return false 
// Extract the last characters of first string with a length equal to length of the strength
const solution = (str, ending) => ending === str.substring(str.length,str.length-ending.length)