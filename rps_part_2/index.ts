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

let choice = "";
let cchoice ="";

function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);
    const HUMAN_SYMBOLS_TOP = 150;
    text("🌑", STONE_LEFT, HUMAN_SYMBOLS_TOP);
    text("📃", PAPER_LEFT, HUMAN_SYMBOLS_TOP);
    text("✂️", SCISSORS_LEFT, HUMAN_SYMBOLS_TOP);
}
//"🌑"|| "📃"|| "✂️"

function mouseMoved() {
    if (choice !== "") { return; }

    const isInVertical = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;
    // This function highlights the icon currently being hovered over by the mouse.
    if (choice === "") {

    }

    // <<< Add code here to disable the hover effect once the user has made a choice
    noFill();
    strokeWeight(3);

    // In the following lines of code, we repeatedly check if the mouse
    // is vertically in the relevant area. Therefore, we calculate the boolean
    // value once and use the variable later multiple times.

    // Check if the mouse is over the "stone" icon.
    if (isInVertical && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        stroke("yellow"); // Highlight with yellow.
    } else {
        stroke("black"); // Remove highlight by drawing in black.
    }
    // Draw a rectangle around the "stone" icon.
    rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    // Same for paper
    if (isInVertical && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(PAPER_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    // Same for scissors
    if (isInVertical && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(SCISSORS_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
}

function mouseClicked() {

    const isInVertical = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;
if(cchoice==="") {
    if (isInVertical && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        choice = "🌑";
    }
    if (isInVertical && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
        choice = "📃";
    }
    if (isInVertical && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
        choice = "✂️";
    }

    let comchoice: any = Math.floor(random(0, 3));

    if (comchoice === 0) {
        cchoice = "🌑";
    }
    if (comchoice === 1) {
        cchoice = "📃";
    }
    else if (comchoice === 2) { cchoice = "✂️" };

    noStroke();
    fill("yellow");
    textSize(30);
    text(`Computer:`, 30, 300);

    textSize(50);
    text(`${cchoice}`, 175, 300);
    if(choice === "✂️" && cchoice === "🌑" || choice === "🌑" && cchoice === "📃" ||
    choice === "📃" && cchoice === "✂️") {
        text("Computer wins!", 30, 450);
    }
    if(cchoice === "✂️" && choice === "🌑" || cchoice === "🌑" && choice === "📃" ||
    cchoice === "📃" && choice === "✂️") {
        text("You win!", 30, 450);
    }

    if (cchoice === choice) {
        text("It's a tie!", 30, 450);
    }
}
}
