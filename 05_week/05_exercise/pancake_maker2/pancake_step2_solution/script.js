
const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");

const pancakeForm = document.querySelector("#pancakeForm");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");

const seeOrderButton = document.querySelector("#seeOrder");
const summaryText = document.querySelector("#summaryText");
const delivery = document.querySelector(".delivery");

const changeHandler = (event) => {
  console.log("Event: ", event);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  // toppings 
  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((acc, topping) => {
    return acc + parseFloat(topping.dataset.price);
  }, 0);


  // extras
  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (acc, extra) => {
      return acc + parseFloat(extra.dataset.price);
    },
    0
  );

  
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

let topping = [];

document.getElementById("seeOrder").addEventListener("click", () => {
  const name = document.getElementById("customerName").value || "Anonymous";
  const selectedPancakeType =
    pancakeForm.querySelector("#type").selectedOptions[0].textContent;
  const deliveryMethod = pancakeForm
    .querySelector('input[name="delivery"]:checked')
    .parentNode.textContent.trim();

  summaryText.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Pancake:</strong> ${selectedPancakeType}</p>
      <p><strong>Toppings:</strong> ${
        [...toppings].filter((top) => top.checked === true).length > 0
          ? [...toppings]
              .filter((top) => top.checked === true)
              .map((top) => top.dataset.name)
              .join(",")
          : "No Toppings"
      }</p>
      <p><strong>Delivery:</strong> ${deliveryMethod}</p>
      <p><strong>Total Price:</strong> ${totalPriceDisplay.textContent}</p>`;

  document.querySelector("#orderSummary").style.backgroundColor = "#eee";
});

document.getElementById("confirmOrder").addEventListener("click", function () {
  summaryText.innerHTML = Order;
});