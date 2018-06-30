var letters = ["r","h","o","u","g","v","d","x","p","l","w","x","g","r","w","q","s","y","p","g","s","v","d","x","p","l","w","x","g","r","w","q","s","y","p","g","s","v","d","x","p","l","w","x","g","r","w","q","s","y","p","g","s"]

var wins = 0;
var losses = 0;
var guesses = 10;
var myGuess = "";
var computerChoice = letters[Math.floor(Math.random() * letters.length)];

function updateGuesses() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guesses;
}
function updateWins() {
    document.querySelector("#win").innerHTML = "Wins: " + wins; 
}
function updateLosses() {
    document.querySelector("#lose").innerHTML = "Losses: " + losses; 
}

document.onkeyup = function(event) {
    var newGuess = event.key;
    
    if (myGuess !== computerChoice) {
        //losses++;
        guesses--;
        document.querySelector("#guessesLeft").innerHTML = "Quesses Left: " + guesses;
        myGuess = myGuess + newGuess;
        document.querySelector("#guessList").innerHTML = "What you have guessed: " + myGuess;
    }
    
    if (myGuess === computerChoice) {
        wins++;
        guesses = 10;
        losses = 0;
    }
    
    if (guesses === 0) {
        guesses = 10;
        document.querySelector("#guessesLeft").innerHTML = "Quesses Left: " + guesses;
        losses++;
        yourGuesses = this.clear;
    }
    }

//document.onkeyup = function(event) {
    //var myGuess = event.key;
    //var computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)-1];

// document.queryselector("#win").append = this.wins
// document.queryselector("#lose").append = this.wins
// document.queryselector("#guessesLeft").append = this.wins
// }