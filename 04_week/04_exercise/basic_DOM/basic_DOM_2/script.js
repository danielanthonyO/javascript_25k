/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/

// selectors
const userInput = document.querySelector('#fruitInput');
const button = document.querySelector('#addFruitBtn');
const lists = document.getElementById('fruitList');


// functions
function updateFruitList() {
    // const parent = document
    const newItem = document.createElement('li');
    // get content in
    newItem.textContent = userInput.value;
    // add to parent
    lists.appendChild(newItem);
    // to clear value
    userInput.value = '';
}

// trigger
button.addEventListener('click', updateFruitList);