function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of tie squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i = GRID;
    while (i < SIZE - GRID) {
        fill("yellow");
        rect(i, i, GRID, GRID);
        i += GRID;
        fill("lime");
        rect(SIZE - GRID - i, i, GRID, GRID);
    }

}