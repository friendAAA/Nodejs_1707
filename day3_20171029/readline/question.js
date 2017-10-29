const readline = require('readline');

const reader = new readline.Interface({
    input: process.stdin,
    output: process.stdout
});

reader.question('input your name: ', (line) => {
    console.log(line);
    reader.close();
});

/*
* readline read current file, output?
* */