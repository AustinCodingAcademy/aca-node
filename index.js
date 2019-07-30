const readline = require('readline');
const operations = require('./operations.js')

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question('Enter the first number: ', x => {
    rl.question('Enter the second number: ', y => {
      rl.question('Enter your operator - [add], [subtract], [multiply], or [divide]: ' ,
        op => {
            switch (op) {
                case 'add':
                  console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`)
                  break
                case 'subtract':
                  console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`)
                  break
                case 'multiply':
                  console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`)
                  break
                case 'divide':
                  console.log(`The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`)
                  break
                default:
                  console.log('Please restart the program and select a number between 1 and 4.')
                  break
            }
        })
    })
})
 

