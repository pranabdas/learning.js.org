// const path = require("path"); 

// const dirUpload = path.join(__dirname, "assets", "uploads"); 

// console.log(dirUpload); 


// const path = require("path"); 
// const util = require("util"); 

// util.log(path.basename(__filename)); 

// util.log("  ^ the name of the current file."); 


// const v8 = require("v8"); 

// console.log(v8.getHeapStatistics()); 



const readline = require("readline"); 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
}); 

rl.question("What is you name? ", answer => {
    console.log(`Hello ${answer}`); 
    process.exit(); 
}); 
