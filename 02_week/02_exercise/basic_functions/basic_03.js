/* Create a function named getLength that:
Takes one parameter, str.
Returns the length of str using .length.
Call the function with the string "JavaScript".
Print the result using console.log().

*/

// solution 1
function getLength (str) {
    return str.length
}

result = getLength("JavaScript")
console.log(result)



// solution 2
let getLength2 = (str) => {
    return str.length
}

result2 = getLength2("Python")
console.log(result2)