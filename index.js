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
        separateStuff(splitAnswer);
        openPrompt();
    });
}

const variable = {
    name: '',
    value: '',
}

const separateStuff=(splitArray)=>{
    const indexZero = splitArray[0];
    const indexOne = splitArray[1]
    const indexTwo = splitArray[2];
    const indexThree = splitArray[3];
    if(!isNaN(Number(indexZero)) && !isNaN(Number(indexTwo))){
        if(indexOne === '+'){
            console.log(Number(indexZero) + Number(indexTwo))
        }
        if(indexOne === '-'){
            console.log(Number(indexZero) - Number(indexTwo))
        }
        if(indexOne === '*'){
            console.log(Number(indexZero) * Number(indexTwo))
        }
        if(indexOne === '/'){
            console.log(Number(indexZero) / Number(indexTwo))
        }
        if(indexOne === '>'){
            if(Number(indexZero) > Number(indexTwo)){
                console.log('true')
            }else console.log('false')
        }
        if(indexOne === '<'){
            if(Number(indexZero) < Number(indexTwo)){
                console.log('true')
            }else console.log('false')
        }
        if(indexOne === '==='){
            if(Number(indexZero) === Number(indexTwo)){
                console.log('true')
            }else console.log('false')
        }
        if(indexOne === '!=='){
            if(Number(indexZero) !== Number(indexTwo)){
                console.log('true')
            }else console.log('false')
        }
    }else if(indexZero === 'let' && indexTwo === '='){
        variable.value = indexThree;
        variable.name = indexOne;
    }else if(indexZero === variable.name){
        console.log(variable.value)
    }
    // else if(){

    // }
    else console.log('Syntax error')
}

const startNode=()=>{
    openPrompt();
}

startNode();