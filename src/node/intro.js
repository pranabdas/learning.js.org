// console.log("Hello Node.js!"); 


// let message = "Hello world from the Node.js"; 
// console.log(message); 


// console.log(__dirname); 
// console.log(__filename); 


// const  path = require('path'); 
// console.log(`The file name is : ${path.basename(__filename)}`); 


// console.log(process.pid); 
// console.log(process.versions.node); 


// console.log(process.argv); 


const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1; 
    return process.argv[indexAfterFlag];
} 

const greeting = grab("--greeting"); 
const user = grab("--user"); 

console.log(greeting, user); 
