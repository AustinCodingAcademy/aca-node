const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function doMath () {
   rl.question('', (answer) => {
    var newArr = answer.split(' ');
    var num1 = Number(newArr[0]);
    var operator = newArr[1];
    var num2 = Number(newArr[2]);
    if (operator === '+'){
      console.log(num1 + num2);
    } else if (operator === '-'){
      console.log(num1 - num2);
    } else if (operator === '/'){
      console.log(num1 / num2)
    } else if (operator === '*'){
      console.log(num1 * num2)
    } else if (operator === '>'){
      if (num1 > num2){
        console.log(true)
      } else {
        console.log(false)
      }
    } else if (operator === '<'){
      if (num1 < num2){
        console.log(true)
      } else {
        console.log(false)
      }
    } else if (operator === '==='){
      if (num1 === num2){
        console.log(true)
      } else {
        console.log(false)
      }
    } 
  });
}

doMath();