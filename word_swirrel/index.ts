const WIDTH = 500;
const HEIGHT = 300;

// Enter the word to guess here.
//                   vvv
//                   vvv
const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");

  let wordToScramble = wordToGuess;
  let scrambledWord = "";
  while(wordToScramble.length > 0) {
    let letterIndex = Math.floor(random(wordToScramble.length));
    scrambledWord += wordToScramble[letterIndex];
    wordToScramble = wordToScramble.substring(0, letterIndex)
    + wordToScramble.substring(letterIndex + 1);
  }

textAlign(CENTER,CENTER);
fill("white");
textSize(75);
text(scrambledWord, WIDTH/2, HEIGHT/2);
  // <<< Add your code here
}

// This method will be called automatically when the user clicks "Guess".
// The guessed text will be in "textInput".
function guess(textInput: string) {

if(textInput === wordToGuess)
{  background("green");
  textSize(75);
  text("Correct!", WIDTH/2, HEIGHT/2);}
  else{
    background("red");
    textSize(50);
    text(`Wrong!\nIt was ${wordToGuess}`, WIDTH/2, HEIGHT/2);
  }

  // <<< Add your code here
}
