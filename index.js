const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let recursivePrompt = () => {
    rl.question('Input:', (answer) => {
        boolOrCalc(answer);
    });
}

let symbolArray = ['+', '-', '/', '*', '>', '<', '===', '!=='];

// check if bool or cal first
let boolOrCalc = (answer) => {
    let operator;
    for (let i = 0; i < symbolArray.length; i++) {
        let position = answer.indexOf(`${symbolArray[i]}`);
        if (position !== -1) {
            operator = symbolArray[i];
            // process bool or calc if true
            return createEquation(answer, operator, position);
        }
    }
    // check if var declaration if false
    return varChecker(answer);
}

// check if input is var declaration
let varChecker = (answer) => {
    if (answer.startsWith('let') || answer.startsWith('const')) {
        // set var declaration builder  if true
        createVariable(answer);
        return recursivePrompt();
    } else if (typeof answer !== 'undefined') {
        if(typeof global[`${answer}`] === 'undefined') {
            console.log('Syntax Error');
            return recursivePrompt();
        } else {
            console.log(global[`${answer}`]);
            return recursivePrompt();
        }
    }
}
// next two functions process input if var, calc, or boolean

// var declaration builder
let createVariable = (input) => {
    let inputArray = input.split(' ');
    let keyWord = inputArray[1];
    let variable = inputArray[3];
    global[keyWord] = variable;
}

// process bool or calc equation
let createEquation = (equation, operator, position) => {
    let num1 = equation.slice(0, position).trim();
    let num2 = equation.slice(position + 1).trim();
    let oper = operator;
    switch(oper) {
        case '+' :
            console.log(parseFloat(num1) + parseFloat(num2));
        break
        case '-' :
            console.log(parseFloat(num1) - parseFloat(num2));
        break
        case '/' :
            console.log(parseFloat(num1) / parseFloat(num2));
        break
        case '*' :
            console.log(parseFloat(num1) * parseFloat(num2));
        break
        case '<' :
            console.log(parseFloat(num1) < parseFloat(num2));
        break
        case '>' :
            console.log(parseFloat(num1) > parseFloat(num2));
        break
        case '===' :
            console.log(parseFloat(num1) === parseFloat(num2)); 
        break
        case '!==' :
            console.log(parseFloat(num1) !== parseFloat(num2));     
    }
    return recursivePrompt()
}

recursivePrompt()