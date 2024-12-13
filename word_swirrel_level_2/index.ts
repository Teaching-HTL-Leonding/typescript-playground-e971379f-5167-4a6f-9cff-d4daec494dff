const WIDTH = 500;
const HEIGHT = 300;
const MARGIN = 50;

const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");
  textAlign(CENTER, CENTER);
  colorMode(HSB);
  angleMode(DEGREES);

  let wordtoscramble = wordToGuess;
  let scrambledWord = "";
  while(wordtoscramble.length > 0) {
    resetMatrix();
    let letterIndex = Math.floor(random(wordtoscramble.length));
    translate(random(100,WIDTH-100), random(30, HEIGHT-100));
    rotate(random(0, 360));
    textSize(random(30, 100));
    fill(random(0, 360),random(0,100), 100);
    text(wordtoscramble[letterIndex], 0, 0);
    
    scrambledWord += wordtoscramble[letterIndex];
    wordtoscramble = wordtoscramble.substring(0, letterIndex)
    + wordtoscramble.substring(letterIndex + 1);

  }

  // <<< Add your code here
}

function guess(textInput: string) {
  fill("white");

  if (textInput === wordToGuess) {
    background("green");
    textSize(75);
    text("Correct!", WIDTH / 2, HEIGHT / 2);
  } else {
    background("red");
    textSize(50);
    text(`Wrong!\nIt was "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2);
  }
}
