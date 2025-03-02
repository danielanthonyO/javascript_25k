const animalSimple = ['Fox', 'Eagle', 'Shark', 'Wolf', 'Panda', 'Tiger', 'Dolphin', 'Owl', 'Kangaroo', 'Unicorn'];

console.log(animalSimple);

const animalList = document.querySelector('#animalList');
const addAnimalButton = document.querySelector('#addAnimal');
const searchInput = document.querySelector('#searchAnimal');
const sortButton = document.querySelector('#sortAnimals');


// make a function to display
const displayAnimals = (animalArray) => {
    animalList.innerHTML = ''; // clean the ul

for (const animal of animalArray) {
    const li = document.createElement('li');
    li.textContent = (`${animal}`);
    animalList.appendChild(li);
        
    }
};

// add animal use event listener because it wait for event
const addAnimal = () => {
    const nameInput = document.querySelector('#newAnimalName').value.trim();
    animalSimple.push(nameInput);
    displayAnimals(animalSimple);
    //console.log(animalSimple);
    document.querySelector('#newAnimalName').value = '';
};

// search animal
const searchAnimal = () => {
    //console.log('to check');
    const searchText = searchInput.value.toLowerCase().trim(); // trim maybe
    //console.log(searchText);
    const filteredAnimals = animalSimple.filter(animal => animal.toLocaleLowerCase().includes(searchText));

    displayAnimals(filteredAnimals);
}

const sortAnimal = () => {
    animalSimple.sort();
    displayAnimals(animalSimple);
}



addAnimalButton.addEventListener('click', addAnimal) // no bracket to call
// two event 
searchInput.addEventListener('input', searchAnimal);

sortButton.addEventListener('click', sortAnimal);


// function to search element. filter array displayed





// calling functions should be in last line on loading
displayAnimals(animalSimple)