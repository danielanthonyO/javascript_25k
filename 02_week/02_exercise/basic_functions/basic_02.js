/* Create a function named isEven that:
Takes one parameter, num.
Returns true if num is even, otherwise returns false.
Call the function with the arguments 4 and 7.
Print the results using console.log().

Bonus: Modify the function to use implicit return. 
*/

// Solution
function isEven (num){
    if (num % 2 === 0) {
        return true
    }
    else {
        return false
    }
}

result1 = isEven(4)
console.log(result1)
result2 = isEven(7)
console.log(result2)

// Solution 2

let isOdd = (num) => {
    if (num % 2 !== 0) {
        return "Odd"
    }
    else {
        return "Even"
    }
}

result1 = isOdd(4)
console.log(result1)
result2 = isOdd(7)
console.log(result2)