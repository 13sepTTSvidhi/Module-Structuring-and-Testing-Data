// Predict and explain first...

// Predict the output of the following code:"3"
// Write your prediction here:We will only get the return value of variable that we declared at 6th line and when we call the function, lines of code will be display as it is and the function will not work on them.

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
/* write the output here:
The last digit of 42 is 3
The last digit of 105 is 3
The last digit of 806 is 3*/
// Explain why the output is the way it is
// write your explanation here:That is because in return in expression, num variable is used so it will only work for "const num = 103" and not for other lines because we have not declare any parameter value.
// Finally, correct the code to fix the problem
/* write your new code here:
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`)*/

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
