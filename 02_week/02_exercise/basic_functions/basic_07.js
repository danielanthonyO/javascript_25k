/* Create a function named containsWord that:
Takes two parameters, sentence and word.
Returns true if sentence includes word, otherwise false.
Call the function with the sentence "JavaScript is fun!" and the word "fun".
Print the result using console.log().

Bonus: Modify the function to use implicit return. 

*/

// solution
function containsWord(sentence, word) {
    return sentence.includes(word);
}

const result = containsWord("JavaScript is fun!", "fun");
console.log(result);