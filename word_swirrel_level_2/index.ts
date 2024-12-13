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
  for(let i = 0; i <wordtoscramble.length; i++) {
    let letterIndex = Math.floor(random(wordtoscramble.length));
    textSize(random(30, 100));
    fill(random(0, 360),random(0,100), 100);
    text(wordtoscramble[letterIndex], random (50, WIDTH), random(50, HEIGHT));

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
