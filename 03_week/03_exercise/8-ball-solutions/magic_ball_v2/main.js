"use strict";


alert("Would you like to play a game?");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const btnSendQuestion = document.querySelector("#btn__send-message");

const formEl = document.getElementById("form__send-question");

const questionInput = document.querySelector("#question-input");

function startGame() {
    btnNo.disabled = true;
    formEl.classList.remove("hidden");
}

function sendMessage() {
    if (!questionInput.value) {
        console.log("Empty Filled");
        return;
    }

    console.log(questionInput.value);

    const randomNumber = Math.floor(Math.random() * 8 + 1);

    switch (randomNumber) {
        case 1:
            return "Yes, definitely!";
        case 2:
            return "It is certain.";
        case 3:
            return "Reply hazy, try again.";
        case 4:
            return "Ask again later.";
        case 5:
            return "Better not tell you now.";
        case 6:
            return "My sources say no.";
        case 7:
            return "Outlook not so good.";
        case 8:
            return "Signs point to yes.";

        default:
            return "Error Message";
    }
}

btnYes.addEventListener("click", startGame);

btnSendQuestion.addEventListener("click", function (e) {
    e.preventDefault();

    const resMessage = sendMessage();
    const markup = `<p class="response">${resMessage}</p>`; // Corrected template literal
    alert(`Magic 8-Ball says: ${resMessage}`);

    formEl.insertAdjacentHTML("beforeend", markup);
});
