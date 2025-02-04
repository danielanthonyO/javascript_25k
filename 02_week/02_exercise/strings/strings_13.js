/* Create a variable longText and assign it the value "The quick brown fox jumps over the lazy dog."
Use .slice() to extract "quick brown fox".
Print the sliced portion using console.log().
Example output:
"Sliced text: quick brown fox" */

// solution
let longText = "The quick brown fox jumps over the lazy dog.";
let startIndex = longText.indexOf("quick");
let endIndex = startIndex + "quick brown fox".length; 

let sliceText = longText.slice(startIndex, endIndex);

console.log(`Sliced text: ${sliceText} `)