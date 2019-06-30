const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//placeholders for user input

let answer = "";
var valid = [
  "+",
  "add",
  "plus",
  "-",
  "minus",
  "subtract",
  "*",
  "x",
  "multiply",
  "/",
  "%",
  "divide"
];

function askName(){
  rl.question(`What is your name? `, name => {
    name = name.trim();
    console.log(`Hello, ${name}!`);
    runCalculator();
  })
};

function runCalculator() {
  rl.question(`What is the value of X? `, inputX => {
    inputX = Number(inputX);
    console.log(`Value of X: ${inputX}`);
    if (isNaN(inputX) === true){
      console.log('That is not a number. Try again!');
      runCalculator();
    } 

    rl.question(`What is the value of Y? `, inputY => {
      inputY = Number(inputY);
      console.log(`Value of Y: ${inputY}`);
      if (isNaN(inputY) === true){
        console.log('That is not a number. Start Over.');
        runCalculator();
      } 
      rl.question(`Which math operator (+ , - , * or / )? `, doMath => {
        doMath = doMath.toLowerCase().trim();
        //Addition
        if (doMath === "+" || doMath === "add" || doMath === "plus") {
          doMath = "+";
          answer = parseInt(inputX) + parseInt(inputY);
          console.log(`The equation: ${inputX} ${doMath} ${inputY} `);
          console.log("The answer: " + answer);
          testTrue();
        }
        //Subtraction
        if (doMath === "-" || doMath === "subtract" || doMath === "minus") {
          doMath = "-";
          answer = parseInt(inputX) - parseInt(inputY);
          console.log(`The equation: ${inputX} ${doMath} ${inputY} `);
          console.log("The answer: " + answer);
          testTrue();
        }
        //Multiplication
        if (doMath === "*" || doMath === "x" || doMath === "multiply") {
          doMath = "*";
          answer = parseInt(inputX) * parseInt(inputY);
          console.log(`The equation: ${inputX} ${doMath} ${inputY} `);
          console.log("The answer: " + answer);
          testTrue();
        }
        //Division
        if (doMath === "/" || doMath === "%" || doMath === "divide") {
          doMath = "%";
          answer = parseInt(inputX) / parseInt(inputY);
          console.log(`The equation: ${inputX} ${doMath} ${inputY} `);
          console.log("The answer: " + answer);
          testTrue();
        }
      });

      function testTrue(){
        rl.question(`Which comparative operator (< , > , === , or !== )? `, compare => {
            console.log(`Is ${inputX} ${compare} ${inputY} ?`);
            //Greater Than
            if (compare === '>'){
              if (parseInt(inputX) > parseInt(inputY)) {
                console.log("True");
              } else {
                console.log("false");
              };
              rl.close();
            }
            //Less Than
            if (compare === "<"){
              if (parseInt(inputX) < parseInt(inputY)) {
                console.log("True");
              } else {
                console.log("false");
              } ;
              rl.close();
            }
            //Equal
            if (compare === "==="){
              if (parseInt(inputX) === parseInt(inputY)) {
                console.log("True");
              } else {
                console.log("false");
              } ;
              rl.close();
            }
            //Not Equal
            if (compare === "!=="){
              if (parseInt(inputX) !== parseInt(inputY)) {
                console.log("True");
              } else {
                console.log("false");
              } ;
              rl.close();
            }
    })
  }
    });
  });
}


// the function is called to prompt for the answers to the questions
askName();
runCalculator();

