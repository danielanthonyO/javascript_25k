/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

// solution
const paragraph = document.getElementById('content');
const button = document.getElementsByTagName('button')
// acessing elements for id, classname or tagname.

// call 
function changeText() {
    document.getElementById("demo").innerHTML = "Hello World";
}