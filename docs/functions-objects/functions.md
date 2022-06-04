---
title: Functions
---

Creating a basic named function. Here I will write the function a file called
function.js, and load it to our empty index.html. Later I will use console to
call and print the results.
```js
function multiply(a, b) {
    let result = a * b;
    return result;
}
```

Now on the console:
```js
mult = multiply(6, 9);
console.log(mult);

54

console.log(multiply(17, 4))

68
```

### Anonymous function

Anonymous functions do not have name, they are tied to variables or events.
```js
let a = 5/6;
let b = 7/9;

const theBiggest = function() {
    a > b ? result = a : result = b;
    return result;
}
```
```js
let biggerRatio = theBiggest()  // We invoke the function by adding () to the end of the variable
console.log(biggerRatio)

0.8333333333333334
```
Note that if you don't add the parenthesis () in the end of the variable, and `console.log` it will print the function.

We can have arguments to an anonymous function as well:
```js
const theBiggest2 = function(x, y) {
    x > y ? result = x : result = y;
    return result;
}
```
```js
let biggerRatio2 = theBiggest2(3/4, 5/7);
console.log(biggerRatio2)

0.75
```

### Immediately invoked function expression

In this case the function is invoked as soon as the browser encounters them. It
can populate our variable straightaway. We wrap the whole function inside a
parenthesis (), followed by another set of parenthesis to pass the variables.
```js
const theBiggest3 = (function(a, b) {
    a > b ? result = a : result = b;
    return result;
})(3/4, 5/7)

console.log(theBiggest3);

0.75
```

### Arrow functions

This is pretty much the same as anonymous function but with concise syntax:
```js
const total = (price) => {
    return price + price * 7/100;
};

console.log(total(100));
```
