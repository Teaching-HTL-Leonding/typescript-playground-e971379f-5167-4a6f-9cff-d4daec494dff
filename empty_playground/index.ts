function setup() {
    createCanvas(400, 400);
    background("black");

    for (let i = 0; i < 3; i++) {
        drawCircle("yellow");
    }
}

function mouseClicked() {
    drawCircle("aqua");
}

function drawCircle(color: string) {
    stroke("black");
    fill(color);
    let x = random(0, 400);
    let y = random(0, 400);
    let diameter = random(50, 250);
    circle(x, y, diameter);
    //console.info(x, y, diameter);
}
