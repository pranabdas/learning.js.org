### Variable scope 

When you define a function in the root of your script, it is available globally throughout the script, including inside the function block. When you define a variable inside the function block, it is available only inside the function block. 

#### let and const 

Once `const` is defined it cannot be changed. Like 
```js 
const PI = 3.14; 
``` 

The value of a `const` cannot be changed later. On the other hand `let` is another variable type, which has even smaller scope than `var`. `let` has scope only in a block level. 
```js 
function varScope() {
    var localVar = 1; 

    if (localVar) {
        var localVar = 2; 
        console.log(localVar); 
    }
    console.log(localVar);
}

varScope()

2
2
``` 

So we see that if we reassign a variable inside a block, the variable is changed for the whole function. Here comes the `let`. 
```js 
function varScope() {
    var localVar = 1; 

    if (localVar) {
        let localVar = 2; 
        console.log(localVar); 
    }
    console.log(localVar);
}

varScope()

2
1
```

Note that if we define the first variable with `let`, it's scope will be whole function block while the scope of second `let` is only the if-condition block. 

#### Default values for function argument

```js
function greetUser(greetingMessage="Hello", userName="User") {
    console.log(greetingMessage + " " + userName);
};

> greetUser()
Hello User

> greetUser("Welcome")
Welcome User

> greetUser("Welcome", "Pranab")
Welcome Pranab
```

#### Arbitrary number of arguments

We can access the arguments by the `arguments` object. 

```js
function sumAll() {
    var sum = 0; 

    for (var ii=0; ii<arguments.length; ii++) {
        sum += arguments[ii];
    };
    return sum;
};

> sumAll(2, 3, 4)
9
```
