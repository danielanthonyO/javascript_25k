/* Task 1 *************************************************************
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
// Your code here *******************************************************/
const weather = {
  temperature: 22, 
  humidity: 60, 
  condition: "Rainy", 
};

function checkWeather(weather) {
    if (weather.condition === "Rainy") {
    console.log("Take an umbrella!");
}
}

checkWeather(weather);
console.log("==============================================");


/* Task 2 ************************************************************
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
// Your code here *****************************************************/
const shoppingCart = {
  items: [
    { name: "Apple", price: 1.2, quantity: 3 },
    { name: "Banana", price: 0.5, quantity: 5 },
    { name: "Orange", price: 0.8, quantity: 2 },
  ],
};

function calculateTotal(cart) {
  return cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

const totalPrice = calculateTotal(shoppingCart);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);
console.log('==========================================');


// another way **************************************************
const shoppingCart1 = {
  items: [
    { name: "Apple", price: 1.2, quantity: 3 },
    { name: "Banana", price: 0.5, quantity: 5 },
    { name: "Orange", price: 0.8, quantity: 2 },
  ],
};

function calculateTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    total += cart.items[i].price * cart.items[i].quantity;
  }
  return total;
}

const totalPrice1 = calculateTotal(shoppingCart);
console.log(`Total Price: $${totalPrice.toFixed(2)}`);
console.log('==========================================');


/* Task 3 ************************************************************
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
// Your code here ******************************************************/
const restaurants = [
  { name: "Sushi Place", cuisineType: "Japanese", rating: 4.5 },
  { name: "Pasta Palace", cuisineType: "Italian", rating: 3.8 },
  { name: "Burger Haven", cuisineType: "American", rating: 4.7 },
  { name: "Pizza Parlor", cuisineType: "Italian", rating: 3.5 },
];

function getTopRatedRestaurants(restaurants) {
  return restaurants.filter((restaurant) => restaurant.rating >= 4);
}

// Get the top-rated restaurants
const topRated = getTopRatedRestaurants(restaurants);
console.log(topRated);
console.log('==========================================');



/* Task 4 *************************************************************
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
// Your code here ********************************************************/
const bankAccount = {
  accountHolder: "John Doe",
  balance: 1000, // Initial balance
  transactions: [200, -50, -100, 150, -30], // Array of transactions (positive for deposits,
};

function calculateTotalBalance(account) {
  return account.transactions.reduce(
    (total, transaction) => total + transaction,
    account.balance
  );
}

const totalBalance = calculateTotalBalance(bankAccount);
console.log(`Total Balance: $${totalBalance}`);
console.log('========================================');


// another way *******************************************
const bankAccount1 = {
    accountHolder: "John Doe",
    balance: 1000, // Initial balance
    transactions: [200, -50, -100, 150, -30], // Array of transactions (positive for deposits
};

function calculateTotalBalance(account) {
  let totalBalance = account.balance; 

    for (let i = 0; i < account.transactions.length; i++) {
    totalBalance += account.transactions[i]; // Add each transaction to the balance
}

    return totalBalance;
}

const totalBalance1 = calculateTotalBalance(bankAccount);
console.log(`Total Balance: $${totalBalance}`);
console.log('==========================================');



/* Task 5 *************************************************
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
// *********************************************************/
let students = [
  { name: "Alice", scores: [80, 80, 80], averageScore: null },
  { name: "Bob", scores: [70, 70, 70], averageScore: null },
  { name: "Charlie", scores: [90, 90, 90], averageScore: null }
];

function calculateAverage(studentsArray) {
  studentsArray.forEach(student => {
      let total = student.scores.reduce((sum, score) => sum + score, 0);
      student.averageScore = total / student.scores.length;
  });
}

calculateAverage(students);

// Display the updated students
console.log(students);
console.log('=========================================');



/* Task 6 **********************************************************
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
// ****************************************************************/
let courses = [
  { courseName: "Mathematics", instructor: "Dr. Smith", studentsEnrolled: 25 },
  { courseName: "Physics", instructor: "Dr. Johnson", studentsEnrolled: 35 },
  { courseName: "Computer Science", instructor: "Prof. Allen", studentsEnrolled: 40 },
  { courseName: "History", instructor: "Dr. Brown", studentsEnrolled: 20 }
];

function logLargeCourses(courses) {
  courses.forEach(course => {
      if (course.studentsEnrolled > 30) {
          console.log(course.courseName);
      }
  });
}

let logCourse = logLargeCourses(courses)
console.log(logCourse);
console.log('==========================================');



/* Task 7 *****************************************************
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
// **************************************************************/
const pet = {
  species: "Dog",
  name: "Brown",
  isVaccinated: false
};

function checkVaccinationStatus(pet) {
  return pet.isVaccinated ? "No vaccination required" : "Vaccination required";
}

console.log(checkVaccinationStatus(pet)); 
console.log('==========================================');



/* Task 8 *****************************************************
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
/ Your code here ********************************************/
const city = {
  name: "Lagos",
  population: 1500000,
  landmark: "Grand Tower"
};

function checkCitySize(city) {
  if (city.population > 1000000) {
      console.log("This is a big city!");
  }
}

checkCitySize(city); 
console.log('==========================================');


/* Task 9 *****************************************************
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
// Your code here ****************************************************/
const transaction = [
  {type: 'credit', amount: 2000},
  {type: 'dedit', amount: 1000},
  {type: 'credit', amount: 2000}
];

const transactions = [
  { type: "credit", amount: 500 },
  { type: "debit", amount: 200 },
  { type: "credit", amount: 300 },
  { type: "debit", amount: 100 }
];

function calculateBalance(transactions) {
  return transactions.reduce((balance, transaction) => {
      return transaction.type === "credit" 
          ? balance + transaction.amount 
          : balance - transaction.amount;
  }, 0);
}

console.log(calculateBalance(transactions)); // Output: 500


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
