/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const calculateAverageSpeed = () => {
    let distance;
    let time;
    let speed;
    while (distance !== 0) {
        distance = parseInt(prompt("Enter weight in kilograms:"));
        if (distance === 0) {
            break;
        }
        time = parseInt(prompt('Enter the time in hours: '));
        speed = distance / time;
        console.log(`Average speed: ${speed} km/h`);

    }}
;

calculateAverageSpeed();
console.log('=============================================');


// Solution 2: Another way to solve the problem
const calculateAverageSpeed1 = () => {
    let distance;
    let time;
    let speed;
    while (distance !== 0) {
        distance = Number(window.prompt("Enter distance in kilograms:"));
        if (distance === 0) {
            break;
        }
        time = Number(prompt('Enter the time in hours: '));
        speed = distance / time;
        console.log(`Average speed: ${speed} km/h`);

    }}
;

calculateAverageSpeed1();
console.log('=============================================');