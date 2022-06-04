---
title: Conditional Statement
---

### If condition

```js
let age = 33;

if (age > 18) {
    console.log("Your are an adult.");
}
```

### if-else

```js
let age = 15;

if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult yet.");
}
```

During equality test, use `===` for strict equality:
```js
a = 4;
b = "4";

a == b // this will result true.
a === b // this will result false
```

And and or operators are denoted by `&&` and `||`, respectively.
```js
let age = 35;

if (age > 18 && age < 60) {
    console.log("You are an adult but not a senior citizen.");
}
```

There is a shorthand for if-else condition as well:
```js
if (a==b) {
    console.log("Match");
} else {
    console.log("No match");
}
```

is same as:
```js
a==b ? console.log("Match") : console.log("No match");
```
