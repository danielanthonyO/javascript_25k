/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

// solution
function canVote (age){
    if (age >= 18){
        console.log("Eligible to vote")
        return true
    }
    else {
        console.log("Not eligible to vote")
        return false
    }
}

console.log(canVote(24));
console.log(canVote(14));