// run command: node setTimeout.js
// This is an example of asynchronous programming. setTimeout accepts a callback
// function as it's first argument and timeout delay in millisecond as second
// argument. After the delay is complete, it calls the callback function. While
// the program waits for asynchronous setTimeout to complete, it does not block
// the next lines of codes from running. 

const Print = () => {
    console.log("Done");
}

setTimeout(Print, 2000);

console.log("The program is working...");

