// Constants for the game grid
const GRID_SIZE: number = 300;           // The size of the Tic Tac Toe grid
const CELL_SIZE: number = GRID_SIZE / 3; // The size of each cell in the grid
const LINE_THICKNESS: number = 3;        // Thickness of the grid lines

// Canvas size
const CANVAS_WIDTH = GRID_SIZE; // Width of the canvas
const CANVAS_HEIGHT = GRID_SIZE + 50; // Height of the canvas (extra space for messages)

let square1 = "";
let square2 = "";
let square3 = "";
let square4 = "";
let square5 = "";
let square6 = "";
let square7 = "";
let square8 = "";
let square9 = "";

let currentplayer = "X";
let gameend = "";
let result = "";
function setup() {
    // Create the canvas with specified width and height
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

// Remember: The draw function is called repeatedly (once per frame) to update the display.
// In this exercise, we redraw the entire game board in each frame.
function draw() {
    background("white");
    strokeWeight(LINE_THICKNESS);
    fill("black");
    stroke("black");
    line(100, 0, 100, GRID_SIZE);
    line(200, 0, 200, GRID_SIZE);
    line(0, 100, GRID_SIZE, 100);
    line(0, 200, GRID_SIZE, 200);

    noStroke();
    textSize(50);
    textAlign(CENTER, CENTER);
    fill("black");
    if (square1 !== "") {
        text(square1, 50, 50);
    }
    if (square2 !== "") {
        text(square2, 150, 50);
    }
    if (square3 !== "") {
        text(square3, 250, 50);
    }
    if (square4 !== "") {
        text(square4, 50, 150);
    }
    if (square5 !== "") {
        text(square5, 150, 150);
    }
    if (square6 !== "") {
        text(square6, 250, 150);
    }
    if (square7 !== "") {
        text(square7, 50, 250);
    }
    if (square8 !== "") {
        text(square8, 150, 250);
    }
    if (square9 !== "") {
        text(square9, 250, 250);
    }

    textSize(30);
    text(`Player ${currentplayer}'s turn`, width / 2, height - 20);

    if (gameend === "1") {
        textAlign(CENTER, CENTER);
        noStroke();
        fill("white");
        rect(0, 300, 300, 100);
        fill("black");
        text(result, 150, height - 20);
    }



}

function mouseClicked() {
    if (gameend === "1") {
        square1 = "";
        square2 = "";
        square3 = "";
        square4 = "";
        square5 = "";
        square6 = "";
        square7 = "";
        square8 = "";
        square9 = "";
        gameend = "";
    }
    if (gameend !== "1") {
        background("white");
        strokeWeight(LINE_THICKNESS);
        fill("black");
        line(100, 0, 100, GRID_SIZE);
        line(200, 0, 200, GRID_SIZE);
        line(0, 100, GRID_SIZE, 100);
        line(0, 200, GRID_SIZE, 200);

        const ypos1 = mouseY > 0 && mouseY < CELL_SIZE;
        const ypos2 = mouseY > CELL_SIZE && mouseY < 2 * CELL_SIZE;
        const ypos3 = mouseY > 2 * CELL_SIZE && mouseY < GRID_SIZE;
        const xpos1 = mouseX > 0 && mouseX < CELL_SIZE;
        const xpos2 = mouseX > CELL_SIZE && mouseX < 2 * CELL_SIZE;
        const xpos3 = mouseX > 2 * CELL_SIZE && mouseX < GRID_SIZE;

        textAlign(CENTER, CENTER);
        fill("black");
        if (ypos1 && xpos1) {
            square1 = currentplayer;
        } else if (ypos1 && xpos2) {
            square2 = currentplayer;
        } else if (ypos1 && xpos3) {
            square3 = currentplayer;
        } else if (ypos2 && xpos1) {
            square4 = currentplayer;
        } else if (ypos2 && xpos2) {
            square5 = currentplayer;
        } else if (ypos2 && xpos3) {
            square6 = currentplayer;
        } else if (ypos3 && xpos1) {
            square7 = currentplayer;
        } else if (ypos3 && xpos2) {
            square8 = currentplayer;
        } else if (ypos3 && xpos3) {
            square9 = currentplayer;
        }




        if (square1 === currentplayer && square2 === currentplayer && square3 === currentplayer ||
            square4 === currentplayer && square5 === currentplayer && square6 === currentplayer ||
            square7 === currentplayer && square8 === currentplayer && square9 === currentplayer ||
            square1 === currentplayer && square5 === currentplayer && square9 === currentplayer ||
            square1 === currentplayer && square4 === currentplayer && square7 === currentplayer ||
            square2 === currentplayer && square5 === currentplayer && square8 === currentplayer ||
            square3 === currentplayer && square6 === currentplayer && square9 === currentplayer ||
            square7 === currentplayer && square5 === currentplayer && square3 === currentplayer) {
            gameend = "1";
            result = `${currentplayer} wins!`;
        }

        if (square1 !== "" && square2 !== "" && square3 !== "" &&
            square4 !== "" && square5 !== "" && square6 !== "" &&
            square7 !== "" && square8 !== "" && square9 !== "") {
            gameend = "1";
            result = `It's a tie`;
        }
        if (currentplayer === "X") {
            currentplayer = "O";
        }
        else if (currentplayer = "O") {
            currentplayer = "X";
        }


    }
}




