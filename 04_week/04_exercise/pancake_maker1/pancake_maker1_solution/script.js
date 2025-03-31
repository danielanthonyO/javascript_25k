// type, only one select
const pancakeType = document.querySelector('#type');
console.log(pancakeType); // result is : <select id="type">...</select>
const toppings = document.querySelectorAll('.topping'); // used class name for all
console.log(toppings);
const extras = document.querySelectorAll('.extra'); // used class name for all
console.log(extras); // result is : NodeList(3) [div.extra, div.extra, div.extra]

const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const totalPriceBanner = document.querySelector('#totalPrice');
console.log(totalPriceDisplay); // result is : <span id="totalPriceDisplay">...</span>

// add event listener to the pancakeType
// pancakeType.addEventListener('change', function() {
//   console.log(pancakeType.value); // result is : pancake
// });


// function first thing to do is to calculate the total
const calculateTotal = () => {
    //let totalPrice = 5; // because 5 is minimum price, parsefloat because of €
    let totalPrice = parseFloat(pancakeType.value);
    console.log(totalPrice); // result is : pancake

    // loop through the toppings
    toppings.forEach(topping => {
        if (topping.checked) {
            totalPrice += parseFloat(topping.value);
        }
    });

    // loop through the extras
    extras.forEach(extra => {
        if (extra.checked) {
            totalPrice += parseFloat(extra.value);
        }
    });

    // bring in total prices
    totalPriceDisplay.textContent = `${totalPrice} €`;
    totalPriceBanner.textContent = `${totalPrice} €`;

}


// add event listener to the toppings, when input changes
pancakeType.addEventListener('change', calculateTotal);

// add event listener to the toppings, when input changes
toppings.forEach(topping => {
    topping.addEventListener('change', calculateTotal);
});
// add event listener to the extras, when input changes
extras.forEach(extra => {
    extra.addEventListener('change', calculateTotal);
});