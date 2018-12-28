document.addEventListener('DOMContentLoaded', setUpGame)

var gameLost = false;
var lives = 3;
var wordList = ["cat", "dog", "bike", "milk"]; // make sure the wordList is all lowercase :)
var myWord = "";
var guesses = [];
var displayWord = "";
var alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessInputElement;


function setUpGame() {
  // console.log("initialise game")
  guessInputElement = document.getElementById("guessInput");
  guessInputElement.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("check-btn").click();
    }
  });
  getWord();
  createDisplayWord();
}

function getWord() {
  myWord = wordList[Math.floor(Math.random()*wordList.length)];
  // console.log(myWord);
}


function alreadyGuessed(letter) {
  if (!guesses.includes(letter)) {
    console.log("not already guessed, added to guessed letters and checking if in word");
    guesses.push(letter);
    updateHTMLGuesses();
    // console.log(guesses);
    inWord(letter);
  } else {
    console.log("already in guesses");
    console.log(guesses);
  }
}


function updateHTMLGuesses() {
  document.getElementById("guessedLetters").innerHTML = guesses.join(" ");
}

function checkLetter() {
  var letter = (document.getElementById("guessInput").value.toLowerCase());
  // console.log(letter);
  if (alphaArr.includes(letter.toLowerCase())) {
    // console.log("that's a letter!");
    alreadyGuessed(letter);
  } else {
    // console.log("Sorry letters only!");
    document.getElementById("message").innerHTML = "Sorry Letters Only";
  }
  document.getElementById("guessInput").value = "";
}


function createDisplayWord() {
  displayWord = "";
  console.log(displayWord + " Testing before");
  for (var i = 0; i < myWord.length; i++) {
    if (guesses.includes(myWord[i])) {
      displayWord += (myWord[i] + " ");
    } else {
      displayWord += "_ ";
    }
  }

  console.log(displayWord + " Testing after");  
  document.getElementById("theWord").innerHTML = displayWord;
}


function inWord(letter) {
  if (myWord.indexOf(letter) != -1) {
    createDisplayWord();
  } else {
    lives--;

    console.log("Lives: " + lives);
    if (lives == 0) {
      gameLost = true;
      console.log("(x_x)")
    }
  }
}


function displayHangman() {
  // if () {}
}

