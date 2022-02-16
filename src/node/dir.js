const fs = require("fs"); 

fs.mkdir("new-dir", err => {
    if (err) {
        throw err;
    } 
    console.log("Directory created!"); 
}); 
