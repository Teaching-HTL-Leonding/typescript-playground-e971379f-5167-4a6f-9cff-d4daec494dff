function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(1);
    stroke("lightgray");

    // Draw vertical lines
    let i = GRID;
    while (i < SIZE) {
        stroke("yellow");
        line(0, i, i, i);
        i += GRID;
    }

    // Draw horizontal lines
    i = GRID;
    while (i < SIZE) {
        stroke("red");
        line(i, i, SIZE, i);
        i += GRID;
    }

    strokeWeight(2);

    // Draw left part of the lines
    stroke("yellow");
    // <<< Write your code here

    // Draw right part of the lines
    stroke("red");
    // <<< Write your code here
}
