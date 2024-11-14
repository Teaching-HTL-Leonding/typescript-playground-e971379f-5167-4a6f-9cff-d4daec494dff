function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i = GRID;
    while (i < SIZE - GRID) {
        fill("yellow");
        rect(i, i, GRID, GRID);
        i += GRID;
    }

    let h = GRID;
    while (h < SIZE - GRID) {
        fill("lime");
        rect(SIZE - GRID - h, h, GRID, GRID);
        h += GRID;
    }
    // <<< Add your code here
}
