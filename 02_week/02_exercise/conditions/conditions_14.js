/*
Write a function named rainAdvice:
Take a parameter isRaining.
Use a ternary operator to return:
"Stay indoors" if isRaining is true.
"Enjoy the outdoors!" otherwise.
Call the function with different values for isRaining. 
*/

// solution
function rainAdvice (isRaining){
    return isRaining ? "Stay indoors" : "Enjoy the outdoors!"
}

// Test cases
console.log(rainAdvice(true));  // Output: "Stay indoors"
console.log(rainAdvice(false)); // Output: "Enjoy the outdoors!"