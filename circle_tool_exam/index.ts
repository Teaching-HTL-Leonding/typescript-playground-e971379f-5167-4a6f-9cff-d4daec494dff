function setup() {
    createCanvas(400, 200);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
    background("black");
    let x = width / 2;
    let y = height / 2;
    let xdurchmesser = Math.round((mouseX - x)*2 / 20) * 20;
    let ydurchmesser = Math.round((mouseY - y)*2 / 20) * 20;
    let area = Math.abs(Math.round(xdurchmesser * ydurchmesser * Math.PI));

text(2*(mouseX -x), 5, 10 )
    stroke("white");
    noFill();
    ellipse(x, y, xdurchmesser, ydurchmesser);

    noStroke();
    fill("white");
    textAlign(BOTTOM);
    text(area, 10, height - 10);

    stroke("white");
    line(x - xdurchmesser / 2, y, x + xdurchmesser / 2, y);
    line(x, y - ydurchmesser / 2, x, y + ydurchmesser / 2);
}
// <<< Add the function `mouseMoved` with the required code here
