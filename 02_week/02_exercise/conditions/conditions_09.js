/* 
Write a function named canEnterEvent:
Take two parameters: age and hasID.
If age is 18 or older AND hasID is true, return "You can enter the event."
Otherwise, return "You cannot enter."
Call the function with different combinations of age and hasID. 
*/

function canEnterEvent (age, hasID){
    if (age >= 18 && hasID){
        return "You can enter the event."
    }
    else {
        return "You cannot enter."
    }
}

console.log(canEnterEvent (24, true))
console.log(canEnterEvent (14, true))
console.log(canEnterEvent (14, false))
console.log(canEnterEvent (24, false))