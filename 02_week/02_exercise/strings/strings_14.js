/* Create a variable description and assign it the value " JavaScript is Fun and powerful! ".
Perform the following:
Trim the extra spaces using .trim().
Convert the string to lowercase.
Check if it includes the word "fun".
Replace "powerful" with "amazing".
Print the final string and whether it includes "fun" using console.log().
Example output:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
 */

// solution
let description = " JavaScript is Fun and powerful!";

// Step 2: Trim the extra spaces
let trimmedDescription = description.trim();
// Step 3: Convert the string to lowercase
let lowerCaseDescription = trimmedDescription.toLowerCase();

// Step 4: Check if the string includes "fun"
let includesFun = lowerCaseDescription.includes("fun");
// Step 5: Replace "powerful" with "amazing"
let finalDescription = lowerCaseDescription.replace("powerful", "amazing");

console.log("Final description:", finalDescription);
console.log("Does it include 'fun'?", includesFun);

