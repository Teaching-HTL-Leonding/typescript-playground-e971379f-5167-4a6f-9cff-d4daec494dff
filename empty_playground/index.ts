function setup() {
    createCanvas(250, 250);
    background("black");

    strokeWeight(1);
    stroke("yellow");
    colorMode(HSB);

    let y = 225;
    while (y >= 25) {
        stroke(y, 100, 100);
        line(25, y, y, 225);
        line(y, 25, 225, y);
        y -= 12.5;
    }
}

function draw() {
}
