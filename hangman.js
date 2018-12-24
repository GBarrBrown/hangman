var wordList = ["cat", "dog", "Bike", "Milk"];
var myWord = "";
var guesses = [];
var displayWord = "";

function getWord() {
  myWord = wordList[Math.floor(Math.random()*wordList.length)];
  // console.log(myWord);
}

function validateLetter(target) {
  var textInput = target.value;
  var replacedInput = textInput.replace(/[A-Za-z]/g, "");
  if (textInput != replacedInput) {
    alert("You can only enter letters!");

  }
  target.value = replacedInput;
}

function revealedWord() {
  displayWord = "";
  for (var i = 0; i < myWord.length; i++) {
    if (guesses.includes(myWord[i])) {
      displayWord += word[i];
    } else {

    }
  }
}

function setUpGame() {

}