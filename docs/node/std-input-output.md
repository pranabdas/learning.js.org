### Standard input and output 

We can use `process` to print something on the terminal, like `console.log`. 
```js 
process.stdout.write("Hello "); 
process.stdout.write("Node.js !\n"); 

Hello Node.js !
``` 

##### Example 

```js
const questions = [
    "What is your name?",
    "How old are you?",
    "What is your mother tongue?"
]

const ask = (index = 0) => {
    process.stdout.write(`${questions[index]} \n-:>`);
}

ask(); 

const ans = [];

process.stdin.on("data", data => {
    ans.push(data.toString().trim());

    if (ans.length < questions.length) {
        ask(ans.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, age, lang] = ans; 
    console.log(`Hey ${name}, so you are ${age} years old and you can speak ${lang}.`)
}); 
```

##### Timer 

```js 
const waitTime = 5000; // time is in millisecond 
const waitInterval = 500; 
let currentTime = 0; 

const incTime = () => {
    currentTime += waitInterval; 
    const pc = Math.floor(currentTime/waitTime*100); 
    process.stdout.clearLine(); 
    process.stdout.cursorTo(0); 
    process.stdout.write(`Waiting... ${pc}%`); 
}; 

console.log(`Setting a waiting time of ${waitTime/1000} seconds.`); 

const timerFinished = () => {
    clearInterval(interval); 
    process.stdout.clearLine(); 
    process.stdout.cursorTo(0); 
    console.log("Done."); 
}; 

const interval = setInterval(incTime, waitInterval); 
setTimeout(timerFinished, waitTime); 
``` 
