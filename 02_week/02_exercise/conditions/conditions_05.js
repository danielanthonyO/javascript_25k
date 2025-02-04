/* 
Write a function named checkAnimal:
Take a parameter animalType.
Use a ternary operator to return:
"You have a clever companion!" if animalType is "fox".
"Not a fox, but still cool!" otherwise.
Call the function with values like "fox" and "cat". 
*/

// solution 1
function checkAnimal (animalType){
    if (animalType === "fox"){
        return "You have a clever companion!"
    }
    else {
        return "Not a fox, but still cool!" 
    }
}

console.log(checkAnimal("cat"))
console.log(checkAnimal("fox"))

// solution 2
let checkAnimal2 = (animalType) => {
    return animalType === "fox" ? "You have a clever companion!" : "Not a fox, but still cool!";
  }
  
  // Call the function with values "fox" and "cat"
  console.log(checkAnimal2("fox"));  // Output: "You have a clever companion!"
  console.log(checkAnimal2("cat"));  // Output: "Not a fox, but still cool!"
  
  // Call the function with numeric scores like 85 and 75
  console.log(checkAnimal2(85));  // Output: "Not a fox, but still cool!"