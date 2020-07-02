let delay = 5000; 
console.log(`Waiting for ${delay/1000} sec.`); 

setTimeout(() => {
    console.log("The waiting is over!");
}, delay); 

console.log("This is in the main program."); 
