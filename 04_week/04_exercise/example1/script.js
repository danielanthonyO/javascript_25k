document.addEventListener("DOMContentLoaded", function () {
    const pancakeType = document.getElementById("type");
    const toppings = document.querySelectorAll(".topping");
    const extras = document.querySelectorAll(".extra");
    const totalPriceElement = document.getElementById("totalPrice");
    const totalPriceDisplay = document.getElementById("totalPriceDisplay");
  
    function calculateTotal() {
      let totalPrice = parseFloat(pancakeType.value);
  
      toppings.forEach((topping) => {
        if (topping.checked) totalPrice += parseFloat(topping.value);
      });
  
      extras.forEach((extra) => {
        if (extra.checked) totalPrice += parseFloat(extra.value);
      });
  
      totalPriceElement.textContent = `${totalPrice}€`;
      totalPriceDisplay.textContent = `${totalPrice}€`;
  
      totalPriceDisplay.classList.add("price-update");
      setTimeout(() => totalPriceDisplay.classList.remove("price-update"), 300);
    }
  
    pancakeType.addEventListener("change", calculateTotal);
    toppings.forEach((topping) => topping.addEventListener("change", calculateTotal));
    extras.forEach((extra) => extra.addEventListener("change", calculateTotal));
  });
  