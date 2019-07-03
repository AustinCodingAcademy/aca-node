# Intro
The purpose of this project is to demonstrate that node.js is nothing special. 
Anyone can create a program that interprets input as code, processes it accordingly and then outputs something.

# Instructions
Write a program that will use readline to take user input.
The input will follow certain rules which is our syntax.
* Calculator
  * The input will be similiar to  `x + y`. We can add, subtract, multiply or divide. Determine the 2 numbers, 
determine the math operator and output the result
* Bool
  * The input will be `X > Y`. We can compare <, >, ===, !==. return `true` or `false`
* Variable
  * The input will be `let whatever = “something”`, if the user then types in the variable name, it should print it back out
* Bonus
  * Combine the functionality so you can assign a bool or number into a variable

If anything else is input that cannot be matched, output `Syntax Error`


readline allows user to type input
split input- look for +,-,*,>,etc