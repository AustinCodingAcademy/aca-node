const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a math problem. Enter the first operand: ', (num1) => {
    rl.question('Enter the operator: ', (operator) => {
        rl.question('Enter the other operand: ', (num2) => {
            if (operator.includes('+')) {
                const findSum = parseInt(num1) + parseInt(num2);
                console.log(`${findSum}`);
            }
            else if (operator.includes('-')) {
                const findDifference = parseInt(num1) - parseInt(num2);
                console.log(`${findDifference}`);
            }
            else if (operator.includes('*')) {
                const findProduct = parseInt(num1) * parseInt(num2);
                console.log(`${findProduct}`);
            }
            else if (operator.includes('/')) {
                const findQuotient = parseInt(num1) / parseInt(num2);
                console.log(`${findQuotient}`);
            }
            else if (operator.includes('>') || operator.includes('<')) {
                if (num1 > num2) {
                    console.log(num1, 'is greater than', num2);
                }
                else {
                    console.log(num1, 'is less than', num2);
                }
            }
            else {
                if (num1 === num2) {
                    console.log(num1, 'is equal to', num2);
                }
                else {
                    console.log(num1, 'is not equal to', num2);
                }
            }
            return rl.close();
        })
    })
});