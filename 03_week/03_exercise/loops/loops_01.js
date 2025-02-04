/* 
Write a function named logOddNumbers:
- Use a loop to output all odd, positive numbers less than 100, starting from 1.
Example output in the console: 1, 3, 5, 7, ..., 99. 
*/

// Solution 1
function logOddNumbers() {
    for (let i = 1; i < 100; i += 2) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
}

logOddNumbers();


// Solution 2: Another way to solve the problem
const logOddNumbers2 = () => {
    for (let i = 1; i < 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// for (let i = 1; i < 100; i++) we can use this: i += 1  
const logOddNumbers3 = () => {
    for (let i = 1; i < 100; i += 2) {
        console.log(i);
    }
}



function see () {
    result = ""
    for (let i = 2, j = 98; i < j; i +=2, j -=2 ){
        result = `${i},${j} `;
        console.log(result);
    }
}

see();
