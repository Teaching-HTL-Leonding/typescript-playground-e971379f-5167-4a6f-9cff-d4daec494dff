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

const cellSize = 20;

function splitCrossword(){
    let rows = crossword.split(`\n`);
    for(let i = 0; i <= rows.length; i++){
    let separateRow = rows[i].split(",");
    words.push(separateRow[0]);
    positions.push(parseInt(separateRow[1]));
    descriptions.push(separateRow[2]);
    separateRow = [];
    }
}

function draw(){
    splitCrossword();
            noFill();
            stroke("black");
    for(const word of words){
        push();
        for(let i = 0; i<word.length; i++){
            rect(0, 0, cellSize, cellSize);
            translate(cellSize, 0);
        }
        pop();
        translate(0, cellSize);
    }

}
function setup() {
    createCanvas(500,500);
    background("white");

}
