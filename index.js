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
  const splitAnswer = answer.trim().replace(/ +(?= )/g,'').split(" ");
  // we are nice to the user, to nice probably. We trim leadning and trailing
  // spaces and knock out any silly spaces in between since we are seperating
  // on a join, interal spacing is important. If they run everything together,
  // and have no spacing, we will not save the user from this
  if(splitAnswer.length==3){
    // if we split the string and there are 3 bits, some kind of math or logic
    // was done, test for what kinda logic we need to do.
    const firstTerm = isNaN(Number(splitAnswer[0]))? nameTester(variableSpace[splitAnswer[0]],splitAnswer[0]) : Number(splitAnswer[0]);
    const secondTerm = isNaN(Number(splitAnswer[2]))? nameTester(variableSpace[splitAnswer[2]],splitAnswer[2]) : Number(splitAnswer[2]);
    // esoteric bit of logic. Basically, was a number written?
    // if so, proceed. If not check to see if it is a variable we know about
    // and replace it inline, if not logic below throws refference error. 

    // can't test for falsy cause 0 is a valid entry
    if(firstTerm===undefined){
      return `ReferenceError: ${splitAnswer[0]} is not defined`
    }else if(secondTerm===undefined){
      return `ReferenceError: ${splitAnswer[2]} is not defined`

    }
    // test for operand and perform operation, prob a smarter way to do this
    // but went with brute force...and it hurts!
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
      // fancy bit for reasigning varibles. if it exists in variable namespace
      // see if it isn't a const, if it is, throw error
      if(variableSpace[splitAnswer[0]] && variableSpace[splitAnswer[0]].type == 'const'){
        return "TypeError: Assignment to constant variable"
      }
      // if not const, reasign value, keep existing type
      variableSpace[splitAnswer[0]] = {value: splitAnswer[2],type:variableSpace[splitAnswer[0]].type}
      return splitAnswer[0] +" => "+ variableSpace[splitAnswer[0]].value;
    }
    else{
      // if we have 3 fields and one isn't listed about, its not something
      // we are going to handel
      return "Syntax Error"
    }
  }else if (splitAnswer.length==4){
    // len 4 implies variable creation
    const varType = splitAnswer[0];
    const varName = splitAnswer[1];
    const varValue = splitAnswer[3];

    // if it isn't a recognized type, blow up
    if (!(varType=="const" || varType == "let" || varType == "var") ){
      return "SyntaxError: Unexpected identifier, " + varType
    }

    // if variable already exists in namespace, blow up
    if(variableSpace[varName]){
      return `SyntaxError: Identifier, ${varName}, has already been declared`
    } 

    // finally, if it doesn't exist and is the correct variable type
    // create namespace object with name as key to data object, 
    // data object tells what kind of datatype and its value
    variableSpace[splitAnswer[1]] = {value:splitAnswer[3],type:splitAnswer[0]}
    return varName+ " => " + varValue
  }else if(splitAnswer.length==1){
    // look at namespace and return the value
    if(variableSpace[splitAnswer[0]]){
      return variableSpace[splitAnswer[0]].value
    } 

    // blow up if you don't find it
    return `ReferenceError: ${splitAnswer[0]} is not defined` 
  }else{

    return "Syntax Error"
  }
}


const getPrompt = () => {

  // recursive call, we are here till end of time
  rl.question('Node playground, enter values  ', (answer) => {
    console.log(nodePlayground(answer));
    getPrompt();
  })
  }


// container of all created varibles
const variableSpace = {};

getPrompt();