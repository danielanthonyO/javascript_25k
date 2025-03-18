document.addEventListener("DOMContentLoaded", function () {
    let animals = [
        { name: "Fox", type: "Mammal" },
        { name: "Bear", type: "Mammal" },
        { name: "Eagle", type: "Bird" },
        { name: "Snake", type: "Reptile" },
        { name: "Frog", type: "Amphibian" },
        { name: "Shark", type: "Fish" }
    ];

    const animalList = document.getElementById("animalList");
    const searchInput = document.getElementById("searchAnimal");
    const filterType = document.getElementById("filterType");
    const addAnimalBtn = document.getElementById("addAnimal");
    const sortAnimalsBtn = document.getElementById("sortAnimals");
    const newAnimalName = document.getElementById("newAnimalName");
    const newAnimalType = document.getElementById("newAnimalType");

    function displayAnimals(filter = "All", search = "") {
        animalList.innerHTML = ""; // Clear list

        let filteredAnimals = animals
            .filter(animal => filter === "All" || animal.type === filter)
            .filter(animal => animal.name.toLowerCase().includes(search.toLowerCase()));

        if (filteredAnimals.length === 0) {
            animalList.innerHTML = `<li>No animals found.</li>`;
            return;
        }

        filteredAnimals.forEach((animal, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${animal.name} (${animal.type}) 
                <button class="remove-btn" onclick="removeAnimal(${index})">Remove</button>`;
            animalList.appendChild(li);
        });
    }

    window.removeAnimal = function (index) {
        animals.splice(index, 1);
        displayAnimals(filterType.value, searchInput.value);
    };

    addAnimalBtn.addEventListener("click", function () {
        let name = newAnimalName.value.trim();
        let type = newAnimalType.value;

        if (name && type) {
            animals.push({ name, type });
            newAnimalName.value = "";
            newAnimalType.value = "";
            displayAnimals(filterType.value, searchInput.value);
        } else {
            alert("Please enter a valid animal name and type.");
        }
    });

    searchInput.addEventListener("input", function () {
        displayAnimals(filterType.value, searchInput.value);
    });

    filterType.addEventListener("change", function () {
        displayAnimals(filterType.value, searchInput.value);
    });

    sortAnimalsBtn.addEventListener("click", function () {
        animals.sort((a, b) => a.name.localeCompare(b.name));
        displayAnimals(filterType.value, searchInput.value);
    });

    displayAnimals(); // Initial display
});
