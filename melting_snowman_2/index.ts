const MAX_WRONG_GUESSES = 10;

/** Word to guess */
const wordToGuess = "Winterwald";

/** 
 * Current word status
 * 
 * At the beginning, this variable contains an underscore ("_")
 * for each character wordToGuess (e.g. "\_\_\_" if word to guess 
 * is "ice"). If the user guesses a letter correctly, the 
 * corresponding letter(s) are revealed in this variable 
 * (e.g. "i\_\_" after guessing "i" in "ice").
 */
let currentWordStatus: string;

/** Font for text output */
let font: any;

/** Number of wrong guesses */
let wrongGuesses = 0;

/**
 * Value indicating whether the program still accepts keys
 *
 * Becomes false if the game is over. 
 */
let acceptKeys = true;

function preload() {
    // Load the font from the web
    font = loadFont("https://cddataexchange.blob.core.windows.net/images/SyneMono-Regular.ttf");
}

function setup() {
    // Initially fill the currentWordStatus
    currentWordStatus = getInitialCurrentWord(wordToGuess);

    createCanvas(800, 500);
    angleMode(DEGREES);

    // Draw the screen one time
    redraw();
    noLoop(); // Stop calling draw() automatically
}

function draw() {
    background("white");

    if (currentWordStatus === wordToGuess) {
        // User has guessed the word correctly
        acceptKeys = false;
        drawResult(true, wrongGuesses);
    } else if (wrongGuesses === MAX_WRONG_GUESSES) {
        // User has reached 10 wrong guesses -> game over
        acceptKeys = false;
        drawResult(false, wrongGuesses);
    } else {
        // Game still running -> draw snowman
        drawSnowman(wrongGuesses);
        drawCurrentWordStatus(font, currentWordStatus);
    }

}

function keyPressed() {
    // If game is over, do not accept keys
    if (!acceptKeys) { return; }

    // Handle guess
    const newCurrentWordStatus = guessKey(key, wordToGuess, currentWordStatus);
    if (currentWordStatus === newCurrentWordStatus) {
        wrongGuesses++;
    }
    currentWordStatus = newCurrentWordStatus;

    // Refresh the screen one time
    redraw();
}

/**
 * Draws the current word status
 * 
 * @param font Font to use
 * @param currentWordStatus Current word status
 * 
 * Draws the current word status on the screen.
 */
function drawCurrentWordStatus(font: any, currentWordStatus: string) {
    push();
    textAlign(LEFT, BOTTOM);
    translate(225, 0);

    // Draw current word status
    fill("dodgerblue");
    noStroke();
    textSize(45);
    textFont(font);
    text(currentWordStatus, 0, 250);
    pop();
}
