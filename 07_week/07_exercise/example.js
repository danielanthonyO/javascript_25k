const classroom = [
    {name: 'Max', age: 25, grade: 4},
    {name: 'Brandy', age: 25, grade: 4},
    {name: 'Beyonce', age: 25, grade: 4}
];

const jsonClassroom = JSON.stringify(classroom); 
console.log(jsonClassroom)


/* Task 4 ***********************
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom. */
// Your code here

const arrayClassroom = JSON.parse(jsonClassroom);
console.log(arrayClassroom);

arrayClassroom.forEach(student => console.log(student.name));

// date object to create ID
const userId = Date.now();
console.log(userId)

const date = new Date;
console.log(date)

