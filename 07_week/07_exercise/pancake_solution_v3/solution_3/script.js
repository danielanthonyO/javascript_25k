// Order array to store all orders
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Function to generate a unique order ID
function generateOrderId() {
  return Date.now();
}

// Function to calculate total price
function calculateTotalPrice() {
  let basePrice = parseFloat(document.getElementById("type").selectedOptions[0].dataset.price);
  let toppingsPrice = [...document.querySelectorAll(".topping:checked")].length * 1;
  let extrasPrice = [...document.querySelectorAll(".extra:checked")].reduce((sum, extra) => sum + parseFloat(extra.dataset.price), 0);
  let deliveryPrice = parseFloat(document.querySelector(".delivery:checked").dataset.price);

  return basePrice + toppingsPrice + extrasPrice + deliveryPrice;
}

// Function to handle order submission
document.getElementById("seeOrder").addEventListener("click", function () {
  let customerName = document.getElementById("customerName").value || "Guest";
  let selectedPancake = document.getElementById("type").value;
  let toppings = [...document.querySelectorAll(".topping:checked")].map(t => t.nextSibling.textContent.trim());
  let extras = [...document.querySelectorAll(".extra:checked")].map(e => e.nextSibling.textContent.trim());
  let deliveryMethod = document.querySelector(".delivery:checked").nextSibling.textContent.trim();
  let totalPrice = calculateTotalPrice();

  let newOrder = {
    id: generateOrderId(),
    customerName,
    selectedPancake,
    toppings,
    extras,
    deliveryMethod,
    totalPrice,
    status: "waiting"
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  document.getElementById("summaryText").textContent = `Order Confirmed: ${customerName}, ${selectedPancake}, ${toppings.join(", ")}, ${extras.join(", ")}, ${deliveryMethod}, Total: ${totalPrice}€`;
});

// Function to display all orders
function displayOrders() {
  let ordersContainer = document.getElementById("ordersList");
  ordersContainer.innerHTML = "";
  orders.forEach(order => {
    let orderDiv = document.createElement("div");
    orderDiv.classList.add("order-item", order.status);
    orderDiv.innerHTML = `
      <p><strong>ID:</strong> ${order.id}</p>
      <p><strong>Customer:</strong> ${order.customerName}</p>
      <p><strong>Pancake:</strong> ${order.selectedPancake}</p>
      <p><strong>Toppings:</strong> ${order.toppings.join(", ")}</p>
      <p><strong>Extras:</strong> ${order.extras.join(", ")}</p>
      <p><strong>Delivery:</strong> ${order.deliveryMethod}</p>
      <p><strong>Total:</strong> ${order.totalPrice}€</p>
      <p><strong>Status:</strong>
        <select onchange="updateOrderStatus(${order.id}, this.value)">
          <option value="waiting" ${order.status === "waiting" ? "selected" : ""}>Waiting</option>
          <option value="ready" ${order.status === "ready" ? "selected" : ""}>Ready</option>
          <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>Delivered</option>
        </select>
      </p>
    `;
    ordersContainer.appendChild(orderDiv);
  });
}

// Function to update order status
function updateOrderStatus(orderId, newStatus) {
  let order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    localStorage.setItem("orders", JSON.stringify(orders));
    displayOrders();
  }
}

// Load orders if on "All Orders" page
if (document.getElementById("ordersList")) {
  displayOrders();
}