/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

function sumAndAverage() {
    let sum = 0;
    let average = 0;
    let smallest = Infinity;
    let largest = -Infinity;
    for (let i = 0; i < 10; i++) {
        let number = parseInt(prompt('Enter a number: '));
        console.log(`Number: ${number}`);
        sum += number;
        if (number < smallest) {
            smallest = number;
        }
        if (number > largest) {
            largest = number;
        }
    }
    average = sum / 10;
    console.log(`Sum: ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Smallest: ${smallest}`);
    console.log(`Largest: ${largest}`);
}

sumAndAverage();