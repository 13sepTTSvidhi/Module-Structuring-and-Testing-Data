// Predict and explain first...
// I predict that there will be error for str as identifier because it has been used as parameter "capitalise(str)" in the first line of code.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hello")); //call the function

// write your explanation here:It is giving a SyntaxError, because str has been used twice in the same piece of code and you can not name identifier with same name that has been used in function parameter.
// write your new code here:
/* function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}
console.log(capitalise("hello")); */
