/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

// Step 1: Solution
// Step 2: initialize the variable to store the sum of numbers
// Step 3: initialize the variable to store the count of numbers
// Step 4: create a loop to prompt the user to input numbers
// Step 5: check if the number is 0
// Step 6: if it is 0, break the loop
// Step 7: if it is not 0, add the number to the sum of numbers.

// Solution 1
const calculateAverageUntilZero = () => {
  let sum = 0;
  let count = 0;
  while (true) {
    let number = Number(window.prompt("Enter a number:"));
    if (number === 0) {
      break;
    }
    sum = sum + number;
    count= count + 1;
  }
  console.log(`The average of all entered numbers is: ${sum / count}`);
};

calculateAverageUntilZero();