document.addEventListener("DOMContentLoaded", function () {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Function to display all orders
    function displayAllOrders() {
        const ordersListDiv = document.getElementById("ordersList");
        ordersListDiv.innerHTML = "";

        orders.forEach((order) => {
            const orderDiv = document.createElement("div");
            orderDiv.classList.add("order-item", order.status);
            orderDiv.innerHTML = `
                <p><strong>ID:</strong> ${order.id}</p>
                <p><strong>Customer Name:</strong> ${order.customerName}</p>
                <p><strong>Pancake Type:</strong> ${order.selectedPancake}</p>
                <p><strong>Toppings:</strong> ${order.toppings.join(", ") || "None"}</p>
                <p><strong>Extras:</strong> ${order.extras.join(", ") || "None"}</p>
                <p><strong>Delivery:</strong> ${order.deliveryMethod}</p>
                <p><strong>Total Price:</strong> ${order.totalPrice}€</p>
                <label for="status">Status:</label>
                <select class="status-dropdown" data-order-id="${order.id}">
                    <option value="waiting" ${order.status === "waiting" ? "selected" : ""}>Waiting</option>
                    <option value="ready" ${order.status === "ready" ? "selected" : ""}>Ready</option>
                    <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>Delivered</option>
                </select>
            `;
            ordersListDiv.appendChild(orderDiv);
        });

        document.querySelectorAll(".status-dropdown").forEach((dropdown) => {
            dropdown.addEventListener("change", (event) => {
                updateOrderStatus(event.target.dataset.orderId, event.target.value);
            });
        });
    }

    // Function to update the order status
    function updateOrderStatus(orderId, newStatus) {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        let order = orders.find((o) => o.id == orderId);
        if (order) {
            order.status = newStatus;
            localStorage.setItem("orders", JSON.stringify(orders));
            displayAllOrders(); // Refresh the order list
        }
    }

    // Call the function to display all orders
    displayAllOrders();
});
