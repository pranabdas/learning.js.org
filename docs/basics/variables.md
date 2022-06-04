---
title: Variables
---

Starting from ES2015, there are two recommended way to declare variables:
```js
let myVar = 2;
const numberOfDaysInWeek = 7;
```

`const` actually declares a constant (not variable), which cannot be reassigned.

Previously, javascript used the keyword `var` to declare variables. Once you
define a variable, we can initialize it. We do not need to explicitly declare
the data type (like whether integer, float or string). The data type is
determined when you assign a value. We can check the datatype following way:
```js
> let pi = 3.14;
  console.log(typeof pi)

number
```

### Common arithmetic operations
```js
let a = 5;
let b = 7;
let sum = 5 + 7;
console.log(sum)

12
```

```js
let a = 3;
let b = 9;
let c = 6;
let result = a + b*c
console.log(result)

57
```

### Some shorthand notations

```js
a = a + 4;
a += 4;
```

The above works with `+, -, *, /`

```js
a = a + 1;
a++;

a = a -1;
a--;
```

### String concatenation

```js
let greeting = "Hello ";
let name = "Pranab";

console.log(greeting + name)

Hello Pranab
```

Be careful to check the data type while using operators. Notice the following:
```js
let a = "4"; // this a string
let b = 5;

let sum = a + b;
let sub = a - b;
let mult = a * b;

console.log("sum = " + sum + ", sub =" + sub + ", mult =" + mult)

sum = 45, sub =-1, mult =20
```
Notice the string concatenation in case of addition, however subtraction and
multiplication carried out properly even though `a` was a string. Obviously, it
works only when the string contains only numbers.

Please also see [Variable scope](/functions-objects/variable-scope).
