/* Create a variable sentence and assign it the value "Learning JavaScript is fun!".
Use .substring() to extract the word "JavaScript" from the sentence.
Print the extracted word using console.log().
Example output:
"Extracted word: JavaScript" */

// solution
let sentence = "Learning JavaScript is fun!";

// start and end index of "JavaScript"
let startIndex = sentence.indexOf("JavaScript"); // starting position
let endIndex = startIndex + "JavaScript".length; 

// Step 3: Extract the word using substring()
let extractedWord = sentence.substring(startIndex, endIndex);

// Step 4: Print the result
console.log("Extracted word:", extractedWord);