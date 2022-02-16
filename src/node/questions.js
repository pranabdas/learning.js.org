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
