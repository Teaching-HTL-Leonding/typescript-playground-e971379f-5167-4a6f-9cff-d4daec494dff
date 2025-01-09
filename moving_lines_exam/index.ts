// Configuration for the number of lines, and the range of colors The format is:
// <number of lines>;<min hue>-<max hue>
//
// "number of lines" is the number of lines to draw, can be between 1 and 30
// "min hue" is the minimum hue (HSB color space), can be between 0 and 360
// "max hue" is the maximum hue (HSB color space), can be between 0 and 360
const CONFIGURATION = "5;0-360";

let numberoflines = 5;
let numberoflinesmax = 30;

let lineStartX: number[] = [];     // Start coordinates of line
let lineStartY: number[] = [];
let lineEndX: number[] = [];       // End coordinates of line
let lineEndY: number[] = [];
let lineColor: number[] = [];

let lineStartDx: number[] = [];    // Movement of start point per frame in X and Y direction
let lineStartDy: number[] = [];
let lineEndDx: number[] = [];      // Movement of end point per frame in X and Y direction
let lineEndDy: number[] = [];

let minColor = 0;               // Lower bound of random hue value
let maxColor = 360;             // Upper bound of random hue value

function setup() {
    createCanvas(500, 500);
    colorMode(HSB);

    // Set random start and end position
    for (let i = 0; i < numberoflines; i++) {
        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));

        // Set random movement
        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));

        // Set random color
        lineColor.push(random(minColor, maxColor));
    }
}

function draw() {
    background("black");

    push();
    // Draw current line

    // Move start and end point
    for (let i = 0; i < lineStartDx.length; i++) {

        lineStartX[i] += lineStartDx[i];
        lineStartY[i] += lineStartDy[i];
        lineEndX[i] += lineEndDx[i];
        lineEndY[i] += lineEndDy[i];

        // Reverse direction when edge has been reached
        if (lineStartX[i] < 0 || lineStartX[i] > width) {
            lineStartDx[i] = -lineStartDx[i];
        }
        if (lineStartY[i] < 0 || lineStartY[i] > height) {
            lineStartDy[i] = -lineStartDy[i];
        }

        if (lineEndX[i] < 0 || lineEndX[i] > width) {
            lineEndDx[i] = -lineEndDx[i];
        }
        if (lineEndY[i] < 0 || lineEndY[i] > height) {
            lineEndDy[i] = -lineEndDy[i];
        }

        stroke(lineColor[i], 100, 100);
        strokeWeight(2);
        line(lineStartX[i], lineStartY[i], lineEndX[i], lineEndY[i]);
    }
    pop();

    fill("white");
    rect(10, 10, 50, 50);
    rect(70, 10, 50, 50);
    fill("purple");
    line(20, 35, 50, 35);
    line(35, 20, 35, 50);
    line(80, 35, 110, 35);

}


function mouseClicked() {
    if (mouseX >= 10 && mouseX <= 60 && mouseY >= 10 && mouseY <= 60 && numberoflines <= numberoflinesmax) {
        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));

        // Set random movement
        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));
    } else if (mouseX >= 70 && mouseX <= 120 && mouseY >= 10 && mouseY <= 60 && numberoflines <= numberoflinesmax) {
        numberoflines -= 1;
        lineStartX.splice(random(0, numberoflines), 1);
        lineStartY.splice(random(0, numberoflines), 1);
        lineEndX.splice(random(0, numberoflines), 1);
        lineEndY.splice(random(0, numberoflines), 1);

        lineStartDx.splice(random(0, numberoflines), 1);
        lineStartDy.splice(random(0, numberoflines), 1);
        lineEndDx.splice(random(0, numberoflines), 1);
        lineEndDy.splice(random(0, numberoflines), 1);
    }
}
