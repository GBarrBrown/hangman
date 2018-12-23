var wordList = ["cat", "dog", "Bike", "Milk"];
var myWord = "";
var guesses = [];
var displayWord = "";

function getWord() {
  myWord = wordList[Math.floor(Math.random()*wordList.length)];
  // console.log(myWord);
}
function revealedWord() {
  displayWord = "";
  for (var i = 0; i < myWord.length; i++) {
    if (guesses.includes(myWord[i])) {
      
    }
  }
}

function setUpGame() {

}