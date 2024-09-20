function setup() {
    createCanvas(300, 300);
    background("gold");
}

function mouseClicked() {
    noStroke();
    fill("red");
    circle(mouseX, mouseY, 30);

    //triangle(mouseX - 20, mouseY- 10,
    // mouseX, mouseY + 10,
    // mouseX + 20, mouseY - 10)

    // Übermalen
    fill("gold");
    noStroke();
    rect(0, height - 20, width / 2, height);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 5, height - 5);
}
// event handler
function mouseMoved() {
    noStroke();
    fill("green");
    circle(mouseX, mouseY, 10);

    fill("gold");
    noStroke();
    rect(width / 2, height - 20,
    width / 2, 20);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 200, height - 5);
}