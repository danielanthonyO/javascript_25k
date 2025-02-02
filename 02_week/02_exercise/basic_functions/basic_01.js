/* Create a function named add that:
Takes two parameters, a and b.
Returns the sum of a and b.
Call the function with the arguments 10 and 5.
Print the result using console.log(). 

Bonus: Call the function multiple times with different arguments and print all the results.
*/

// Solution 1

function add (a, b) {
    return a + b
}

let result = add (10, 5)
console.log(result)

// Solution 2
let add2 = (a, b) => {
    return a + b
}

let result2 = add2 (10, 5)
console.log(result2)