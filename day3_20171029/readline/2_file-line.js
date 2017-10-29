const fs = require('fs');
const readline = require('readline');

let file = console.log(process.argv[1]);
readline.createInterface({
    input: fs.createReadStream('question.js'),
    output: process.stdout,
    terminal: true
}).on('line', (line) => {
    console.log(line);
});