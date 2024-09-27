function setup() {
    createCanvas(400, 400);
}

    let x: number = 0;
    let direction: number = +1;

function draw() {
    background("yellow");

    x = x + direction;

    if(x >= width) {
        direction = -1;
    }

    circle(x, height/2, 50);
}
