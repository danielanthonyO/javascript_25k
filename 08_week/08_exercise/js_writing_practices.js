/* Task 1: Use "strict mode" /* *************************
Task: Create a function `task1` that uses `"use strict"`. 
    Inside the function, try using a variable without declaring it first.
    Catch the error and log: "Strict mode error: [error message]"
Example: 
    task1(); // Logs: "Strict mode error: variable is not defined"*/
"use strict";


function task1() {
    // Code here
    try {
        console.log(firstVariable);
    }
    catch (error) {
        console.log(`Strict mode error: ${error.message}`);
}};

console.log(task1());


/* Task 2: Declare Variables Correctly *************************
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
    Try changing `MAX_USERS` and catch the error.
Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.*/

function task2() {
    // Code here
    const MAX_USERS = 68;
    let currentUsers = 12;
    try {
        MAX_USERS = 200;
    }
    catch (error) {
        console.log(`Error: ${error.message}`); 
        console.error("Error caught:", error.message);    
}};

console.log(task2());
console.log('**************************')



/* Task 3: Create and Log an Object/* *************************
Task: Create an object `userProfile` with:
    - `name`
    - `email`
    - `isAdmin` (true or false)
    Log the object.
Expected:
- Console logs: { name: "Alice", email: "alice@example.com", isAdmin: true }*/

const userProfile = {
    name: "Alice",
    email: "alice@example.com",
    isAdmin: true
};

console.log(userProfile);



/* Task 4: Write a Simple Function **********************
Task: Create `calculateArea` function that returns the area of a rectangle.
    The function should take `width` and `height` as inputs.
Example:
calculateArea(5, 10) → 50 */

function calculateArea(width, height) {
    // Code here
    return width * height;
}

console.log(calculateArea(5, 10)); 



/* Task 5: Avoid Magic Numbers /* *************************
Task: Define `const DISCOUNT = 0.1`. 
    Write `applyDiscount(price)` that reduces the price by the discount.
Example: applyDiscount(100) → 90 */

const DISCOUNT = 0.1;
function applyDiscount(price) {
    // Code here
    return price - (price * DISCOUNT);
}

console.log(applyDiscount(100));
console.log('**************************')



/* Task 6: Write Useful Comments /* *************************
Task: Write a function `greetUser(name)` that returns a greeting.
    Use a meaningful comment explaining the function.
Example:
greetUser("Bob") → "Hello, Bob!" */

function greetUser(name) {
    // Code here
    return `How was your trip, ${name}!`;
}

console.log(greetUser("Bob"));



/* Task 7: Refactor Unclear Code /* **********************
Task: Improve this function to make it clear and readable.
Before:
function f(n){return n<0 ? 'negative' : 'positive';}
After:
- Use better naming and proper formatting. */

function checkNumberSign(n) {
    // Code here
    return n < 0 ? 'negative' : 'positive';
}

console.log(checkNumberSign(-5)); // Output: "negative"
console.log(checkNumberSign(10)); // Output: "positive"



/* Task 8: Fix Formatting /* *************************
Task: Rewrite this code to make it **formatted correctly**.
Before:
let x=10; function example(){console.log(x);}
After:
- Proper indentation and spacing. */

let x = 20;
function example() {
    let x = 10;
    console.log(x);
}

example();



// // solution ****************************
// /* Task 1: Use "strict mode"
// /*
// Task: Create a function `task1` that uses `"use strict"`. 
//       Inside the function, try using a variable without declaring it first.
//       Catch the error and log: "Strict mode error: [error message]"

// Example:
// task1(); // Logs: "Strict mode error: variable is not defined"
// */

// "use strict";

// function task1() {
//   // Code here
//   try {
//     x = 10;
//   } catch (error) {
//     console.log("Strict mode error: " + error.message);
//   }
// }

// /* Task 2: Declare Variables Correctly
// /*
// Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
//       Try changing `MAX_USERS` and catch the error.

// Expected:
// - The error should be caught and logged.
// - `MAX_USERS` should not change.
// */

// function task2() {
//   // Code here
//   try {
//     MAX_USERS = 100;
//   } catch (error) {
//     console.log("Strict mode error: " + error.message);
//   }
// }

// /* Task 3: Create and Log an Object
// /*
// Task: Create an object `userProfile` with:
//       - `name`
//       - `email`
//       - `isAdmin` (true or false)
//       Log the object.

// Expected:
// - Console logs: { name: "Alice", email: "alice@example.com", isAdmin: true }
// */

// function task3() {
//   // Code here
//   const userProfile = {
//     name: "Alice",
//     email: "alice@example.com",
//     isAdmin: true,
//   };
//   console.log(userProfile);
// }

// /* Task 4: Write a Simple Function
// /*
// Task: Create `calculateArea` function that returns the area of a rectangle.
//       The function should take `width` and `height` as inputs.

// Example:
// calculateArea(5, 10) → 50
// */

// function calculateArea(width, height) {
//   // Code here
//   return width * height;
// }

// /* Task 5: Avoid Magic Numbers
// /*
// Task: Define `const DISCOUNT = 0.1`. 
//       Write `applyDiscount(price)` that reduces the price by the discount.

// Example:
// applyDiscount(100) → 90
// */

// const DISCOUNT = 0.1;
// function applyDiscount(price) {
//   // Code here
//   return price * (1 - DISCOUNT);
// }

// /* Task 6: Write Useful Comments
// /*
// Task: Write a function `greetUser(name)` that returns a greeting.
//       Use a meaningful comment explaining the function.

// Example:
// greetUser("Bob") → "Hello, Bob!"
// */

// function greetUser(name) {
//   // Code here
//   return "Hello, " + name + "!";
// }

// /* Task 7: Refactor Unclear Code
// /*
// Task: Improve this function to make it clear and readable.

// Before:
// function f(n){return n<0 ? 'negative' : 'positive';}

// After:
// - Use better naming and proper formatting.
// */

// function checkNumber(n) {
//   // Code here
//   if (n < 0) {
//     return "negative";
//   } else {
//     return "positive";
//   }
// }

// /* Task 8: Fix Formatting
// /*
// Task: Rewrite this code to make it **formatted correctly**.

// Before:
// let x=10; function example(){console.log(x);}

// After:
// - Proper indentation and spacing.
// */

// function example() {
//   let x = 10;
//   console.log(x);
// }