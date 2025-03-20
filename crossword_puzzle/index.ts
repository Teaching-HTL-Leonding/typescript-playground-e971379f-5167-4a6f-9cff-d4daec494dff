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
    createCanvas(1000, 1000);
    background("white");
    splitCrossword();
    drawCrossword();
}

function drawCrossword() {
    let i = 0;
    translate(200, 10);
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
    translate(200, 10);
    for (const word of words) {
        push();
        translate(cellSize * positions[i], 0);
        for (let i = 0; i < word.length; i++) {
            noStroke();
            textSize(20);
            fill("black");
            textAlign(CENTER, CENTER);
            if (guessKey(key) === true && word[i]=== key) {
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
    translate(200, 10);
    fill("yellow");
    for (let i = 0; i < solution.length; i++) {
        rect(0, 0, cellSize, cellSize);
        translate(0, cellSize);
    }
    resetMatrix();
}
/*
function guessKey(key: string): boolean {
    let allLetters: string[] = [];
    for (const word of words) {
        for (const letter of word) {
            for (let i = 0; i < 26; i++) {
                if (letter !== allLetters[i]) {
                    allLetters.push(letter);
                }
            }
        }
    }
    for (const letter of allLetters) {
        if (key === letter) {
            return true;
        }
    }
}
*/

function guessKey(key: string): boolean {
    let allLetters: string[] = [];
    for (const word of words) {
        for (const letter of word) {
            if (key === letter) {
                return true;
            }

        }
    }

}

function draw() {
    drawSolution();
    drawFilledCrossword();
}