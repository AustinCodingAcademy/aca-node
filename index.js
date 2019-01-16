"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

const openPrompt=()=>{
    rl.question('',(answer)=>{
        let splitAnswer = answer.split('');
        console.log(splitAnswer);
        openPrompt();
        rl.close();
    });
}

const startNode=()=>{
    openPrompt();
}

startNode();