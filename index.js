"use strict";

//remove any spaces?
//separate numerical inputs into their own variable?
//.find or .filter each math/bool symbol
//.join once solved

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

const openPrompt=()=>{
    rl.question('',(answer)=>{
        let splitAnswer = answer.split(' ');
        //trim spaces here
        // console.log(splitAnswer)
        lookForSymbol(splitAnswer);
        // splitUpInputs(splitAnswer);
        // console.log(splitAnswer);
        openPrompt();
        // rl.close();
    });
}

const lookForSymbol=(splitArray)=>{
    const theSymbol = splitArray[1]
    const firstInput = Number(splitArray[0]);
    const secondInput = Number(splitArray[2]);
    if(theSymbol === '+'){
        console.log(firstInput + secondInput)
    }
    if(theSymbol === '-'){
        console.log(firstInput - secondInput)
    }
    if(theSymbol === '*'){
        console.log(firstInput * secondInput)
    }
    if(theSymbol === '/'){
        console.log(firstInput / secondInput)
    }
    if(theSymbol === '>'){
        if(firstInput > secondInput){
            console.log('true')
        }else console.log('false')
    }
    if(theSymbol === '<'){
        if(firstInput < secondInput){
            console.log('true')
        }else console.log('false')
    }
    if(theSymbol === '==='){
        if(firstInput === secondInput){
            console.log('true')
        }else console.log('false')
    }
    if(theSymbol === '!=='){
        if(firstInput !== secondInput){
            console.log('true')
        }else console.log('false')
    }
}

const startNode=()=>{
    openPrompt();
}

startNode();