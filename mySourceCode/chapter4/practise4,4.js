// Step 1: Generate a random number between 0 and 5
const randomNumber = Math.floor(Math.random() * 6);

// Step 2: Prompt the user for input
const userQuestion = prompt("Ask a question:");

// Step 3: Create responses based on the random number using a switch statement
let response;
switch (randomNumber) {
    case 0:
        response = "It is certain.";
        break;
    case 1:
        response = "It is decidedly so.";
        break;
    case 2:
        response = "Reply hazy, try again.";
        break;
    case 3:
        response = "Cannot predict now.";
        break;
    case 4:
        response = "Don't count on it.";
        break;
    case 5:
        response = "My sources say no.";
        break;
    default:
        response = "Error: Invalid random number.";
}

// Step 4: Generate the end response based on the user's question and the randomly selected response
const endResponse = `You asked: ${userQuestion}\nMagic 8-Ball says: ${response}`;

// Step 5: Output the user's question and the end response
console.log(endResponse);
