/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/
// Your code here
// ******************************'
const library = [
    { title: "Mockingbird", author: "Harper Lee", yearPublished: 1960 },
    { title: "Moby Dick", author: "Herman Melville", yearPublished: 1851 },
];

// library.push({title: "Animal farm", author: "George Orwell", yearPublished: 1949});
// library.push({title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813});

// console.log(library);
console.log('==================================')


/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
// **************************************
// console.log(library[0].title);

const accessNew = library[1].yearPublished;
// console.log(accessNew);
console.log('==================================')


/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
// ***************************************
// library.genre = 'Drama';
// console.log(library);

// library['isAvailable'] = true;
// console.log(library);
console.log('==================================')


/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/
// Your code here
// *****************************
function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}
const house = [];
const newBook = new Book("Mockingbird", "Harper Lee", 1960, "Drama");
console.log("             ");
// console.log(newBook);
console.log('==================================')


/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/
// Your code here
// ************************************
function createBook(title, author, yearPublished, [genres]) {
    return [
    {
        title: title,
        author: author,
        yearPublished: yearPublished,
        // genres: genres
        genres: Array.isArray(genres) ? genres : [genres]
    },
];
}
const createdBook1 = createBook('hdhd', 'hhhd', 'hdhd', [12, 5]);
const createdBook2 = createBook('hd', 'hh', 'hd', '10');
// Put them inside the Library array and log that.
// const library1 =[];
library.push({ ...createdBook1 });

console.log(createdBook1);
console.log("Full Library: ", library);
console.log('==================================')


/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/
// Your code here
// ************************************
const newLibrary = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
    { title: "1984", author: "George Orwell", yearPublished: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 }
];

// Convert the library array to a JSON string
const jsonString = JSON.stringify(newLibrary);
console.log("JSON String:", jsonString);

// Parse the JSON string back into a JavaScript object
const parsedLibrary = JSON.parse(jsonString);
console.log("First Book Title:", parsedLibrary);

// Log the first book's title
console.log("First Book Title:", parsedLibrary[0].title);
console.log('==================================')


/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/
// Your code here
// ***********************************************
const students = [
    { name: "Alice", age: 17, grade: 95 },
    { name: "Bob", age: 18, grade: 88 },
    { name: "Charlie", age: 16, grade: 92 },
    { name: "David", age: 17, grade: 85 },
    { name: "Emma", age: 18, grade: 98 } ];

// Filter and log students with a grade higher than 90
console.log(`Students with grades higher than 90 are: `);
students.forEach(student => {
    if (student.grade > 90) {
        console.log(student.name);
    }
});
console.log('==================================')

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/
// Your code here 
// ******************************************************
const car = [
    {brand: 'Tesla', model: 'Model S', year: '2003', isElectric: 'true'},
    {brand: 'Volvo', model: 'Model', year: '2010', isElectric: 'false'}
];

// Function to check if the car is electric
function checkCarType(car) {
    if (car.isElectric) {
        console.log("This car is eco-friendly!");
    } else {
        console.log("This car runs on fuel.");
    }
}

// Call the function
checkCarType(car);
console.log('==================================')


/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/
// Your code here
// ************************************************
const movies = [
    { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
    { title: "Interstellar", director: "Christopher Nolan", rating: 7.6 },
    { title: "Avatar", director: "James Cameron", rating: 7 },
    { title: "Titanic", director: "James Cameron", rating: 9.9 },
];

// Loop through the array and log movies with a rating higher than 8
console.log("Movies with a rating higher than 8:");
movies.forEach(movie => {
    if (movie.rating > 8) {
        console.log(movie.title);
    }
});
console.log('==================================')


/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/
// Your code here
// *********************************************
// Function to find the oldest car
function findOldestCar(cars) {
    if (cars.length === 0) return null; // Handle empty array case

    return cars.reduce((oldest, current) => 
        current.year < oldest.year ? current : oldest
    );
}

// Sample array of car objects
const cars = [
    { brand: "Toyota", model: "Corolla", year: 2005, isElectric: false },
    { brand: "Honda", model: "Civic", year: 1998, isElectric: false },
    { brand: "Tesla", model: "Model S", year: 2019, isElectric: true },
    { brand: "Ford", model: "Mustang", year: 1967, isElectric: false }
];

// Find and log the oldest car
const oldestCar = findOldestCar(cars);
console.log("Oldest Car:", oldestCar);
console.log('==================================')


/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/
// Your code here
// *************************************************
// Array of user objects
const userProfiles = [
    { username: "johnDoe", email: "john@example.com", isAdmin: false },
    { username: "adminUser", email: "admin@example.com", isAdmin: true },
    { username: "janeSmith", email: "jane@example.com", isAdmin: false },
    { username: "superAdmin", email: "superadmin@example.com", isAdmin: true }
];

// Function to filter admin users
function getAdminUsers(users) {
    return users.filter(user => user.isAdmin);
}

// Get the list of admin users
const adminUsers = getAdminUsers(userProfiles);

// Log the admin users
console.log("Admin Users:", adminUsers);
console.log('==================================')


/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/
// Your code here
// ********************************************
// Define the orders array
const orders = [
    { orderId: 1, customerName: "Alice", totalAmount: 250.5, status: "completed" },
    { orderId: 2, customerName: "Bob", totalAmount: 150.0, status: "pending" },
    { orderId: 3, customerName: "Charlie", totalAmount: 320.75, status: "completed" },
    { orderId: 4, customerName: "David", totalAmount: 99.99, status: "pending" },
    { orderId: 5, customerName: "Eve", totalAmount: 500.0, status: "completed" }
];

// Function to get only completed orders
function getCompletedOrders(orders) {
    return orders.filter(order => order.status === "completed");
}

// Get and log the completed orders
const completedOrders = getCompletedOrders(orders);
console.log("Completed Orders:", completedOrders);
console.log('==================================')


/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/
// Your code here
// *********************************************************
// Define the smartphone object
const smartphone = {
    brand: "Samsung",
    model: "Galaxy S21",
    batteryLife: "24 hours",
    is5GEnabled: true
};

// Function to check 5G support
function check5GSupport(phone) {
    if (phone.is5GEnabled) {
        console.log("This phone supports 5G!");
    } else {
        console.log("This phone does not support 5G.");
    }
}

// Test the function with the smartphone object
check5GSupport(smartphone);
console.log('==================================')

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/
// Your code here
// **************************************************
// Define the fox object
const fox = {
    name: "Rusty",
    age: 2, // Change this value to test different cases
    habitat: "Forest"
};

// Function to check fox's age category
function checkFoxAge(fox) {
    if (fox.age < 3) {
        console.log("This fox is young.");
    } else {
        console.log("This fox is an adult.");
    }
}

// Test the function with the fox object
checkFoxAge(fox);
console.log('==================================')


// another way
// Define an array of fox objects
const foxes = [
    { name: "Rusty", age: 2, habitat: "Forest" },
    { name: "Blaze", age: 4, habitat: "Mountains" },
    { name: "Shadow", age: 1, habitat: "Desert" }
];

// Function to get only young foxes (under 3 years old)
const youngFoxes = foxes.filter(fox => fox.age < 3);

console.log("Young Foxes:", youngFoxes);
console.log('==================================')


// another way
// Function to categorize foxes as young or adult
const categorizedFoxes = foxes.reduce(
    (acc, fox) => {
        if (fox.age < 3) {
            acc.young.push(fox);
        } else {
            acc.adult.push(fox);
        }
        return acc;
    },
    { young: [], adult: [] }
);

console.log("Young Foxes:", categorizedFoxes.young);
console.log("Adult Foxes:", categorizedFoxes.adult);
console.log('==================================')


/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/
// Your code here
// ************************************************
// Define an array of employees
// const employees = [
//     { name: "John", position: "Manager", salary: 60000 },
//     { name: "Sarah", position: "Developer", salary: 50000 },
//     { name: "Mike", position: "Designer", salary: 45000 },
//     { name: "Anna", position: "Developer", salary: 55000 },
// ];

// // Function to calculate the total salary of all employees
// function calculateTotalSalary(employees) {
//     return employees.reduce((total, employee) => total + employee.salary, 0);
// }

// // Calculate and log the total salary
// const totalSalary = calculateTotalSalary(employees);
// console.log("Total Salary of All Employees:", totalSalary);


// another way
// Define an array of employees
const employees = [
    { name: "John", position: "Manager", salary: 60000 },
    { name: "Sarah", position: "Developer", salary: 50000 },
    { name: "Mike", position: "Designer", salary: 45000 },
    { name: "Anna", position: "Developer", salary: 55000 },
];

// Function to calculate the total salary of all employees using forEach
function calculateTotalSalary(employees) {
    let totalSalary = 0;
    employees.forEach(employee => {
        totalSalary += employee.salary;
    });
    return totalSalary;
}

// Calculate and log the total salary
const totalSalary = calculateTotalSalary(employees);
console.log("Total Salary of All Employees:", totalSalary);

