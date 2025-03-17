/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/

// // Solution 1
function logEvenNumbers() {
    for (let i = 2; i < 100; i += 2) {
        console.log(i, 100 -i);
    }
}

logEvenNumbers();
console.log('=============================================');



// // Solution 2: Another way to solve the problem
const logEvenNumbers2 = () => {
    let maxNum = 100;    
    for (let i = 2; i < maxNum; i += 2) {
        if (i % 2 === 0) 
        console.log(i, 100 - i);
    }
}

logEvenNumbers2();
console.log('=============================================');


// // Solution 3: Another way to solve the problem
const logEvenNumbers3 = () => {
    let i = 2;
    while (i < 100) {
        if (i % 2 === 0) {
            console.log(i, 100 - i);
        }

        i ++;
    }
}

logEvenNumbers3();
console.log('=============================================');


/* create a function that runs a loop and console logs all numbers from 1 to 5 */
const logNumbers = () => {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

logNumbers();
console.log('=============================================');


/* create a function that runs a while loop and console logs all numbers from 1 to 5 */
const logNumbers2 = () => {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}
logNumbers2();
console.log('=============================================');