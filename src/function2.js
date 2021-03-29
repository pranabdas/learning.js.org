// run this code: node function2.js
// the below function example works

console.log(Print())

function Print () {
    return "Hello function";
}

// But the this one does not work

console.log(Print1())

const Print1 = () => {
    return "Arrow function";
}

