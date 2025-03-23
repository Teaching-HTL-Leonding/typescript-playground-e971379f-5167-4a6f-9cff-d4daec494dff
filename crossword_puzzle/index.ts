/**
* Animal Crossword Game
*
* This is a crossword puzzle game where players guess letters to reveal animal names.
* The game highlights a vertical solution word that is formed from a specific column.
* Players win when they've guessed all letters in the solution word.
*/

// Raw input data in format: animalName,startPosition,hint
const crossword = `krebs,0,Schalentier  
elefant,-1,Größtes Landtier  
schlange,-4,Lautloser Jäger  
papagei,-2,Bunter Sprachkünstler  
pinguin,0,Flugunfähiger Schwimmer  
esel,-2,Sturer Vierbeiner  
piranha,-2,Gefährlicher Schwarmfisch  
seestern,-3,Meerestier mit fünf Armen  
schildkröte,-1,Langsamer Panzerträger  
hund,0,Treuer Begleiter  
seelöwe,-3,Verspielter Meeressäuger  
aal,-1,Schlängelnder Stromleiter  
antilope,-1,Schneller Sprinter der Savanne  
regenwurm,-2,Bodenlockerer mit Ringeln  
seegurke,-2,Tarnkünstler der Tiefsee`;

// The word that players need to completely reveal to win
const solution = 'klapperschlange';

// === Write the necessary code starting here ===
const words: string[] = [];
const positions: number[] = [];
const descriptions: string[] = [];

const cellSize = 30;
const padding = 10;
let counter = 0;

function splitCrossword() {
    let rows = crossword.split(`\n`);
    for (let i = 0; i < rows.length; i++) {
        let separateRow = rows[i].split(",");
        words.push(separateRow[0]);
        positions.push(parseInt(separateRow[1]));
        descriptions.push(separateRow[2]);
    }
}

function setup() {
    createCanvas(750, 550);
    background("white");
    splitCrossword();
    drawCrossword();
    drawSolution();
}

function drawCrossword() {
    let i = 0;
    translate(200, padding);
    for (const word of words) {
        push();
        translate(cellSize * positions[i], 0);
        for (let i = 0; i < word.length; i++) {
            stroke("black");
            noFill();
            rect(0, 0, cellSize, cellSize);
            translate(cellSize, 0);
        }
        pop();
        push();
        noStroke();
        textSize(cellSize / 2.5);
        fill("black");
        textAlign(LEFT, CENTER);
        text(descriptions[i], cellSize * 10.5, cellSize / 2);
        pop();
        translate(0, cellSize);
        i++;
    }
    resetMatrix();
}

function drawFilledCrossword() {
    let i = 0;
    translate(200, padding);
    for (const word of words) {
        push();
        translate(cellSize * positions[i], 0);
        for (let i = 0; i < word.length; i++) {
            stroke("black");
            noFill();
            rect(0, 0, cellSize, cellSize);
            noStroke();
            textSize(20);
            fill("black");
            textAlign(CENTER, CENTER);
            if (guessKey(key) === true && word[i] === key) {
                text(key, cellSize / 2, cellSize / 2);
            }
            translate(cellSize, 0);
        }
        pop();
        translate(0, cellSize);
        i++;
    }
    resetMatrix();
}

function drawSolution() {
    translate(200, padding);
    fill("yellow");
    for (let i = 0; i < solution.length; i++) {
        rect(0, 0, cellSize, cellSize);
        translate(0, cellSize);
    }
    resetMatrix();
}


function guessKey(key: string): boolean {
    for (const word of words) {
        for (const letter of word) {
            if (key === letter) {
                return true;
            }
        }
    }
    return false;
}

let sol = solution.split("");
let solutionProgress = [];
let letters: string[] = [];
let gameFinished: boolean = false;

function keyPressed() {
    if (guessKey(key) === false && key !== "") {
        counter++;
    }
    if (letters.includes(key) === false) {
        letters.push(key);
    } else if (letters.includes(key) === true) {
        counter++;
    }
    let i = 0;
    for (const letter of sol) {
        i++;
        if (letters.includes(letter) === true) {
            solutionProgress.push(letter);
            sol.splice(i - 1, 1);
        }
    }
    if (sol.length === 1) {
        gameFinished = true;
    }
}

function draw() {
    drawFilledCrossword();
    fill("white");
    noStroke();
    rect(0, cellSize * words.length + padding + cellSize / 2, width, 50);
    textSize(25);
    textAlign(CENTER, CENTER);
    if (gameFinished === false) {
        fill("red");
        text(`${Math.round(counter)} wrong guesses`,
            width / 2, cellSize + cellSize * words.length + padding * 2);
    }
    if (gameFinished === true) {
        fill("green");
        if (counter === 1) {
            text(`You won after ${Math.round(counter)} wrong guess`,
                width / 2, cellSize + cellSize * words.length + padding * 2);
        } else {
            text(`You won after ${Math.round(counter)} wrong guesses`,
                width / 2, cellSize + cellSize * words.length + padding * 2);
        }
    }
}