const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let createVariable = (input) => {
    let inputArray = input.split(' ');
    let keyWord = inputArray[1];
    let variable = inputArray[3];
    global[keyWord] = variable;
}

let recursivePrompt = () => {
    rl.question('Input:', (answer) => {
        if (answer.startsWith('let') || answer.startsWith('const')) {
            createVariable(answer);
            return recursivePrompt();
        } else if (returnType === typeof 'boolean' || typeof 'number') {
            console.log(eval(answer));
            return recursivePrompt();
        } else { 
            console.log('Syntax Error');
            return recursivePrompt();
        }
    });
}

recursivePrompt()