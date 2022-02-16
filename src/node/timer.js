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
