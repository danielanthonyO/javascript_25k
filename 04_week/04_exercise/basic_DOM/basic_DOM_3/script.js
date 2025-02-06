/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/

// another way, first // access input field
const inputField = document.getElementById('inputField');
const displayText = document.getElementById('displayText');

const updateDisplayText = () => {
    displayText.innerText = inputField.value;
}
// add even listener
inputField.addEventListener('input', updateDisplayText);


// input comes as a string then we can change it to number or others
// working with input use event.target.value
// target input in real time

// NOT READY - another way of solving it.
function displayText(event) {
    document.getElementById("liveOut").textContent =
    "You typed: " + event.target.value;
}
    document.getElementById("liveText").addEventListener("input", displayText);

// const liveText = document.querySelector('liveText');
// const displayText = document.querySelector("displayText");

// function updateText (event) {
//     displayText.textContent = event.target.value;
//     console.log(event)

// }
// displayText.addEventListener('click', updateText);

