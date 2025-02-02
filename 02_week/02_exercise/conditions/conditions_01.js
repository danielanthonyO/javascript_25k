/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */

// solution 1
function checkAdult (age){
    if (age >= 18){
        return `You are an adult.`
    }
    else{
        return "nothing"
    }
}

result1 = checkAdult(20)
result2 = checkAdult(18)
result3 = checkAdult(16)

console.log(result1);
console.log(result2)
console.log(result3)

// solution 2
let checkAdult1 = (age) => {
    if (age >= 18) {
        return "You are an adult.";
    }
}

console.log(checkAdult1(20)); // "You are an adult."
console.log(checkAdult1(15)); // undefined
console.log(checkAdult1(18)); // "You are an adult."
console.log(checkAdult1(25)); // "You are an adult."



// List of ages to check
const ages = [16, 18, 21, 12, 30, 17];

// Loop through the list of ages and call the checkAdult function
ages.forEach(age => {
  const result = checkAdult(age);
  if (result) {
    console.log(`Age ${age}: ${result}`);
  }
});