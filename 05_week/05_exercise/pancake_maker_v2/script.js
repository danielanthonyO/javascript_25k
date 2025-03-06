// select all items and store in a variable
const pancakeType = document.querySelector("#type"); // console.log(toppings
const toppings = document.querySelectorAll(".topping"); // used class name
const extras = document.querySelectorAll(".extra"); // used class name for

const pancakeForm = document.querySelector("#pancakeForm");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");

const seeOrderButton = document.querySelector("#seeOrder");
const summaryText = document.querySelector("#summaryText");
const delivery = document.querySelector(".delivery");


// ********************  version 1 ************************
// // function first thing to do is to calculate the total
// const calculateTotal = () => {
//     //let totalPrice = 5; // because 5 is minimum price, parsefloat because of €
//     let totalPrice = parseFloat(pancakeType.value);
//     console.log(totalPrice); // result is : pancake

//     // loop through the toppings
//     toppings.forEach(topping => {
//         if (topping.checked) {
//             totalPrice += parseFloat(topping.value);
//         }
//     });

//     // loop through the extras
//     extras.forEach(extra => {
//         if (extra.checked) {
//             totalPrice += parseFloat(extra.value);
//         }
//     });

//     // bring in total prices
//     totalPriceDisplay.textContent = `${totalPrice} €`;
//     totalPriceBanner.textContent = `${totalPrice} €`;

// }

// // add event listener to the toppings, when input changes
// pancakeType.addEventListener('change', calculateTotal);

// // add event listener to the toppings, when input changes
// toppings.forEach(topping => {
//     topping.addEventListener('change', calculateTotal);
// });
// // add event listener to the extras, when input changes
// extras.forEach(extra => {
//     extra.addEventListener('change', calculateTotal);
// });


// *********************** version 2 ************************
const changeHandler = (event) => {
  //  to test on browser = console.log(event.target.name);  //  console.log(event.target.value);
  console.log("Event: ", event);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  // console.log('Base price: ', basePrice);

  // acc = sum, learn spread operator
  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((acc, topping) => {
    return acc + parseFloat(topping.dataset.price);
  }, 0);
  // console.log('Toppings total: ', toppingsTotal);

  // Do extras logic here and deliveryfee logic here
  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (acc, extra) => {
      return acc + parseFloat(extra.dataset.price);
    },
    0
  );
  // console.log('Extras total: ', extrasTotal);

  let deliveryfee = 0;
  const deliveryChecked = document.querySelector(".delivery:checked");
  console.log("DeliveryChecked: ", deliveryChecked.dataset.price);
  if (deliveryChecked) {
    deliveryfee = parseFloat(deliveryChecked.dataset.price);
  }
  const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryfee;

  // Do total price logic here
  // const totalPrice = basePrice + toppingsTotal + extrasTotal;

  totalPriceDisplay.textContent = `${totalPrice} €`;
  totalPriceBanner.textContent = `${totalPrice} €`;
};

// event listener for the form
pancakeForm.addEventListener("change", changeHandler);

// event listener for the see order button

seeOrderButton.addEventListener("click", () => {
  const deliveryfee = document.querySelector(".delivery:checked");
  const customerName = document.querySelector("#customerName");
  const pancakeType = document.querySelector("#type");
  const toppings = document.querySelector("#topping");
  const extras = document.querySelector("#extra");



  summaryText.textContent = `Order created by ${customerName.value} for ${pancakeType.value} with ${toppings.value} and ${extras.value} for a total of ${totalPriceDisplay.textContent}.`;
});

//  ********** for multiple selections when multiple appears in the html
// const basePriceAll = document.getElementById('type');
// console.log('Base price all: ', basePriceAll.selectedOptions);
// console.log('Base price: ', basePrice);

// customername,

let topping = [];

