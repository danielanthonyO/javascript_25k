/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/
// Your code here
// ******************************************************
// Define the weather object
const weather = {
  temperature: 22, // example temperature in Celsius
  humidity: 60, // example humidity percentage
  condition: "Rainy", // example condition
};

// Function to log a message based on the weather condition
function checkWeather(weather) {
    if (weather.condition === "Rainy") {
    console.log("Take an umbrella!");
}
}

// Call the function with the weather object
checkWeather(weather);
console.log("==============================================");

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/
// Your code here
// Define the shoppingCart object
const shoppingCart = {
  items: [
    { name: "Apple", price: 1.2, quantity: 3 },
    { name: "Banana", price: 0.5, quantity: 5 },
    { name: "Orange", price: 0.8, quantity: 2 },
  ],
};

// Function to calculate the total price of all items in the cart using reduce
function calculateTotal(cart) {
  return cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

// Calculate the total price of all items in the shopping cart
const totalPrice = calculateTotal(shoppingCart);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);

// another way
// Define the shoppingCart object
const shoppingCart1 = {
  items: [
    { name: "Apple", price: 1.2, quantity: 3 },
    { name: "Banana", price: 0.5, quantity: 5 },
    { name: "Orange", price: 0.8, quantity: 2 },
  ],
};

// Function to calculate the total price of all items in the cart
function calculateTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    total += cart.items[i].price * cart.items[i].quantity;
  }
  return total;
}

// Calculate the total price of all items in the shopping cart
const totalPrice1 = calculateTotal(shoppingCart);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/
// Your code here
// *****************************************************
// Array of restaurants
const restaurants = [
  { name: "Sushi Place", cuisineType: "Japanese", rating: 4.5 },
  { name: "Pasta Palace", cuisineType: "Italian", rating: 3.8 },
  { name: "Burger Haven", cuisineType: "American", rating: 4.2 },
  { name: "Taco Town", cuisineType: "Mexican", rating: 4.7 },
  { name: "Pizza Parlor", cuisineType: "Italian", rating: 3.5 },
];

// Function to filter restaurants with a rating of 4 or higher
function getTopRatedRestaurants(restaurants) {
  return restaurants.filter((restaurant) => restaurant.rating >= 4);
}

// Get the top-rated restaurants
const topRated = getTopRatedRestaurants(restaurants);
console.log(topRated);

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/
// Your code here
// *******************************************************
// Define the bankAccount object
const bankAccount = {
  accountHolder: "John Doe",
  balance: 1000, // Initial balance
  transactions: [200, -50, -100, 150, -30], // Array of transactions (positive for deposits, negative for withdrawals)
};

// Function to calculate the total balance after all transactions
function calculateTotalBalance(account) {
  // Reduce the transactions array to calculate the new balance by adding each transaction to the initial balance
  return account.transactions.reduce(
    (total, transaction) => total + transaction,
    account.balance
  );
}

// Calculate the total balance after all transactions
const totalBalance = calculateTotalBalance(bankAccount);
console.log(`Total Balance: $${totalBalance}`);

// another way
// Define the bankAccount object
const bankAccount1 = {
    accountHolder: "John Doe",
    balance: 1000, // Initial balance
    transactions: [200, -50, -100, 150, -30], // Array of transactions (positive for deposits, negative for withdrawals)
};

// Function to calculate the total balance after all transactions using a for loop
function calculateTotalBalance(account) {
  let totalBalance = account.balance; // Start with the initial balance

  // Loop through the transactions and update the totalBalance
    for (let i = 0; i < account.transactions.length; i++) {
    totalBalance += account.transactions[i]; // Add each transaction to the balance
}

    return totalBalance;
}

// Calculate the total balance after all transactions
const totalBalance1 = calculateTotalBalance(bankAccount);
console.log(`Total Balance: $${totalBalance}`);

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/
// Your code here

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here
