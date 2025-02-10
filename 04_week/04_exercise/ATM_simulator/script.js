console.log('Hello world')

const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const balance = document.getElementById('balance');
const message = document.getElementById('message');
const inputDeposit = document.getElementById('deposit');
const inputWithdraw = document.getElementById('withdraw');

let currentBalance = 0;
// call back function

// Add event listeners
depositBtn.addEventListener('click', () => {
    const depositAmount = Number(inputDeposit.value);
    deposit(depositAmount);
    balance.innerText = currentBalance;
})

withdrawBtn.addEventListener('click', () => {
    const withdrawAmount = Number(inputWithdraw.value);
    withdraw(withdrawAmount);
    balance.innerText = currentBalance;
})

// check balance function
function checkBalance(){
    return Number(balance.innerText);
}
// deposit function
function deposit(depositAmount) {
    if (typeof depositAmount !== 'number'){
        message.innerText = 'Please enter a number';
    }
    else if (depositAmount < 0) {
        message.innerText = 'Please enter a positive number';
    }
    else {
        currentBalance += depositAmount;
    }
}
// withdraw function
function withdraw(withdrawAmount) {
    if (typeof withdrawAmount !== 'number'){
        message.innerText = 'Please enter a number';
    }
    else if (withdrawAmount < 0) {
        message.innerText = 'Please enter a positive number';
    }
    else if (withdrawAmount > currentBalance){
        message.innerText = 'Insufficient funds'
    }
    else {
        currentBalance -= depositAmount;
    }
}





// Old method
// depositBtn.addEventListener('click', () => {
//     const depositAmount = Number(inputDeposit.value);
//     // console.log(depositAmount);
//     currentBalance += depositAmount;
//     //console.log(currentBalance)
//     balance.innerText = currentBalance;
// })

// withdrawBtn.addEventListener('click', () => {
//     const withdrawAmount = Number(inputWithdraw.value);
//     currentBalance -= withdrawAmount;
//     balance.innerText = currentBalance;
// })

