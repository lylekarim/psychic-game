// Creates an array that lists out the alphabet.

var alphabet = "abcdefghijklmnopqrstuvwxyz"
var computerChoices = alphabet.split(''); // returns ["a", "b", "c" etc]
var listUserChoices = [];

// Creating variables to hold the number of wins, losses, and guesses remaining. 

var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Randomly chooses a choice from the options array. This is the Computer's guess. This version that returns its result:
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess + " = global");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed, converts to lower
    var userGuess = event.key.toLowerCase();

    //add key to list of user choices array
    listUserChoices.push(userGuess);


    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number


    if ((userGuess != computerGuess) && (guessesLeft > 1)) {
        guessesLeft--;
    }
    else if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
        listUserChoices = [];
        document.getElementById('game').innerHTML = "you win! Now the game is starting over.";
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess + " = local");
    }

    else if ((userGuess != computerGuess) && (guessesLeft === 1)) {
        guessesLeft = 10;
        listUserChoices = [];
        losses++;
        document.getElementById('game').innerHTML = "You lose! Now the game is starting over.";
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess + " = local");

    }

    // Set the inner HTML contents of the appropriate divs to variables

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guessesLeft;
    document.getElementById('listUserChoices').innerHTML = listUserChoices;

}






