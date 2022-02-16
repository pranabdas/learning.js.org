---
title: Variables
---

In javascript we define a variable with `var`. Once you define a variable, we
can initialize it. We do not need to explicitly declare the data type (like
whether integer, float or string). The data type is determined when you assign a
value. We can check the datatype following way:
```js
> var pi = 3.14;
  console.log(typeof pi)

number
```

### Common arithmetic operations
```js
var a = 5;
var b = 7;
var sum = 5 + 7;
console.log(sum)

12
```

```js
var a = 3;
var b = 9;
var c = 6;
var result = a + b*c
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
var greeting = "Hello ";
var name = "Pranab";

console.log(greeting + name)

Hello Pranab
```

Be careful to check the data type while using operators. Notice the following:
```js
var a = "4"; // this a string
var b = 5;

var sum = a + b;
var sub = a - b;
var mult = a * b;

console.log("sum = " + sum + ", sub =" + sub + ", mult =" + mult)

sum = 45, sub =-1, mult =20
```
Notice the string concatenation in case of addition, however subtraction and
multiplication carried out properly even though `a` was a string. Obviously, it
works only when the string contains only numbers.

Please also see [Variable scope](/functions-objects/variable-scope).
