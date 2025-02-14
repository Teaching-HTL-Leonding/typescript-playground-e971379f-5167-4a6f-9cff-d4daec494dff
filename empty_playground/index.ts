const values = [10, 25, 50, 33, 5];

function setup() {
    createCanvas(500, 500);
    fill("red");
    for (let i = 0; i < values.length; i++) {
        translate(values[i] / 2, 0);
        circle(0, 50, values[i]);
        translate(values[i] / 2, 0);
    }

    resetMatrix();
    fill("lime");

    for (const value of values) {
        translate(value / 2, 0);
        circle(0, 150, value);
        translate(value / 2, 0);
    }

}