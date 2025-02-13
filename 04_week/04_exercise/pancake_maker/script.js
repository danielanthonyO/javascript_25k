

const totalPriceElement = document.getElementById('totalPriceDisplay');
console.log(totalPriceElement);
const checkboxes = document.querySelectorAll('.topping');
const totalP = document.getElementById('totalPrice');
const pancake = document.getElementById('type');

let totalPrice = 5;

// if(pancake.value = 5){
//     totalPrice.textContent = totalPrice;
// }
// else if(pancake.value = 6){
//     totalPrice.textContent = totalPrice;
// }
// else{
//     totalPrice.textContent = totalPrice;
// }

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            totalPrice += 1;
        } else {
            totalPrice -= 1;
        }

        // Update the total price
        totalPriceElement.textContent = totalPrice;
        let overallPrice = `${totalPrice} + 5€`
        console.log(overallPrice);
    });
});
