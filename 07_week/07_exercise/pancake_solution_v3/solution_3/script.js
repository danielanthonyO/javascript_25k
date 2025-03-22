// // select all items and store in a variable
// const pancakeType = document.querySelector("#type"); // console.log(toppings
// const toppings = document.querySelectorAll(".topping"); // used class name
// const extras = document.querySelectorAll(".extra"); // used class name for

// const pancakeForm = document.querySelector("#pancakeForm");
// const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
// const totalPriceBanner = document.querySelector("#totalPrice");

// const seeOrderButton = document.querySelector("#seeOrder");
// const summaryText = document.querySelector("#summaryText");
// const delivery = document.querySelector(".delivery");


// // ********************  version 1 ************************
// // // function first thing to do is to calculate the total
// // const calculateTotal = () => {
// //     //let totalPrice = 5; // because 5 is minimum price, parsefloat because of €
// //     let totalPrice = parseFloat(pancakeType.value);
// //     console.log(totalPrice); // result is : pancake

// //     // loop through the toppings
// //     toppings.forEach(topping => {
// //         if (topping.checked) {
// //             totalPrice += parseFloat(topping.value);
// //         }
// //     });

// //     // loop through the extras
// //     extras.forEach(extra => {
// //         if (extra.checked) {
// //             totalPrice += parseFloat(extra.value);
// //         }
// //     });

// //     // bring in total prices
// //     totalPriceDisplay.textContent = `${totalPrice} €`;
// //     totalPriceBanner.textContent = `${totalPrice} €`;

// // }

// // // add event listener to the toppings, when input changes
// // pancakeType.addEventListener('change', calculateTotal);

// // // add event listener to the toppings, when input changes
// // toppings.forEach(topping => {
// //     topping.addEventListener('change', calculateTotal);
// // });
// // // add event listener to the extras, when input changes
// // extras.forEach(extra => {
// //     extra.addEventListener('change', calculateTotal);
// // });


// // *********************** version 2 ************************
// const changeHandler = (event) => {
//   console.log("Event: ", event);
//   const basePrice = parseFloat(
//     document.getElementById("type").selectedOptions[0].dataset.price
//   );

//   // Do toppings logic here and deliveryfee logic here
//   const toppingsTotal = [
//     ...document.querySelectorAll(".topping:checked"),
//   ].reduce((acc, topping) => {
//     return acc + parseFloat(topping.dataset.price);
//   }, 0);

//   // Do extras logic here and deliveryfee logic here
//   const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
//     (acc, extra) => {
//       return acc + parseFloat(extra.dataset.price);
//     },
//     0
//   );

//   let deliveryfee = 0;
//   const deliveryChecked = document.querySelector(".delivery:checked");
//   console.log("DeliveryChecked: ", deliveryChecked.dataset.price);
//   if (deliveryChecked) {
//     deliveryfee = parseFloat(deliveryChecked.dataset.price);
//   }
//   const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryfee;

//   // Do total price logic here
//   // const totalPrice = basePrice + toppingsTotal + extrasTotal;

//   totalPriceDisplay.textContent = `${totalPrice} €`;
//   totalPriceBanner.textContent = `${totalPrice} €`;
// };

// // event listener for the form
// pancakeForm.addEventListener("change", changeHandler);

// // event listener for the see order button

// seeOrderButton.addEventListener("click", () => {
//   const deliveryfee = document.querySelector(".delivery:checked");
//   const customerName = document.querySelector("#customerName");
//   const pancakeType = document.querySelector("#type");
//   const toppings = document.querySelector("#topping");
//   const extras = document.querySelector("#extra");



//   summaryText.textContent = `Order created by ${customerName.value} for ${pancakeType.value} with ${toppings.value} and ${extras.value} for a total of ${totalPriceDisplay.textContent}.`;
// });

// //  ********** for multiple selections when multiple appears in the html
// // const basePriceAll = document.getElementById('type');
// // console.log('Base price all: ', basePriceAll.selectedOptions);
// // console.log('Base price: ', basePrice);

// // customername,

// let topping = [];

// document.getElementById("seeOrder").addEventListener("click", () => {
//   const name = document.getElementById("customerName").value || "Anonymous";
//   pancakeType = form.querySelector("#type").selectedOptions[0].textContent;
//   const deliveryMethod = form.querySelector('input[name="delivery"]:checked').parentNode.textContent.trim();

//   summaryText.innerHTML = `
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Pancake:</strong> ${pancakeType}</p>
//       <p><strong>Toppings:</strong> ${toppings.length > 0 ? toppings.join(", ") : "None"}</p>
//       <p><strong>Extras:</strong> ${extras.length > 0 ? extras.join(", ") : "None"}</p>
//       <p><strong>Delivery:</strong> ${deliveryMethod}</p>
//       <p><strong>Total Price:</strong> ${totalPriceDisplay.textContent}</p>
//   `;

//   orderSummary.style.display = "block";
// });


const orderSummaryUpdate = () => {
  // getting the selector for the customer name, if the input is empty then default name = guest
  const customerName = document.querySelector("#customerName").value || "Guest";

  // gets the full text of any selected pancake
  const selectedPancake =
    document.querySelector("#type").selectedOptions[0].text;

  // getting any selected topping and the text.
  const selectedToppings = [
    ...document.querySelectorAll(".topping:checked"),
  ].map((topping) => topping.parentElement.textContent.trim());

  // getting selected extras

  const selectedExras = [...document.querySelectorAll(".extra:checked")].map(
    (extra) => extra.parentElement.textContent.trim()
  );

  // also for deliveries.
  const selectedDelivery = [
    ...document.querySelectorAll(".delivery:checked"),
  ].map((delivery) => delivery.parentElement.textContent.trim());

  // where the summary will be displayed after getting each selected values.

  const orderSummary = `<strong>Name: </strong> ${customerName} <br>
  <strong>Pancake Type:</strong> ${selectedPancake} <br>
  <strong>Toppings: </strong> ${
    selectedToppings.length > 0 ? selectedToppings.join(",") : "None"
  } <br>
  <strong>Extras: </strong> ${
    selectedExras.length > 0 ? selectedExras.join(",") : "None"
  } <br>
  <strong>Delivery: </strong> ${selectedDelivery} <br>
  <strongTotal Price </strong> ${totalPriceDisplay.textContent} <br>
`;

  summaryText.innerHTML = orderSummary;
};

seeOrder.addEventListener("click", orderSummaryUpdate);