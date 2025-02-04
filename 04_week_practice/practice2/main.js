// // changing the content of element on html
// const text = document.getElementById('content');
// console.log(text.textContent);

// const button1 = document.getElementById('firstButton')

// // select those element by id
// // console.log(text.textContent)
// // text.textContent = "Hello"
// // button.textContent = "I was clicked"

// function changeText(){
//     console.log("Button was clicked");

//     text.textContent = 'Hello world'
// }

// function changeText2(){
//     text.textContent = 'This is a coooooolll'
// }

// // / const circle = document.getElementById("alert");
// // console.log(circle.textContent);

// // const heading = document.getElementsByTagName("p");
// // console.log(heading.value);

// // const paragraph = document.getElementsByTagName("p");
// // console.log(paragraph);

// // function showAlert() {
// //     alert("Clicked something");
// // }

// // function noTouching() {
// //     alert("DO NOT CLICK IT")
// // }

// // html
// // p id = content> this is cool<p>
// // button id=firstbutton onclick=changeText> change text<button>
// // button onclick=changeBack> change back<button>
// //
// //
// // const content = content
// // const button = firstbuutton

// today <!-- another task1 -->
// selector
const button = document.querySelector('.insertBtn'); // class
const example2 = document.querySelector('#myID')     // ID
const example3 = document.querySelector('div');  // always specific

const mybutton = document.getElementById("insertBtn");
const input = document.getElementById("input");
const text = document.getElementById("result");

// function
// const handleClick = () => {
//   alert("Button was clicked");
// };

// trigger
// mybutton.addEventListener("click", handleClick);

// another task, input from text field
function displayOutput() {
    text.textContent = `This is new: ${input.value}`;

    // text.textContent = input.value;

  // correct version
  // document.getElementById('result').textContent = document.getElementById('input').value;
} 

// we can have multiple listeners for many functions
mybutton.addEventListener("click", displayOutput);
