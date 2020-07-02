const myModule = require('./myModule'); 

var x = 5; 
var x2 = myModule.square(x); 
console.log(x2); 

var result = myModule.addMult(3, 4); 
console.log(`Add. = ${result.add} \nMult. = ${result.mult}`); 
