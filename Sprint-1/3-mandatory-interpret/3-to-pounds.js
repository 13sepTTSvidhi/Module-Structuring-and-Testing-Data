const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p":initialize a string variable with the value "399p"
// 3. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);: in this line of code it moves the character p with help of .substring()function
// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");: initializing the new variable paddedPenceNumberString and .padstart()function it adds character to the beginning
// 9. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);: Initialize the new variable pounds and and get the value in pound as only 3 and extracts 99.
// 14. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)padEnd(2, "0");: initializes new variable pence and stores value of pence by extracting last two digits 99 and padEnd() adds zeroes at the end if needed
// 18. console.log(`£${pounds}.${pence}`);: it prints out the result as £3.99 after getting through all the expressions.
