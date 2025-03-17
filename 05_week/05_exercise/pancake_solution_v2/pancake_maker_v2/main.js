document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("pancakeForm");
    const totalPriceDisplay = document.getElementById("totalPriceDisplay");
    const totalPriceBanner = document.getElementById("totalPrice");
    const summaryText = document.getElementById("summaryText");
    const orderSummary = document.getElementById("orderSummary");

    let toppings = [];
    let extras = [];
    let basePrice = 5;
    let deliveryPrice = 0;

    form.addEventListener("change", (event) => {
        const target = event.target;

        if (target.id === "type") {
            basePrice = parseFloat(target.selectedOptions[0].dataset.price);
        } else if (target.classList.contains("topping")) {
            updateArray(toppings, target);
        } else if (target.classList.contains("extra")) {
            updateArray(extras, target);
        } else if (target.classList.contains("delivery")) {
            deliveryPrice = target.checked ? parseFloat(target.dataset.price) : 0;
        }

        updateTotalPrice();
    });

    function updateArray(array, checkbox) {
        const itemName = checkbox.parentNode.textContent.trim();
        if (checkbox.checked) {
            array.push(itemName);
        } else {
            const index = array.indexOf(itemName);
            if (index > -1) array.splice(index, 1);
        }
    }

    function updateTotalPrice() {
        let total = basePrice + (toppings.length * 1) + extras.reduce((sum, extra) => sum + parseFloat(extra.dataset.price), 0) + deliveryPrice;
        totalPriceDisplay.textContent = `${total}€`;
        totalPriceBanner.textContent = `${total}€`;
    }

    document.getElementById("seeOrder").addEventListener("click", () => {
        const name = document.getElementById("customerName").value || "Anonymous";
        const pancakeType = form.querySelector("#type").selectedOptions[0].textContent;
        const deliveryMethod = form.querySelector('input[name="delivery"]:checked').parentNode.textContent.trim();

        summaryText.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Pancake:</strong> ${pancakeType}</p>
            <p><strong>Toppings:</strong> ${toppings.length > 0 ? toppings.join(", ") : "None"}</p>
            <p><strong>Extras:</strong> ${extras.length > 0 ? extras.join(", ") : "None"}</p>
            <p><strong>Delivery:</strong> ${deliveryMethod}</p>
            <p><strong>Total Price:</strong> ${totalPriceDisplay.textContent}</p>
        `;

        orderSummary.style.display = "block";
    });
});
