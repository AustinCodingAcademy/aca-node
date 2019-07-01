const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let recursivePrompt = () => {
    rl.question('Input:', (answer) => {
        let results = answer;
        results = eval(answer);
        console.log(results);
        console.log(typeof results);
        results === typeof 'boolean' || typeof 'number'
            ? console.log(results)
            : console.log('something else');
        recursivePrompt();
    });
}

recursivePrompt();

// let processInput = (input) => {
//     let inputArray = input.split('');
//     inputArray.forEach(x => parseInt(x));
//     let numberRegEx = /[0-9]/;
//     let symbolIdx = inputArray.indexOf(x => {x != numberRegEx});
//     console.log(inputArray);
//     console.log(symbolIdx);
// }

// processInput('22+3');