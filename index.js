"use strict";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

rl.question('',(answer)=>{
    let splitAnswer = answer.split('');
    console.log(splitAnswer);
    rl.close();
})