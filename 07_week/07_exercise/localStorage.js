/* Task ***************************************************
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console. */
// Your code here *****************************************
// localStorage.setItem("message", "Hello, LocalStorage!");
// const message = localStorage.getItem("message");



/* Task 2 **************************************************
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)
Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.*/
// Your code here *****************************************

const userSettings = {
    theme: "dark",  // or "light"
    language: "English"  // or "Spanish"
};

const jsonUserSettings = JSON.stringify(userSettings);
localStorage.setItem("userSettings", jsonUserSettings);

// retrieve and parse the object
const retrievedSettings = localStorage.getItem("userSettings");
const parsedSettings = JSON.parse(retrievedSettings);

console.log(parsedSettings.theme);



/* Task 3 **************************************************
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.*/
// Your code here *****************************************

// const favoriteBooks = [

//     {title: "The Alchemist", author: "Paulo Coelho"},
//     {title: "The Little Prince", author: "Antoine de Saint-Exupéry"},
//     {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
// ];

// // Storage
// localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

// // Retrieval
// const storedBooks = JSON.parse(localStorage.getItem("favoriteBooks"));

// // Log the titles of all books
// storedBooks.forEach(book => console.log(book.title));

/* Task 4 ************************************************
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.*/
// Your code here ****************************************
// function saveToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
// }

// function getFromLocalStorage(key) {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : null;
// }

// const user = { name: "Alice", age: 25, city: "New York" };

// // Save to LocalStorage
// saveToLocalStorage("userProfile", user);

// // Retrieve from LocalStorage
// const retrievedUser = getFromLocalStorage("userProfile");

// // Log the retrieved object
// console.log(retrievedUser);

/* Task 5 ************************************************
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.*/
// Your code here ****************************************
// function getFromLocalStorage(key) {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : null;
// }

// const storedValue = getFromLocalStorage("userProfile"); // Replace "userProfile" with your key
// console.log(storedValue);

/* Task 6 ************************************************
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)
Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.*/
// Your code here ****************************************
// const userProfile = {
//     username: "JohnDoe",
//     email: "johndoe@example.com",
//     preferences: {
//         theme: "light mode",
//         notifications: true
//     }
// };

// // Step 2: Save it to LocalStorage
// localStorage.setItem("userProfile", JSON.stringify(userProfile));

// // Step 3: Retrieve the object from LocalStorage
// let storedProfile = JSON.parse(localStorage.getItem("userProfile"));

// // Step 4: Update the theme property
// if (storedProfile && storedProfile.preferences) {
//     storedProfile.preferences.theme = "dark mode";
// }

// // Step 5: Save the updated object back to LocalStorage
// localStorage.setItem("userProfile", JSON.stringify(storedProfile));

// // Step 6: Log the updated object
// console.log(storedProfile);

/* Task 7 ************************************************
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.*/
// Your code here ****************************************
// const shoppingList = {
//     items: ["bread", "milk", "eggs"]
// };

// // Step 2: Save it to LocalStorage
// localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

// // Step 3: Function to add an item to the shopping list
// function addItemToList(item) {
//     // Retrieve the shoppingList from LocalStorage
//     let storedList = JSON.parse(localStorage.getItem("shoppingList"));

//     // Ensure storedList exists
//     if (!storedList) {
//         storedList = { items: [] };
//     }

//     // Add the new item to the list
//     storedList.items.push(item);

//     // Save the updated list back to LocalStorage
//     localStorage.setItem("shoppingList", JSON.stringify(storedList));

//     // Log the updated list
//     console.log(storedList);
// }

// Step 4: Test the function by adding a new item
// addItemToList("Butter"); // Adds "Butter" to the list
// addItemToList("Cheese"); // Adds "Cheese" to the list

/* Task 8 ************************************************
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.*/
// Your code here ****************************************
// const counter = {
//     count: 0
// };

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here
