const readline = require('readline-sync');

var firstNum = readline.question("Please enter a number ");
var secondNum = readline.question("Please enter a second number ");
var operator = readline.question("Please enter +, -, *, or / ")

function calculate(){
   if(operator === '+'){
       console.log(parseInt(firstNum) + parseInt(secondNum))
   }

}

calculate();