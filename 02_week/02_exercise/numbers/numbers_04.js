/* Create a variable userInput and assign it the value "25.75 apples".
Use parseFloat() to extract the numeric part from the input.
Use .toFixed() to round the number to 1 decimal place.
Print the result using console.log().
(If userInput doesn't start with a number, the result will be NaN.)
Example outputs:
"25.8" (if the input starts with a valid number).
"NaN" (if the input is invalid).

 */

// solution
let userInput =  "25.75 apples";
// extract numerical part
userInput = parseFloat('25.75 apples');
console.log(userInput);

let userValue = userInput.toFixed(1);
console.log(userValue);

// parseFloat(userInput) extracts the number (25.75) from the string.
// .toFixed(1) rounds it to one decimal place (25.8).
// If userInput doesn't start with a number, parseFloat() returns NaN, and .toFixed(1) will throw an error.

let userInput3 = "apples 25.75"; // Invalid input
let numericValue = parseFloat(userInput3);

// Check if the value is NaN before using .toFixed()
let result = isNaN(numericValue) ? "NaN" : numericValue.toFixed(1);

console.log(result);
