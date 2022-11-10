let age = 35;
let yearlyIncrease = "1"; // this is a string
console.log(`Age: ${age}`);

// type coercion
let ageNextYear = age + yearlyIncrease; // 35 + "1" = "351"
// performs string concatenation instead of arithmetic addition
console.log(`Next year, I will be ${ageNextYear} years old.`);
console.log(typeof ageNextYear); // string

// one way to avoid unintentional type coercion could be: explicitly convert
// values to `Number`
ageNextYear = Number(age) + Number(yearlyIncrease);
console.log(`Next year, I will be ${ageNextYear} years old.`);

if (35 == "35") {
  console.log("They are same.");
} else {
  console.log("They are not same.");
}

// strict equality check
// https://www.ecma-international.org/ecma-262/7.0/#sec-abstract-equality-comparison
if (35 === "35") {
  console.log("They are same.");
} else {
  console.log("They are not same.");
}

// type of null and undefined
console.log("Type of null: ", typeof null); // object
console.log("Type of undefined: ", typeof undefined); // undefined

let primaryAddress; // this sets primaryAddress value to `undefined`
let secondaryAddress = "Singapore";

let deliverAddress = primaryAddress || secondaryAddress;
// `undefined` or `null` evaluates to `false`
console.log(deliverAddress);

function add(input1, input2) {
  return input1 + input2;
}

console.log(add(2, 3));
console.log(add(2, "3")); // returns "23"
console.log(add(2)); // returns `NaN`

// a better approach
function sumNumbers(...inputs) {
  return inputs.reduce(
    (total, val) => total + (isNaN(val) ? 0 : Number(val)),
    0
  ); // isNan() checks if the value is not a number or cannot be converted to a
  // number while, Number.isNan checks if the actual value is `NaN`
  // Number.isNaN(Number(val)) vs isNaN(val)
}

console.log(sumNumbers(2, "3")); // 5
console.log(sumNumbers(2, "3", 6, 7)); // 18
console.log(sumNumbers(2, "#3", 6, 7)); // 15
//                          --- this cannot be converted to `Number`

let prices = [3, 4, "9"];
console.log(sumNumbers(...prices));

// `this` keyword in standalone function
function printMessage(message) {
  console.log(`${this.greeting}, ${this.message}`);
  // here `this` captures values from the global scope
}

function printMessageAlt(message) {
  console.log(`${greeting}, ${this.message}`);
}

// notice the omission of `let`, `var` or `const`; it makes the values global
// `this` will
greeting = "Hello";
message = "Have a great day!"
printMessage(message); // Hello, Have a great day!
printMessage("Good morning."); // Hello, Have a great day!

printMessageAlt(message); // Hello, Have a great day!
printMessageAlt.call(global, message); // Hello, Have a great day!
