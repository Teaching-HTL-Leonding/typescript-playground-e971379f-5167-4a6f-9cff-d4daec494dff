// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a Math.floor(randomly generated arithmetic operation.

let operator: any = 0;

let operand1 = 0;
let operand2 = 0;

let num1 = 0;
let num2 = 0;
let num3 = 0;

let answer: number;
let answerpos = 0;

let choice: number;

// <<< TODO: Declare your GLOBAL variables here

// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    operator = Math.floor(random(0, 3));
    operand1 = Math.floor(random(0, 101));
    operand2 = Math.floor(random(0, 101));
    num1 = Math.floor(random(0, 300));
    num2 = Math.floor(random(0, 300));
    num3 = Math.floor(random(0, 300));
    answerpos = Math.floor(random(0, 3));

    createCanvas(400, 400);
    background("black");

    switch (operator) {
        case 0: operator = "+";
            answer = operand1 + operand2;
            break;
        case 1: operator = "-";
            operand2 = Math.floor(random(0, operand1));
            answer = operand1 - operand2;
            break;
        case 2: operator = "*";
            operand1 = Math.floor(random(1, 11));
            operand2 = Math.floor(random(1, 11));
            answer = operand1 * operand2;
            break;
    }

    fill("yellow");
    noStroke();
    textSize(50);
    textAlign(RIGHT);
    text(operand1 + " ", width / 2, 75);

    textAlign(LEFT);
    text(" " + operand2, width / 2, 75);

    textAlign(CENTER);
    text(operator, width / 2, 75);

    switch (answerpos) {
        case 0: num1 = answer; break;
        case 1: num2 = answer; break;
        case 2: num3 = answer; break;
    }

    textAlign(CENTER, CENTER);
    text(num1, width / 6, height / 2);
    text(num2, width / 2, height / 2);
    text(num3, width / 6 * 5, height / 2);



    // <<< TODO: Add your code here
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {

    let ypos = mouseY > height / 2 - 50 / 2 && mouseY < height / 2 + 50 / 2;

    if (ypos && mouseX > 0 && mouseX < width / 3) {
        choice = num1;
    }
    else if (ypos && mouseX > width / 3 && mouseX < width / 3 * 2) {
        choice = num2;
    }
    else if (ypos && mouseX > width / 3 * 2 && mouseX < width) {
        choice = num3;
    }

    textAlign(CENTER, BOTTOM);
    textSize(30);
    if (choice === answer) {
        fill("lime");
        text(answer + " ist richtig!", width / 2, height - 75);
    }
    else if (choice !== answer) {
        fill("red");
        text(choice + " ist falsch!", width / 2, height - 75);
    }
    // <<< TODO: Add your code here
}



// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
