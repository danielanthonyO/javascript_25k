/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

// Step 1: Solution
const askToContinue = () => {
  let sum = 0;
  let count = 0;
  while (true) {
    let number = Number(window.prompt("Enter a number:"));
    sum = sum + number;
    count = count + 1;
    let answer = window.prompt("Do you want to continue giving numbers? (y/n)");
    if (answer === "n") {
      break;
    }
  }
  console.log(`The average of all entered numbers is: ${sum / count}`);
};

askToContinue();