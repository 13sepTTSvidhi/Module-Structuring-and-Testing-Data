// Predict and explain first...

// Why will an error occur when this program runs?
// write your prediction here: There will be SyntaxError because giving the same name to "convertToPercentage(decimalNumber)" and declaring another variable with const "decimalNumber".

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// write your explanation here: Same as prediction it is giving SyntaxError because function parameter "convertToPercentage(decimalNumber)" and variable declaration "const decimalNumber" have the same name so it will not work out and also we need to declare the variable outside of function body in order to call the function in with that variable declaration at the end.

// Finally, correct the code to fix the problem
// write your new code here:
/* const divisionNum = 0.5;
  function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(divisionNum));*/
