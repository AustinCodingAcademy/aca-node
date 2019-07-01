const readline = require('readline');
const add = require("./modules/add");
const subtract = require("./modules/subtract");
const multiply = require("./modules/multiply");
const divide = require("./modules/divide");
const {lessThan, greaterThan, isEqual, isNotEqual} = require("./modules/boolean");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   });


function prompt(){
    rl.question('What would you like to calculate? ', (answer) => {
        calculate(answer);
        prompt();
    })
}
prompt();

function determineOperator(string){
    let regex = /[\/\+\-\*\>\<\={2}\!]/g;
    let opLocStart = string.search(regex)
    let opLocBoolEnd = opLocStart+3;
    let operation = string.charAt(opLocStart);
    if(opLocStart === -1){
        return false;
    }
    else if(operation == '=' || operation == '!'){
        let boolOp = string.slice(opLocStart, opLocBoolEnd);
        console.log(boolOp);
        if(boolOp == '==='){
            return ["===", opLocStart];
        }
        else if(boolOp == '!=='){
            return ["!==", opLocStart];
        }
        else{
            return false;
        }
    }
    else if(operation.match(regex)){
        return [operation, opLocStart];
    }
}

function calculate(answer){
    let expression = answer;
    if (determineOperator(expression)){
        let [operation, location] = determineOperator(expression);
        if((operation == '===')||(operation == '!==')){
            let charAfterOp = location + 3;
            let num1Str = expression.slice(0, location).trim();
            let num2Str = expression.slice(charAfterOp, expression.length).trim()
            let num1 = Number(num1Str);
            let num2 = Number(num2Str);
            if(!num1 || !num2){
                console.log("please enter expression in the following format: ")
                console.log("number operation number")
            }
            else if(operation == '==='){
                isEqual(num1, num2);
            }
            else if(operation == '!=='){
                isNotEqual(num1, num2);
            }
        }
        else{
            let charAfterOp = location + 1;
            let num1Str = expression.slice(0, location).trim();
            let num2Str = expression.slice(charAfterOp, expression.length).trim()
            let num1 = Number(num1Str);
            let num2 = Number(num2Str);
            if(!num1 || !num2){
                console.log("please enter expression in the following format: ")
                console.log("number operator number")
            }
            else if (operation === '+'){
                add(num1, num2)
            }
            else if(operation === '-'){
                subtract(num1, num2);
            }
            else if(operation === '*'){
                multiply(num1, num2);
            }
            else if(operation === '/'){
                divide(num1, num2);
            }
            else if(operation === '<'){
                lessThan(num1, num2);
            }
            else if(operation === '>'){
                greaterThan(num1, num2);
            }
        }
    }
    else{
        console.log("please enter valid mathematical oprator");
    }
}