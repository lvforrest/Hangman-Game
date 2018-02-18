alert("Are you ready to play a game?");
alert("Let's see how well you know famous basketball players!");

// variables//
var wordChoices = [ "iverson", "bryant", "jordan","james","johnson", "leslie", "swoopes", "cooper"];
var selectWord = "";
var lettersInWord = [];
var numBlanks = 0;
var wrongLetter = [];
var blanksAndSuccesses = [];
var letterGuessed= [""];
var letterInWord = false;

var winCount = [0];
var lossCount = 0;
var guessesLeft = [""];

// functions//
function startGame() {
    selectWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    lettersInWord = selectWord.split("");
    numBlanks = lettersInWord.length;


    blanksAndSuccesses = [];
    guessesLeft = 9;
    wrongLetter = [];

    for (var i = 0; i <numBlanks; i++){
    blanksAndSuccesses.push("_");
}

document.getElementById("guess").innerHTML = blanksAndSuccesses.join(" ");
document.getElementById("left").innerHTML = guessesLeft;
document.getElementById("win").innerHTML = winCount;
document.getElementById("loss").innerHTML =lossCount;

  console.log(selectWord);
  console.log(lettersInWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
    for (var i =0; i < numBlanks; i++){
        if (selectWord[i] == letter){
            letterInWord = true;
        }
    }
    if (letterInWord){
    for (var i=0; i < numBlanks; i++){
        if(selectWord[i] == letter){
            blanksAndSuccesses[i] = letter;
        }
    }
}
    else {
        wrongLetter.push(letter);
        guessesLeft--
    }
function roundComplete(){
    console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
    }
    document.getElementById("left").innerHTML =guessesLeft;
    document.getElementById("guess").innerHTML =blanksAndSuccesses.join(" ");
    document.getElementById("wrong").innerHTML =wrongLetter.join(" ");

        if(lettersInWord.toString()==blanksAndSuccesses.toString()){
            winCount++;
            alert("Winner Winner Chicken Dinner!");
        
            document.getElementById("win").innerHTML =winCount;

    
    startGame();
    }

        else if (guessesLeft==0) {
            lossCount++;
            alert("You're a loser!");

            document.getElementById("loss").innerHTML = lossCount;
        }
    }
    startGame();

    document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    
    
    console.log(letterGuessed);

}
