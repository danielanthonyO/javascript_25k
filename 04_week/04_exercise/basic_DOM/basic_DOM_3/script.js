/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/

// NOT READY
function displayText(event) {
    document.getElementById("liveOut").textContent =
    "You typed: " + event.target.value;
}
    document.getElementById("liveText").addEventListener("input", displayText);


// working with input use event.target.value
// target input in real time

// const liveText = document.querySelector('liveText');
// const displayText = document.querySelector("displayText");

// function updateText (event) {
//     displayText.textContent = event.target.value;
//     console.log(event)

// }
// displayText.addEventListener('click', updateText);

