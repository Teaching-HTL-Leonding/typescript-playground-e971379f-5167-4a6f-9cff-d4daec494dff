function setup() {
    createCanvas(250, 250);
    background("black");

    strokeWeight(5);
    strokeCap(SQUARE);

    let v = 25;
    while (v <= 225) {
        stroke("yellow");
        line(25, v, 225, v);
        stroke("blue");
        line(v, 25, v, 225);
        v += 50;
    }
}

function draw() {
}
