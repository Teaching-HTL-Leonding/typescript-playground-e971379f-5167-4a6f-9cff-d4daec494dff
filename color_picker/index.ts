function setup() {
    createCanvas(360, 200);
    colorMode(HSB);
    background(0, 100, 100);
    noStroke();
}

function mouseMoved() {
    fill(mouseX, mouseY, 100);
    rect(0, 0, 360, 100);
}

function mouseClicked() {
    fill(mouseX, mouseY, 100);
    rect(0, 100, 360, 100);
    fill(0);
    text(`H: ${Math.round(mouseX)}, S: ${Math.round(mouseY)}, B: 100`, 5, height - 5);
}
