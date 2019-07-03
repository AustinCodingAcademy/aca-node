"use strict";

//remove any spaces?
//separate numerical inputs into their own variable?
//.find or .filter each math/bool symbol
// .join once solved?

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

function openPrompt(){
    rl.question('',(answer)=>{
        let splitAnswer = answer.split('');
        // console.log(splitAnswer)
        // separateStuff(splitAnswer);
        separateStuff(answer);
        openPrompt();
    });
}

const variable = {
    name: '',
    value: '',
}

let partsOfInput = {
    leftSide: [],
    operator: [],
    rightSide: []
}

function clearPartsOfInput(){
    partsOfInput.leftSide = [];
    partsOfInput.rightSide = [];
    partsOfInput.operator = [];
}

function separateStuff(answer){
    // const indexZero = splitArray[0];
    // const indexOne = splitArray[1]
    // const indexTwo = splitArray[2];
    // const indexThree = splitArray[3];
    let noSpaceArray = answer.trim().replace(/\s+/g,'').split('');
    let switchSides = false;
    clearPartsOfInput();
    noSpaceArray.forEach(item => {
        if (!isNaN(Number(item)) && switchSides === false){
            partsOfInput.leftSide.push(item);
        }else if (!isNaN(Number(item)) && switchSides === true){
            partsOfInput.rightSide.push(item);
        }else if (item === '+' || '-' || '*' || '/' || '!' || '=' || '>' || '<'){
            partsOfInput.operator.push(item);
            switchSides = true;
        }
    });
    let solidLeftSide = partsOfInput.leftSide.join('')
    let solidRightSide = partsOfInput.rightSide.join('')
    let solidOperator = partsOfInput.operator.join('')
    //add if's for each index to be variable
    if(solidOperator === '+'){
        console.log(Number(solidLeftSide) + Number(solidRightSide))
    }
    else if(solidOperator === '-'){
        console.log(Number(solidLeftSide) - Number(solidRightSide))
    }
    else if(solidOperator === '*'){
        console.log(Number(solidLeftSide) * Number(solidRightSide))
    }
    else if(solidOperator === '/'){
        console.log(Number(solidLeftSide) / Number(solidRightSide))
    }
    else if(solidOperator === '>'){
        if(Number(solidLeftSide) > Number(solidRightSide)){
            console.log('true')
        }else console.log('false')
    }
    else if(solidOperator === '<'){
        if(Number(solidLeftSide) < Number(solidRightSide)){
            console.log('true')
        }else console.log('false')
    }
    else if(solidOperator === '==='){
        if(Number(solidLeftSide) === Number(solidRightSide)){
            console.log('true')
        }else console.log('false')
    }
    else if(solidOperator === '!=='){
        if(Number(solidLeftSide) !== Number(solidRightSide)){
            console.log('true')
        }else console.log('false')
    }
    else console.log('Syntax error')
    // else if(indexZero === 'let' && indexTwo === '='){
    //     variable.value = indexThree;
    //     variable.name = indexOne;
    // }else if(indexZero === variable.name){
    //     console.log(variable.value)
    // }
}

const startNode=()=>{
    openPrompt();
}

startNode();