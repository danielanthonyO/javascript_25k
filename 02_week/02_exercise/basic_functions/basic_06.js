/* Create a function named replaceWord that:
Takes three parameters, sentence, oldWord, and newWord.
Returns the sentence with oldWord replaced by newWord.
Call the function with the sentence "I like apples.", oldWord as "apples", and newWord as "bananas".
Print the result using console.log(). 

*/

function replaceWord (sentence, oldworld, newWord) {
    return sentence.replace(oldworld, newWord);
}

result = replaceWord("I like apples.", "apples", "bananas")
console.log(result); //  // "I like bananas."