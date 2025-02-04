/* 
Write a function named checkForFox:
Take a boolean parameter hasFox.
If hasFox is true, return "You have a fox as a pet!"
Otherwise, return "No fox detected!"
Call the function with true and false and print the result. 
*/

// solution
function checkForFox1 (hasFox){
    if (true) {
        return "You have a fox as a pet!"
    }
}

result = checkForFox1(true)
console.log(result)


// solution 2
function checkForFox(hasFox) {
    if (hasFox) {
      return "You have a fox as a pet!";
    } else {
      return "No fox detected!";
    }
  }
  
  // Test the function
  console.log(checkForFox(true));  // Output: You have a fox as a pet!
  console.log(checkForFox(false)); // Output: No fox detected!