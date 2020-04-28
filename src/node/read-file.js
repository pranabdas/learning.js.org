// const fs = require("fs"); 

// const text = fs.readFileSync("../../README.md", "utf-8"); 

// console.log(text); 


const fs = require("fs"); 

const text = fs.readFile("../../README.md", "utf-8", (err, text) => {
    if (err) {
        console.log(`An error has occurred!\n ${err}`); 
        process.exit();
    }; 
    console.log(text); 
}); 
