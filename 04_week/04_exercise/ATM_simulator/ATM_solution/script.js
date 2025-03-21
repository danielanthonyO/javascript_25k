// Solution here

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
        showMessage("Enter a valid amount!", "error");
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




//  login
let correctPIN = "1234"; 
function login() {
    let enteredPIN = document.getElementById("pin-input").value;
    let loginMessage = document.getElementById("login-message");

    if (enteredPIN === correctPIN) {
        loginMessage.textContent = "Login successful!";
        loginMessage.className = "message success";
        setTimeout(() => {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("atm-container").style.display = "block";
        }, 1000);
    } else {
        loginMessage.textContent = "Incorrect PIN. Try again.";
        loginMessage.className = "message error";
    }
}





















