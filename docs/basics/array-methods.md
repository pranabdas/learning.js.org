---
title: Array methods
---

### map
```js
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const y = x.map((item) => (item ** 2));
console.log(y);
// prints
// [
//    1,  4,  9, 16,  25,
//   36, 49, 64, 81, 100
// ]
```

### filter
```js
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenX = x.filter((item) => item % 2 === 0);
console.log(evenX);
// prints
// [2, 4, 6, 8, 10]
```

### Filter unique items
```js
const x = [1, 2, 3, 1, 6, 6, 0, 8, 3, 1];
const xUniq = x.filter((value, index, self) => self.indexOf(value) === index);
console.log(xUniq);
// prints
// [1, 2, 3, 6, 0, 8]
```
