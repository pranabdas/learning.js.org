const fs = require("fs"); 

const md = `
# This is a new file 

We are learning how to write file using Node.js. 
`; 

fs.writeFile("./note.md", md.trim(), err => {
    if (err) {
        throw err;
    }; 
    console.log("File saved!"); 
}); 
