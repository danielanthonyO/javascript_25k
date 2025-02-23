// 05. Arrays - Exercises

// *******************************************************************************
// 1. Loop through the `teamMembers` array and log each name to the console. 
// ********************************************************************************
// solution to question 1
let teamMembers;
teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
// for(teamMember of teamMembers){
//     console.log(teamMember);
// }

// solution to question 2
// for (let i = 0; i < teamMembers.length; i++){
    // console.log(teamMembers[i]);
// }

// solution to question 3
// teamMembers.forEach(function(teamMember){
//     console.log(teamMember);
// });


// ****************************************************************************
// 2. Remove the first member of the array.
// ****************************************************************************
// solution to question 2
// console.log(teamMembers);
// let newTeamMember = teamMembers.shift();
// console.log(teamMembers);
// console.log(newTeamMember); // removed member


// ****************************************************************************
// 3. Remove the last member of the array.
// ****************************************************************************
// solution to question 3
// console.log(teamMembers);
// teamMembers.pop();
// console.log(teamMembers);


// ****************************************************************************
// 4. Add a new member "Alex" to the front of the array.
// ****************************************************************************
// solution to question 4
// console.log(teamMembers);
// teamMembers.unshift('Alex');
// console.log(teamMembers); // new length of the array


// ****************************************************************************
// 5. Append a new member "Linda" to the end of the array.
// ****************************************************************************
// solution to question 5
// console.log(teamMembers);
// teamMembers.push('Linda');
// console.log(teamMembers); // new length of the array


// ****************************************************************************
// 6. Create a new array that excludes the first two members, keeping the original array unchanged. // solution to question 6
// ****************************************************************************
// console.log(teamMembers);
// let newTeamMembers = teamMembers.slice(2);
// console.log(newTeamMembers);


// ****************************************************************************
// 7. Find the index of "Mike" in the array.
// ****************************************************************************
// solution to question 7
// console.log(teamMembers);
// let indexOfMike = teamMembers.indexOf('Mike');
// console.log(indexOfMike);


// ****************************************************************************
// 8. Try to find the index of "Jake" (who is not in the array).
// ****************************************************************************
// solution to question 8 
// console.log(teamMembers);
// let indexOfJake = teamMembers.indexOf('Jake');
// console.log(indexOfJake);


// ****************************************************************************
// 9. Replace "Mike" with "Carol" and "Bruce" in the same position.
// ****************************************************************************
// solution to question 9
// console.log(teamMembers);
// let indexOfMike = teamMembers.indexOf('Mike');
// teamMembers.splice(indexOfMike, 1, 'Carol', 'Bruce');
// console.log(teamMembers);

// other solution to question 9
// console.log(teamMembers);
// let mikeIndex = teamMembers.indexOf("Mike");
//     if (mikeIndex !== -1) {
//         teamMembers.splice(mikeIndex, 1, "Carol", "Bruce");
//         console.log(teamMembers);
// }

// ****************************************************************************
// 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.     
// ****************************************************************************
// solution to question 10
// console.log(teamMembers);
// let newTeamMembers = teamMembers.concat('Bob');
// console.log(newTeamMembers);


// ****************************************************************************
// 11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.
// ****************************************************************************
// solution to question 11
// console.log(teamMembers);
// let newTeamMembers = teamMembers.slice();
// console.log(newTeamMembers);


// ****************************************************************************
// 12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.
// ****************************************************************************
// solution to question 12
// let newMembers = ['Tina', 'Dean'];
// console.log(newMembers);
// console.log(teamMembers);
// let mergedArray = teamMembers.concat(newMembers);
// console.log(mergedArray);


// ****************************************************************************
// 13. Find all occurrences of "John" in the array and store their positions in a new array.
// ****************************************************************************
// solution to question 13
// let samples = ['John', 'Emily', 'John', 'Mike', 'Sarah', 'John'];
// console.log(samples);
// let johnIndexes = samples.reduce((acc, member, index) => {
//     if (member === "John") acc.push(index);
//     return acc;
// }, []);

// console.log(johnIndexes);

// another solution to question 13
// let IndexOfJohn = [];
// teamMembers.forEach((member, index) => {
//     if (member === "John") {
//         IndexOfJohn.push(index);
//     }
// });
// console.log(IndexOfJohn);

// another solution to question 13
// let teamMembers2 = ["John", "Mike", "Sarah", "John", "Emma", "John"];
// let johnIndexes = teamMembers2.map((member, index) => member === "John" && index).filter(Boolean);

// console.log(johnIndexes);

// another solution to question 13
// let Indexes = teamMembers
//     .map((member, index) => member === "John" ? index : -1)
//     .filter(index => index !== -1);
// console.log("Indexes of John:", Indexes);

// ****************************************************************************
// 14. Transform all names in the array to be uppercase while keeping the original array unchanged.
// ****************************************************************************
// solution to question 14
// console.log(teamMembers);
// let upperCaseTeamMembers = teamMembers.map(member => member.toUpperCase());
// console.log(upperCaseTeamMembers);

// another solution to question 14
// console.log(teamMembers);
// let upperCaseArray = teamMembers.reduce((acc, member) => {
//     acc.push(member.toUpperCase());
//     return acc;
// }, []);

// console.log(upperCaseArray);

// ****************************************************************************
// 15. Sort `teamMembers` in alphabetical order.
// ****************************************************************************
// solution to question 15
// console.log(teamMembers);
// teamMembers.sort();
// console.log(teamMembers);

let sortedArray = [...teamMembers].sort();
console.log(sortedArray);

// ****************************************************************************
// 16. Reverse the `teamMembers` array.
// ****************************************************************************
// solution to question 16
// console.log(teamMembers);
// teamMembers.reverse();
// console.log(teamMembers);

let reversedArray = [...teamMembers].reverse();
console.log(reversedArray);


// ****************************************************************************
// 17. Check if at least one member in the array is named "John".
// ****************************************************************************
// solution to question 17
console.log(teamMembers);
let isJohn = teamMembers.some(member => member === "John");
console.log(isJohn);

// ****************************************************************************
// 18. Check if all names in the array have more than three letters.
// ****************************************************************************
// solution to question 18
console.log(teamMembers);
let isAllThreeLetters = teamMembers.every(member => member.length > 3);
console.log(isAllThreeLetters);


// ****************************************************************************
/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/