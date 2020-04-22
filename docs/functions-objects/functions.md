### Functions 

Creating a basic named function. Here I will write the function a file called function.js, and load it to our empty index.html. Later I will use console to call and print the results. 
```js
function multiply(a, b) {
    var result = a * b; 
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

#### Anonymous function 

Anonymous functions do not have name, they are tied to variables or events. 
```js 
var a = 5/6; 
var b = 7/9; 

var theBiggest = function() {
    a > b ? result = a : result = b;
    return result; 
}
``` 
```js 
var biggerRatio = theBiggest()  // We invoke the function by adding () to the end of the variable 
console.log(biggerRatio)

0.8333333333333334
``` 

We can have arguments to an anonymous function as well: 
```js 
var theBiggest2 = function(x, y) {
    x > y ? result = x : result = y; 
    return result;
}
``` 
```js 
var biggerRatio2 = theBiggest2(3/4, 5/7); 
console.log(biggerRatio2)

0.75
```

#### Immediately invoked function 
