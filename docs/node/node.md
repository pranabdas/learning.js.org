---
title: Introduction to Node.js
sidebar_label: Node.js
---

For this lesson, you must have **Node.js** installed. We will write our codes in
a file called `intro.js`
```js
console.log("Hello Node.js!")
```

Now we can run the javascript by typing the following in the terminal:
```js
$ node intro.js

Hello Node.js!
```

Next, let's define a variable and print that out.
```js
let message = "Hello world from the Node.js";

console.log(message);
```
Note that you can omit the `.js` from the filename when running `node` command:
```js
node intro

Hello world from the Node.js
```

Here the `console` is a global variable and it is available to us without
importing or requiring any `class`. There are several other global variables
like `__dirname` or ``__filename`
```js
console.log(__dirname);
console.log(__filename);

/Users/Pranab/Documents/github/js-learning/src/node
/Users/Pranab/Documents/github/js-learning/src/node/intro.js
```

We can import external modules by using `require`. Let's say we import the
`path` module which ships with the Node.js ans load that into a variable called
`path`. Then we try to extract just the filename using a path method.
```js
const  path = require('path');
console.log(`The file name is : ${path.basename(__filename)}`);

The file name is : intro.js
```

Note that for template strings back tics are used instead of single/double
quotes.

Another important global object is `process`.
```js
console.log(process.pid);
console.log(process.versions.node);

89046
12.16.2
```

`process.argv` to pass arguments:
```js
console.log(process.argv);

[
  '/usr/local/bin/node',
  '/Users/Pranab/Documents/github/js-learning/src/node/intro'
]
```

So when we run our program by typing `node intro`, we are simply passing an
array. We can pass more variables:
```js
node intro hello "pranab das"

[
  '/usr/local/bin/node',
  '/Users/Pranab/Documents/github/js-learning/src/node/intro',
  'hello',
  'pranab das'
]
```

Now we can create `flags` to pass more arguments to any command.
```js
node intro --user "pranab das" --greeting hello

[
  '/usr/local/bin/node',
  '/Users/Pranab/Documents/github/js-learning/src/node/intro',
  '--user',
  'pranab das',
  '--greeting',
  'hello'
]
```

```js
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(greeting, user);
```
```js
node intro --user "pranab das" --greeting hello

hello pranab das
```
