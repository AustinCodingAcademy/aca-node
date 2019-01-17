const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


rl.question(`let's do some fucking math! enter an equation!`, (answer) => {
    doMath(answer)
    console.log(`${leftSide + rightSide}`);

  rl.close();
});

function findOperator(item){
    if(item === '+' || '-' || '*' || '/'){
        return item 
    }
}

let leftSide;
let rightSide;
let operator;

function doMath(answer){
    let mathEquation = [];
    let operatorLocation;
    let answerArray = answer.split('')
    answerArray.forEach((item, index) =>{
        if(isNaN(Number(item))){
            if(findOperator(item) === item){
                operatorLocation =item
            }
            mathEquation.push(item)
        } else if(item == ' '){
            return
        }else{
            mathEquation.push(Number(item))
        }
    })
    leftSide = Number(getRidOfSpaces(mathEquation.slice(0, operatorLocation)).join(''))
    rightSide = Number(getRidOfSpaces(mathEquation.slice(operatorLocation + 1, answerArray.length)).join(''))
    operator = mathEquation.slice(operatorLocation, operatorLocation + 1).join('')
}

function getRidOfSpaces(arr){
    let spaceFreeArray = []
    arr.map(item =>{
        if(item == ' '){
            return
        }
        spaceFreeArray.push(item)
    })
}