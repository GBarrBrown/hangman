document.addEventListener('DOMContentLoaded', setUpGame)

var gameLost = false;
var livesLeft = 10;
var wordList = ["cat", "dog", "bike", "milk", "space", "rhythm", "class", "gold", "grain", "form", "minute", "rat", "chess", "lamp", "way", "button", "stew", "hour", "hospital", "wilderness", "rest"]; // make sure the wordList is all lowercase :)
var myWord = "";
var guesses = [];
var displayWord = "";
var alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessInputElement;

function setUpGame() {
  // console.log("initialise game")
  if (document.getElementById("playAgain").style.display === "block") {
    gameLost = false;
    livesLeft = 10;
    myWord = "";
    guesses = [];
    displayWord = "";
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("guessDiv").style.display = "block";
    updateHTMLGuesses();
  }

  guessInputElement = document.getElementById("guessInput");
  guessInputElement.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("check-btn").click();
    }
  });
  getWord();
  createDisplayWord();
  displayHangman();
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
    document.getElementById("message").innerHTML = "Oops, You've already guessed that letter.";
    console.log("already in guesses");
    console.log(guesses);
  }
}


function updateHTMLGuesses() {
  document.getElementById("guessedLetters").innerHTML = guesses.join(" ");
}

function checkLetter() {
  var letter = (guessInputElement.value.toLowerCase());
  // console.log(letter);
  if (alphaArr.includes(letter.toLowerCase())) {
    // console.log("that's a letter!");
    document.getElementById("message").innerHTML = "";
    alreadyGuessed(letter);
  } else {
    // console.log("Sorry letters only!");
    document.getElementById("message").innerHTML = "Sorry Letters Only";
  }
  guessInputElement.value = "";
}


function createDisplayWord() {
  displayWord = "";
  // console.log(displayWord + " Testing before");
  for (var i = 0; i < myWord.length; i++) {
    if (guesses.includes(myWord[i])) {
      displayWord += (myWord[i] + " ");
    } else {
      displayWord += "_ ";
    }
  }

  // console.log(displayWord + " Testing after");  
  document.getElementById("theWord").innerHTML = displayWord;
  if(displayWord.split(" ").join("") == myWord) {
    // console.log("split.join works");
    gameOver();
  }
}


function inWord(letter) {
  if (myWord.indexOf(letter) != -1) {
    createDisplayWord();
  } else {
    livesLeft--;
    displayHangman();
    console.log("Lives Left: " + livesLeft);
    if (livesLeft == -1) {
      gameLost = true;
      gameOver();
      console.log("(x_x)")
    }
  }
}


function gameOver() {
  document.getElementById("guessDiv").style.display = "none";
  if (gameLost) {
    document.getElementById("message").innerHTML = "Game Over! The word you were looking for was: " + myWord;
  } else {
    document.getElementById("message").innerHTML = "Congratulations! You Won :)";
  }
  document.getElementById("playAgain").style.display = "block";
}

function displayHangman() {
  switch (livesLeft) {
    case 10:
      hangmanImg = "\n\n\n\n\n\n           [‾‾‾]\n           [___]";
      break;
    case 9:
      hangmanImg = "\n\n\n\n\n\n           [‾‾‾]\n    _____  [___]";
      break;
    case 8:
      hangmanImg = "\n     |\n     |\n     |\n     |\n     |\n     |     [‾‾‾]\n    _|___  [___]";
      break;
    case 7:
      hangmanImg = "      _______\n     |\n     |\n     |\n     |\n     |\n     |     [‾‾‾]\n    _|___  [___]";
      break;
    case 6:
      hangmanImg = "      _______\n     |/\n     |\n     |\n     |\n     |\n     |     [‾‾‾]\n    _|___  [___]";
      break;
    case 5:
      hangmanImg = "      _______\n     |/\n     |\n     |       |\n     |       |\n     |\n     |     [‾‾‾]\n    _|___  [___]";
      break;
    case 4:
      hangmanImg = "      _______\n     |/\n     |\n     |      \\|\n     |       |\n     |\n     |     [‾‾‾]\n    _|___  [___]";
      break;
    case 3:
      hangmanImg = "      _______\n     |/\n     |\n     |      \\|/\n     |       |\n     |\n     |     [‾‾‾]\n    _|___  [___]";
      break;
    case 2:
      hangmanImg = "      _______\n     |/\n     |\n     |      \\|/\n     |       |\n     |      /\n     |     [‾‾‾]\n    _|___  [___]";
      break;
    case 1:
      hangmanImg = "      _______\n     |/\n     |\n     |      \\|/\n     |       |\n     |      / \\\n     |     [‾‾‾]\n    _|___  [___]";
      break;
    case 0:
      hangmanImg = "      _______\n     |/\n     |      (_)\n     |      \\|/\n     |       |\n     |      / \\\n     |     [‾‾‾]\n    _|___  [___]";
      break;
    case -1:
      hangmanImg = "      _______\n     |/      |\n     |      (_)\n     |      \\|/\n     |       |\n     |      / \\\n     |          [‾‾‾]\n    _|___       [___]"
      break;
  }
  document.getElementById("gallows").innerHTML = hangmanImg;
}

