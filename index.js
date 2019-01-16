'use strict';

const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nameTester = (name,index) => {
  if(variableSpace[index]){
    return Number(name.value);
  }
}

const nodePlayground = (answer) => {
  const splitAnswer = answer.trim().split(" ");
  if(splitAnswer.length==3){
    const firstTerm = isNaN(Number(splitAnswer[0]))? nameTester(variableSpace[splitAnswer[0]],splitAnswer[0]) : Number(splitAnswer[0]);
    const secondTerm = isNaN(Number(splitAnswer[2]))? nameTester(variableSpace[splitAnswer[2]],splitAnswer[2]) : Number(splitAnswer[2]);
    if(!firstTerm){
      return `ReferenceError: ${splitAnswer[0]} is not defined`
    }else if(!secondTerm){
      return `ReferenceError: ${splitAnswer[2]} is not defined`

    }

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
    else if(splitAnswer[1]=='='){
      if(variableSpace[firstTerm] && variableSpace[firstTerm].type == 'const'){
        return "TypeError: Assignment to constant variable"
      }
      variableSpace[splitAnswer[0]] = {value: splitAnswer[2],type:variableSpace[splitAnswer[0]].type}
      return variableSpace[splitAnswer[0]].value;
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
    return varValue
  }else if(splitAnswer.length==1){
    if(variableSpace[splitAnswer[0]]){
      return variableSpace[splitAnswer[0]].value
    } 
    return `ReferenceError: ${splitAnswer[0]} is not defined` 
  }else{
    return "Syntax Error"
  }
}


const getPrompt = () => {
  rl.question('Node playground, enter values  ', (answer) => {
    console.log(nodePlayground(answer));
    getPrompt();
  })
  }

const variableSpace = {};

getPrompt();