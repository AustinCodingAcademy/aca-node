
// var userInput = readline();
// print("User input: " + userInput);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number ", (num1) => {
  rl.question("Enter second number ", (num2) => {
    rl.question("Enter operation (+, -, /, *, <, >, =) ", (operator) => {
        let numOne = parseInt(num1)
        let numTwo = parseInt(num2)
      if(operator === "+") {
        console.log((numOne) + (numTwo))
      } else if(operator === "-") {
        console.log((numOne) - (numTwo))
      } else if(operator === "/") {
        console.log((numOne) / (numTwo))
      } else if(operator === "*") {
        console.log((numOne) * (numTwo))
      } else if (operator === ">" && numOne > numTwo){
        console.log(`True! ${numOne} is greater than ${numTwo}`)
      } else if (operator === ">" && numOne < numTwo){
        console.log(`False! ${numOne} is less than ${numTwo}`)
      } else if (operator === "<" && numOne < numTwo){
        console.log(`True! ${numOne} is less than ${numTwo}`)
      } else if (operator === "<" && numOne > numTwo){
        console.log(`False! ${numOne} is greater than ${numTwo}`)
      } else if ((operator === "<" && numOne === numTwo) || 
                 (operator === "<" && numOne === numTwo)) {
        console.log(`False! ${numOne} is equal to ${numTwo}`)
      } else if (operator === "=" && numOne === numTwo){
        console.log(`True! ${numOne} is equal to ${numTwo}`)
      } else if (operator === "=" && numOne !== numTwo){
        console.log(`False! ${numOne} is not equal to ${numTwo}`)
      } else {
        console.log("Syntax errrrrrrrror!!!!")
      }
      return rl.close();
    }) 
  })
})

