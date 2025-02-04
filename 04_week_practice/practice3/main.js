

function retrieve() {
    const input = document.getElementById('fruitInput').value;
    let fruitList = document.getElementById("fruitList");
    let element = document.createElement("li");
    element.innerText = input;
    fruitList.appendChild(element);
}


// remove an element, child element
const parent = document.getElementById('parent');
const child = document.getElementById('child');
parent.removeChild(child);


// set attributes
