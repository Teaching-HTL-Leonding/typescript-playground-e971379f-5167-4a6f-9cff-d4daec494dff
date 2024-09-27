function setup() {
    createCanvas(400, 400);
}

let x: number = 0;
let direction: number = +12;

function draw() {
    background("yellow");

    x = x + direction;

    if (x >= width) {
        direction = -12;
    }

    else if (x <= 0) {
        direction = +12;
    }


    circle(x, height / 2, 50);
}
