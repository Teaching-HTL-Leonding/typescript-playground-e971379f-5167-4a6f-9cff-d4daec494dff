// Configuration for the number of lines, and the range of colors The format is:
// <number of lines>;<min hue>-<max hue>
//
// "number of lines" is the number of lines to draw, can be between 1 and 30
// "min hue" is the minimum hue (HSB color space), can be between 0 and 360
// "max hue" is the maximum hue (HSB color space), can be between 0 and 360
const CONFIGURATION = "5;0-360";

let numberoflines = parseInt(CONFIGURATION[0]);
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
let maxColor = 0;             // Upper bound of random hue value

function setup() {
    let num = "";
    for (let i = 0; i < CONFIGURATION.length; i++) {
        if (CONFIGURATION[i] === ";") {
            numberoflines = parseInt(num);
            num = "";
        } else if (CONFIGURATION[i] === "-") {
            minColor = parseInt(num);
            num = "";
        } else {
            num += CONFIGURATION[i];
        }

    }
    maxColor = parseInt(num);
    createCanvas(500, 500);
    colorMode(HSB);

    // Set random start and end position
    lineStartX.push(random(50, 450));
    lineStartY.push(random(50, 450));
    lineEndX.push(random(50, 450));
    lineEndY.push(random(50, 450));
    lineStartDx.push(random(0, 5));
    lineStartDy.push(random(0, 5));
    lineEndDx.push(random(0, 5));
    lineEndDy.push(random(0, 5));
    lineColor.push(random(minColor, maxColor));

    for (let i = 1; i < numberoflines; i++) {

        lineStartX.push(lineStartX[0] + random(-40, 40));
        lineStartY.push(lineStartY[0] + random(-40, 40));
        lineEndX.push(lineEndX[0] + random(-40, 40));
        lineEndY.push(lineEndY[0] + random(-40, 40));

        // Set random movement
        lineStartDx.push(lineStartDx[0]);
        lineStartDy.push(lineStartDy[0]);
        lineEndDx.push(lineEndDx[0]);
        lineEndDy.push(lineEndDy[0]);

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

    text(numberoflines, 10, 200);

}


function mouseClicked() {
    if (mouseX >= 10 && mouseX <= 60 && mouseY >= 10 && mouseY <= 60 && numberoflines <= numberoflinesmax) {
        lineStartX.push(lineStartX[0] + random(-40, 40));
        lineStartY.push(lineStartY[0] + random(-40, 40));
        lineEndX.push(lineEndX[0] + random(-40, 40));
        lineEndY.push(lineEndY[0] + random(-40, 40));

        lineStartDx.push(lineStartDx[0]);
        lineStartDy.push(lineStartDy[0]);
        lineEndDx.push(lineEndDx[0]);
        lineEndDy.push(lineEndDy[0]);

        lineColor.push(random(minColor, maxColor));
        numberoflines++;
    }

    if (numberoflines != 1) {
        if (mouseX >= 70 && mouseX <= 120 && mouseY >= 10 && mouseY <= 60 && numberoflines <= numberoflinesmax) {
            lineStartX.splice(lineStartX.length - 1, 1);
            lineStartY.splice(lineStartY.length - 1, 1);
            lineEndX.splice(lineEndX.length - 1, 1);
            lineEndY.splice(lineEndY.length - 1, 1);

            lineStartDx.splice(lineStartDx.length - 1, 1);
            lineStartDy.splice(lineStartDy.length - 1, 1);
            lineEndDx.splice(lineEndDx.length - 1, 1);
            lineEndDy.splice(lineEndDy.length - 1, 1);

            lineColor.splice(lineColor.length - 1, 1);
            numberoflines--;
        }
    }
}
