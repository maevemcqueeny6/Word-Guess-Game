

//Creates variables that hold references to the places in the HTML where we want to display things. 
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-left-text");
// var guesslogText = document.getElementById("guesses-log-text")


// Creates an array that lists out all the options
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creates variables that hold the number of wins and losses. they start at 0
var wins = 0;
var losses = 0;
var counter = 0;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);


//This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    //Determines which key was pressed
    var userGuess = event.key;
    console.log(userGuess);
    $("#guesses-log-text").append(userGuess);

    //Reworked our code from last step to use "else if" instead of lots of if statements. This logic determines the outcome of the game, and incremenets the approriate number
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
        if (userGuess === computerGuess) {
            wins++;
            alert("you win! the answer is " + computerGuess);
            counter = 0;
            // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
        else {
            counter++;
            if (counter > 5) {
                losses++;
                alert("you lose! the answer is " + computerGuess);
                counter = 0;
            }
        }
    }




    //Display the user and computer guesses, and wins/losses

    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "guesses (out of 5): " + counter;
    computerChoiceText.textContent = "computer choice " + computerGuess;
    // guessesText.textContent = "guessed already ";
        // guessesthus.textContent.prepend = "Guesses so far " + guessthus;
}
