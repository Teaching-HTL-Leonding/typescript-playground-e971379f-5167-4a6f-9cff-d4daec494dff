// We declare constants to avoid repeating "magic numbers". 
// These numbers are used for positioning text and icons on the canvas.
// Note that we use all-caps for constants that represent 
// configuration values to make them easy to recognize.
const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;

function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);
    fill("gray");
    text("🏔", STONE_LEFT, 150);
    text("📃", PAPER_LEFT, 150);
    fill("red");
    text("✂", SCISSORS_LEFT, 150);
    // <<< Add your code here
}

function mouseMoved() {
    noFill();
    stroke("yellow");
    if (mouseX > 40 && mouseX < 150 && mouseY > ICON_TOP && mouseY < 175) {
        rect(40, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    } else {
        stroke("black");
        rect(40, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    }

    if (mouseX > 165 && mouseX < 265 && mouseY > ICON_TOP && mouseY < 175) {
    stroke("yellow");
        rect(165, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    } else {
        stroke("black");
        rect(165, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    }
 if (mouseX > 285 && mouseX < 385 && mouseY > ICON_TOP && mouseY < 175) {
    stroke("yellow");
        rect(285, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    } else {
        stroke("black");
        rect(285, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
    }

    // <<< Add your code here
}
