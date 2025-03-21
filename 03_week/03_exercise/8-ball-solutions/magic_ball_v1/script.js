function magic8Ball() {
    // Ask or prompt the user for a "Yes or No" question
    const question = prompt("Ask the Magic 8-Ball a Yes or No question:");

    // Log the question to the console
    console.log(`Question: ${question}`);

    // Generate a random number between 1 and 8
    const randomNumber = Math.floor(Math.random() * 8) + 1;

    // Use a switch statement to determine the answer
    let answer;
    switch (randomNumber) {
      case 1:
        answer = "Yes, definitely!";
        break;
      case 2:
        answer = "It is certain.";
        break;
      case 3:
        answer = "Reply hazy, try again.";
        break;
      case 4:
        answer = "Ask again later.";
        break;
      case 5:
        answer = "Better not tell you now.";
        break;
      case 6:
        answer = "My sources say no.";
        break;
      case 7:
        answer = "Outlook not so good.";
        break;
      case 8:
        answer = "Signs point to yes.";
        break;
      default:
        answer = "Error: Unable to generate an answer.";
    }

    // Log the answer to the console and display it in an alert
    console.log(`Answer: ${answer}`);
    alert(`Magic 8-Ball says: ${answer}`);
  }