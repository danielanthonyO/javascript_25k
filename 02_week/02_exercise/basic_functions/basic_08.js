/* Create a function named roundNumber that:
Takes two parameters, num and precision.
Returns the number rounded to the specified precision (number of decimal places).
Call the function with 19.56789 and 2.
Print the result using console.log().

Hint: Use .toFixed().

*/

function roundNumber(num, precision){
    return num.toFixed(precision);
}

result = roundNumber(19.56789, 2);
console.log(result);