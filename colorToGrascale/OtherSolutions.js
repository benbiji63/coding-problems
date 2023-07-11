const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

it("Basic tests", function() {  
  assert.equal(rgbToGrayscale("#FFFFFF").toUpperCase(), '#FFFFFF')
  assert.equal(rgbToGrayscale("#0000FF").toUpperCase(), '#1D1D1D')    
  assert.equal(rgbToGrayscale("#00FF00").toUpperCase(), '#969696')    
  assert.equal(rgbToGrayscale("#FF0000").toUpperCase(), '#4C4C4C')
  assert.equal(rgbToGrayscale("#000000").toUpperCase(), '#000000', "Make sure your solution does zero padding!") 
});