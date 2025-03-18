// // const animalSimple = ['Fox', 'Eagle', 'Shark', 'Wolf', 'Panda', 'Tiger', 'Dolphin', 'Owl', 'Kangaroo', 'Unicorn'];
// const animalList = document.querySelector("#animalList");
// const addAnimalButton = document.querySelector("#addAnimal");
// const searchInput = document.querySelector("#searchAnimal");
// const sortButton = document.querySelector("#sortAnimals");

// const animals = [
//     { name: "Fox", type: "mammal", age: 4 },
//     { name: "Eagle", type: "bird" },
//     { name: "Shark", type: "fish" },
//     { name: "Wolf", type: "mammal" },
//     { name: "Panda", type: "mammal" },
//     { name: "Tiger", type: "mammal" },
//     { name: "Dolphin", type: "mammal" },
//     { name: "Owl", type: "bird" },
//     { name: "Kangaroo", type: "mammal" },
//     { name: "Unicorn", type: "mythical" },
// ];

// // make a function to display
// const displayAnimals = (animalArray) => {
//     animalList.innerHTML = ""; // clean the ul
//     for (const animal of animalArray) {
//         const li = document.createElement("li");
//         li.textContent = `${animal.name}`;
//         animalList.appendChild(li);
// }
// };

// // // add animal use event listener because it wait for event
// // const addAnimal = () => {
// //   const nameInput = document.querySelector("#newAnimalName").value.trim();
// //   animals.push(nameInput);
// //   displayAnimals(animals);
// //   //console.log(animalSimple);
// //   document.querySelector("#newAnimalName").value = "";
// // };

// // search animal
// const searchAnimal = () => {
//     const searchText = searchInput.value.toLowerCase().trim();
//   //console.log(searchText);
//     const filteredAnimals = animals.filter((animal) =>
//     animal.name.toLocaleLowerCase().includes(searchText)
// );

// displayAnimals(filteredAnimals);
// };


// const filterByTypeAnimal = () => {
//     // it will select only one value
//     const selectedType = filterType.value;
//     if (selectedType === "All") {
//         displayAnimals(animals);
//     }
//     else {
//         const filteredAnimals = animals.filter(animal => animal.type === selectedType);
//         displayAnimals(filteredAnimals);  
//     }
// };

// const filterType = document.querySelector('#filterType');
// const sortAnimal = () => {
//     animalSimple.sort();
//     displayAnimals(animalSimple);
// };

// addAnimalButton.addEventListener("click", addAnimal); // no bracket to call
// searchInput.addEventListener("input", searchAnimal);
// sortButton.addEventListener("click", sortAnimal);
// filterType.addEventListener('change', filterByTypeAnimal)

// // function to search element. filter array displayed

// // calling functions should be in last line on loading
// displayAnimals();

