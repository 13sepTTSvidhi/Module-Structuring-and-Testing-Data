// Predict and explain first...

// write your prediction here:It will display multiplication of 10 * 32 = 320 but not with the statement that has been used at the end in template literal.

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// write your explanation here:As Javascript reads code line to line, console.log(a * b) is used inside function body so it will give value of multiplication first and the last line prints as it is and calculation will be undefined because to get value of function we need ask return in function body.

// Finally, correct the code to fix the problem
// write your new code here:
/* function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
