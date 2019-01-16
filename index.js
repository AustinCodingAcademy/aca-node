'use strict';

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nodePlayground = (answer) => {
  const splitAnswer = answer.trim().split(" ");
  if(splitAnswer.length==3){
    const firstTerm = Number(splitAnswer[0]);
    const secondTerm = Number(splitAnswer[2]);

    if(splitAnswer[1]=='+'){
      return `${firstTerm}${splitAnswer[1]}${secondTerm}=${firstTerm+secondTerm}` 
    }
    else if(splitAnswer[1]=='-'){
      return `${firstTerm}${splitAnswer[1]}${secondTerm}=${firstTerm-secondTerm}` 
    }
    else if(splitAnswer[1]=='*'){
      return `${firstTerm}${splitAnswer[1]}${secondTerm}=${firstTerm*secondTerm}`      
    }
    else if(splitAnswer[1]=='/'){
      return `${firstTerm}${splitAnswer[1]}${secondTerm}=${firstTerm/secondTerm}`       
    }
    else if(splitAnswer[1]=='<'){
      return `${firstTerm}${splitAnswer[1]}${secondTerm}=${firstTerm<secondTerm}`       
    }
    else if(splitAnswer[1]=='>'){
      return `${firstTerm}${splitAnswer[1]}${secondTerm}=${firstTerm>secondTerm}`       
    }
    else if(splitAnswer[1]=='==='){
      return `${firstTerm}${splitAnswer[1]}${secondTerm}=${firstTerm===secondTerm}`       
    }
    else if(splitAnswer[1]=='!=='){
      return `${firstTerm}${splitAnswer[1]}${secondTerm}=${firstTerm!==secondTerm}`       
    }
    else{
      return "Syntax Error"
    }
  }else if (splitAnswer.length==4){
    const varType = splitAnswer[0];
    const varName = splitAnswer[1];
    const varValue = splitAnswer[3];
    if(variableSpace[varName]  && variableSpace[varName].type == "const"){
      return "TypeError: Assignment to constant variable"
    } 
    variableSpace[splitAnswer[1]] = {value:splitAnswer[3],type:splitAnswer[0]}
  }else{
    return "Syntax Error"
  }
  return variableSpace;
}


const getPrompt = () => {
  rl.question('Node playground, enter values  ', (answer) => {
    console.log(nodePlayground(answer));
    getPrompt();
  })
  }

const variableSpace = {};

getPrompt();