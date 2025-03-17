// Select elements

let balance = 0;

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

function deposit() {
    let amount = parseFloat(document.getElementById('deposit-amount').value);
    let message = document.getElementById('message');

    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid deposit amount!", "error");
        return;
    }

    balance += amount;
    updateBalance();
    showMessage(`Deposited ${amount}€ successfully!`, "success");
    document.getElementById('deposit-amount').value = ""; // Clear input
}

function withdraw() {
    let amount = parseFloat(document.getElementById('withdraw-amount').value);
    let message = document.getElementById('message');

    if (isNaN(amount) || amount <= 0) {
        showMessage("Enter a valid withdrawal amount!", "error");
        return;
    }

    if (amount > balance) {
        showMessage("Not enough balance!", "error");
        return;
    }

    balance -= amount;
    updateBalance();
    showMessage(`Withdrawn ${amount}€ successfully!`, "success");
    document.getElementById('withdraw-amount').value = ""; // Clear input
}

function showMessage(msg, type) {
    let message = document.getElementById('message');
    message.textContent = msg;
    message.className = `message ${type}`;
    setTimeout(() => { message.textContent = ""; }, 3000);
}

updateBalance();




























const balanceEl = document.getElementById("balance");
const depositInput = document.getElementById("deposit");
const depositBtn = document.getElementById("depositBtn");
const withdrawInput = document.getElementById("withdraw");
const withdrawBtn = document.getElementById("withdrawBtn");
const messageEl = document.getElementById("message");

// // Retrieve balance from localStorage or initialize to 100
// let balance = parseFloat(localStorage.getItem("balance")) || 100;

// // Function to update the displayed balance
// function updateBalance() {
//     balanceEl.textContent = balance.toFixed(2);
//     localStorage.setItem("balance", balance); // Save balance
// }

// // Function to show a message (error or success)
// function showMessage(text, isError = false) {
//     messageEl.textContent = text;
//     messageEl.style.color = isError ? "red" : "green";
//     setTimeout(() => (messageEl.textContent = ""), 3000);
// }

// // Event listener for deposit
// depositBtn.addEventListener("click", function () {
//     const depositAmount = parseFloat(depositInput.value);

//     if (isNaN(depositAmount) || depositAmount <= 0) {
//         showMessage("Enter a valid deposit amount!", true);
//         return;
//     }

//     balance += depositAmount;
//     updateBalance();
//     showMessage(`Deposited: $${depositAmount.toFixed(2)}`);
//     depositInput.value = ""; // Clear input
// });

// // Event listener for withdrawal
// withdrawBtn.addEventListener("click", function () {
//     const withdrawAmount = parseFloat(withdrawInput.value);

//     if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
//         showMessage("Enter a valid withdrawal amount!", true);
//         return;
//     }

//     if (withdrawAmount > balance) {
//         showMessage("Insufficient balance!", true);
//         return;
//     }

//     balance -= withdrawAmount;
//     updateBalance();
//     showMessage(`Withdrawn: $${withdrawAmount.toFixed(2)}`);
//     withdrawInput.value = ""; // Clear input
// });

// // Initial balance update on page load
// updateBalance();






 // Select elements
// const balanceEl = document.getElementById("balance");
// const depositInput = document.getElementById("deposit");
// const depositBtn = document.getElementById("depositBtn");
// const withdrawInput = document.getElementById("withdraw");
// const withdrawBtn = document.getElementById("withdrawBtn");
// const messageEl = document.getElementById("message");

// // Initialize balance
// let balance = 0;

// // Function to update the displayed balance
// function updateBalance() {
//     balanceEl.textContent = balance.toFixed(2); // Ensures two decimal places
// }

// // Function to show a message (error or success)
// function showMessage(text, isError = false) {
//     messageEl.textContent = text;
//     messageEl.style.color = isError ? "red" : "green";
//     setTimeout(() => (messageEl.textContent = ""), 3000); // Clear message after 3s
// }

// // Event listener for deposit
// depositBtn.addEventListener("click", function () {
//     const depositAmount = parseFloat(depositInput.value);

//     if (isNaN(depositAmount) || depositAmount <= 0) {
//         showMessage("Enter a valid deposit amount!", true);
//         return;
//     }

//     balance += depositAmount;
//     updateBalance();
//     showMessage(`Deposited: $${depositAmount.toFixed(2)}`);
//     depositInput.value = ""; // Clear input
// });

// // Event listener for withdrawal
// withdrawBtn.addEventListener("click", function () {
//     const withdrawAmount = parseFloat(withdrawInput.value);

//     if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
//         showMessage("Enter a valid withdrawal amount!", true);
//         return;
//     }

//     if (withdrawAmount > balance) {
//         showMessage("Insufficient balance!", true);
//         return;
//     }

//     balance -= withdrawAmount;
//     updateBalance();
//     showMessage(`Withdrawn: $${withdrawAmount.toFixed(2)}`);
//     withdrawInput.value = ""; // Clear input
// });

// // Initial balance update
// updateBalance();






// // console.log('Hello world')

// // const depositBtn = document.getElementById('depositBtn');
// // const withdrawBtn = document.getElementById('withdrawBtn');
// // // const balance = document.getElementById('balance');
// // const message = document.getElementById('message');
// // const inputDeposit = document.getElementById('deposit');
// // const inputWithdraw = document.getElementById('withdraw');

// // // Initial balance
// // let balance = 100;
// // // let currentBalance = 0;

// // function updateBalance() {
// //     document.getElementById("balance").innerText = balance;
// //   }


// // // // Add event listeners
// // // depositBtn.addEventListener('click', () => {
// // //     const depositAmount = Number(inputDeposit.value);
// // //     deposit(depositAmount);
// // //     balance.innerText = currentBalance;
// // // })


// // function deposit() {
// //     let amount = parseFloat(document.getElementById("amount").value);
// //     if (amount > 0) {
// //       balance += amount;
// //       updateBalance();
// //       showMessage("Deposit successful!", "green");
// //     } else {
// //       showMessage("Enter a valid amount.", "red");
// //     }
// //     document.getElementById("amount").value = "";
// //   }


// //   function withdraw() {
// //     let amount = parseFloat(document.getElementById("amount").value);
// //     if (amount > 0 && amount <= balance) {
// //       balance -= amount;
// //       updateBalance();
// //       showMessage("Withdrawal successful!", "green");
// //     } else if (amount > balance) {
// //       showMessage("Not enough balance!", "red");
// //     } else {
// //       showMessage("Enter a valid amount.", "red");
// //     }
// //     document.getElementById("amount").value = "";
// //   }

// // // withdrawBtn.addEventListener('click', () => {
// // //     const withdrawAmount = Number(inputWithdraw.value);
// // //     withdraw(withdrawAmount);
// // //     balance.innerText = currentBalance;
// // // })

// // // // check balance function
// // // function checkBalance(){
// // //     return Number(balance.innerText);
// // // }
// // // // deposit function
// // // function deposit(depositAmount) {
// // //     if (typeof depositAmount !== 'number'){
// // //         message.innerText = 'Please enter a number';
// // //     }
// // //     else if (depositAmount < 0) {
// // //         message.innerText = 'Please enter a positive number';
// // //     }
// // //     else {
// // //         currentBalance += depositAmount;
// // //     }
// // // }
// // // // withdraw function
// // // function withdraw(withdrawAmount) {
// // //     if (typeof withdrawAmount !== 'number'){
// // //         message.innerText = 'Please enter a number';
// // //     }
// // //     else if (withdrawAmount < 0) {
// // //         message.innerText = 'Please enter a positive number';
// // //     }
// // //     else if (withdrawAmount > currentBalance){
// // //         message.innerText = 'Insufficient funds'
// // //     }
// // //     else {
// // //         currentBalance -= depositAmount;
// // //     }
// // // }








// // function showMessage(msg, color) {
// //   let message = document.getElementById("message");
// //   message.innerText = msg;
// //   message.style.color = color;
// // }
