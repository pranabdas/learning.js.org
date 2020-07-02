### Understanding callbacks 

As we have seen we are using many asynchronous functions. These functions can execute simultaneously alongside the main function. The main function does not wait for the asynchronous function to finish. In other words, async function does not block the main block execution. 

In case of async function, we can pass another function as second argument. This is the callback function. Once the async function has finished, it can invoke our callback function. We can define what to do once the async task has finished inside this callback function. 

For example async `setTimeout()` function takes two arguments: `setTimeout(callback, delay)` 

```js 
let delay = 5000; 
console.log(`Waiting for ${delay/1000} sec.`); 

setTimeout(() => {
    console.log("The waiting is over!");
}, delay); 

console.log("This is in the main program."); 
``` 
