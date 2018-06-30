var letters = ["r","h","o","u","g","v","d","x","p","l","w","x","g","r","w","q","s","y","p","g","s","v","d","x","p","l","w","x","g","r","w","q","s","y","p","g","s","v","d","x","p","l","w","x","g","r","w","q","s","y","p","g","s"]

var wins = 0;
var losses = 0;
var guesses = 10;
var yourGuesses = [];

//function updateGuesses() {
    //document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guesses;
//}
//function updateWins() {
    //document.querySelector("#win").innerHTML = "Wins: " + wins; 
//}
//function updateLosses() {
    //document.querySelector("#lose").innerHTML = //"Losses: " + losses; 
//}

//document.onkeyup = function(event) {
    //var userGuess = event.key;
//}

document.onkeyup = function(event) {
    var myGuess = event.key;
    var computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)-1];

if (myGuess !== computerChoice) {
    //losses++;
    guesses--;
    yourGuesses.append(myGuess);
}

if (myGuess === computerChoice) {
    wins++;
    guesses = 10;
    losses = 0;
}

if (guesses === 0) [
    guesses = 10;
    losses++;
    yourGuesses = this.clear;
]

document.queryselector("#win").append = this.wins
document.queryselector("#lose").append = this.wins
document.queryselector("#guessesLeft").append = this.wins
}