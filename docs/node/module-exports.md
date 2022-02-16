---
title: Module Exports
---

We can structure our codes with modular approach. We write our libraries in
separate source files, and call them in the main program as we need them.

We write the following function in file named `myModule.js` :
```js
module.exports.square = function square(x) {
    return x**2;
};
```

Now we can have a main program, say `main.js` where we can call this function.
```js
const myModule = require('./myModule');

var x = 5;
var x2 = myModule.square(x);
console.log(x2);
```

### Exporting function with multiple return values
One way is to return an object:
```js
module.exports.addMult = (input1, input2) => {
    add = input1 + input2;
    mult = input1 * input2;
    return { add: add, mult: mult };
};
```
Note the use of arrow function to make it concise.
```js
const myModule = require('./myModule');

var result = myModule.addMult(3, 4);
console.log(`Add. = ${result.add} \nMult. = ${result.mult}`);
```
