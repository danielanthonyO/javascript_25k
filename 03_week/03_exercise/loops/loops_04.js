/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

// Step 1: Solution 1
// Step 2: initialize the variable to store the count of even numbers
// Step 3: create a loop to prompt the user to input 20 numbers
// Step 4: check if the number is even
// Step 5: if it is even, increment the count of even numbers
// Step 6: log and count of even numbers. // i = i +1 or i += 1

// Solution 1
const countEvenNumbers = () => {
  let evenNum = 0;
  let count = 1;

  while (count < 10) {
    let number = Number(window.prompt("Enter a 20 numbers:"));
    if (number % 2 === 0) {
      evenNum++;
    }
    count++;
  }
  console.log(`The count of even numbers is: ${evenNum}`);
};

countEvenNumbers();
console.log('=============================================');


// Solution 2 using for loop.
const countEvenNumbers1 = () => {
  count = 0;
  for (i = 0; i < 20; i++) {
    let number = Number(window.prompt("Enter a 20 numbers:"));
    if (number % 2 === 0) {
      count++;
    }
  }
  console.log(`The count of even numbers is: ${count}`);
  console.log("The count of even numbers is:", count);
};

countEvenNumbers1();
console.log('=============================================');
