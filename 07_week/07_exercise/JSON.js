/* Task 1 **************************************************
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console. */
// Your code here *******************************************

const student = {
  name: "Roy",
  age: 40,
  grade: 89,
};

const jsonStudent = JSON.stringify(student); // Convert object to JSON
console.log(jsonStudent);

/* Task 2 ********************************************************
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object. */
// Your code here ***********************************************

const arrayStudent = JSON.parse(jsonStudent); // Parse back to Js object
console.log(arrayStudent);
console.log(arrayStudent.name);


/* Task 3 ************************************************************
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console. */
// Your code here *****************************************************

const classroom = [
  { name: "Max", age: 25, grade: 4 },
  { name: "Brandy", age: 25, grade: 4 },
  { name: "Beyonce", age: 25, grade: 4 },
];
// Convert object to JSON
const jsonClassroom = JSON.stringify(classroom);
console.log(jsonClassroom);


/* Task 4 ******************************************************
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom. */
// Your code here ***********************************************

const arrayClassroom = JSON.parse(jsonClassroom);
console.log(arrayClassroom);

arrayClassroom.forEach((student) => console.log(student.name));
console.log("**********************");


/* Task 5 *****************************************************
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")
Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.*/
// Your code here **********************************************

const weatherReport = {
  temperature: 24,
  humidity: 5,
  conditions: "Sunny",
};
// Convert object to JSON
const weatherJSON = JSON.stringify(weatherReport);
console.log(weatherReport);

const weatherObject = JSON.parse(weatherJSON);
console.log(weatherObject);
console.log(weatherObject.conditions);


/* Task 6 **********************************************************
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`
Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8. */
// Your code here *************************************************

const movies = [
  { title: "Planting", director: "Chris", rating: 8.8 },
  { title: "Abbatoir", director: "Bamiloye", rating: 9.6 },
  { title: "Mid night", director: "Johnson", rating: 6.0 },
  { title: "Avatar", director: "Cameron", rating: 7.8 },
];

// Convert to JSON string
const jsonMovies = JSON.stringify(movies);
console.log(jsonMovies);
// Parse back to JavaScript object
const parsedMovies = JSON.parse(jsonMovies);

// Log titles of movies with a rating higher than 8
parsedMovies.forEach((movie) => {
if (movie.rating > 8) {
    console.log(movie.title);
}
});


/* Task 7 ********************************************************
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8. */
// Your code here *************************************************

function filterHighRatedMovies(jsonMovies) {
  const movies = JSON.parse(jsonMovies); // convert to array

  // Filter movies with rating > 8
    return movies.filter((movie) => movie.rating > 8);
}

const highRatedMovies = filterHighRatedMovies(jsonMovies);
console.log(highRatedMovies);


/* Task 8 *************************************************
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console. */
// Your code here *******************************************

const shoppingCart = {
items: [
    { name: "Keyboard", price: 300 },
    { name: "Headphones", price: 200 },
    { name: "Mouse", price: 150 },
],
};

// Convert object to JSON string
const shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);



/* Task 9 *******************************************************
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart. */
// Your code here ***********************************************

const jsonString = `[{"name":"Laptop","price":1000,"quantity":2},{"name":"Mouse","price":1000,"quantity":1},{"name":"Keyboard","price":1000,"quantity":1}]`;

function totalCartValue(jsonString) {
    const cart = JSON.parse(jsonString); // Convert JSON string to object
    let total = 0;
    for (let item of cart) {
      total += item.price * item.quantity;
    }
    return total;
}

  console.log(totalCartValue(jsonString)); // Output: 2130



console.log('**************************************')
/* Task 10 **********************************************************
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`
Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.*/
// Your code here *******************************************************

const gameProgress = {
    level: 3,
    score: 1500,
    livesRemaining: 2,
};

// Convert object to JSON
const gameProgressJSON = JSON.stringify(gameProgress);
console.log("JSON String:", gameProgressJSON);

// Parse to JSON
const parsedGameProgress = JSON.parse(gameProgressJSON);

// Update the score property
parsedGameProgress.score += 100;

// Log the updated object
console.log("Updated Object:", parsedGameProgress);
