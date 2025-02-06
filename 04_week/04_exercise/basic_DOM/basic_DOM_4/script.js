/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const paragraph = document.getElementById('paragraph');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () =>{
    paragraph.style.display==="none"
    ? (paragraph.style.display = "block")
    : (paragraph.style.display = "none");
})

// we can manipulate element using javascript
// on css we can set display to be hidden so that when clicked it appears.