// SOLUTIONS
const searchAnimal = document.getElementById('searchAnimal');
const newAnimalName = document.getElementById('newAnimalName');
const addAnimalB = document.getElementById('addAnimal');
const animalList = document.getElementById('animalList');


// functions
let animals = []; // Empty array

function addAnimal() {
    let animal = newAnimalName.value.trim();
    
    if (animal) { 
        // Add items
        animals.push(animal); 
        const newItem = document.createElement("li");
        newItem.textContent = animal;
        animalList.appendChild(newItem);
        let input = newAnimalName;
        input.value = ""; // Clear input field

        //displayAnimals(); // Update the display
    }
}

// function displayAnimals() {
//     //animalList.innerHTML = ""; // Clear the list before updating
//     animals.forEach((animal, index) => {
//         let li = document.createElement("li");
//         li.textContent = animal;
//         animalList.appendChild(li);
//     });
// }




