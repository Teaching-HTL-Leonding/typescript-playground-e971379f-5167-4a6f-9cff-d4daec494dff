// The following string represents coordinates (x,y) of circles
// that you have to draw. Each circle must have a radius of 40.
const circles = "50,50 50,100 100,50 100,100";

function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();
    stroke("black");
    strokeWeight(3);

    let xpos = 0;
    let ypos = 0;
    let coordinates = "";

    for (let i = 0; i < circles.length; i++) {
        if (circles[i] === ",") {
            xpos = parseInt(coordinates);
            coordinates = "";
        }
        else if (circles[i] === " ") {
            ypos = parseInt(coordinates);
            circle(xpos, ypos, 40);
            coordinates = "";
        } else { coordinates += circles[i]; }
    }

    ypos = parseInt(coordinates);
    circle(xpos, ypos, 40);

}


