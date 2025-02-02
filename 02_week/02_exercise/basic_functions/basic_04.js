/* Create a function named capitalize that:
Takes one parameter, str.
Returns the string with the first character in uppercase and the rest in lowercase.
Call the function with the string "javascript".
Print the result using console.log().

Hint: Use str[0].toUpperCase() and str.slice(1).toLowerCase().

*/

// solution 1
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

result = capitalize("javaScript")
console.log(result)