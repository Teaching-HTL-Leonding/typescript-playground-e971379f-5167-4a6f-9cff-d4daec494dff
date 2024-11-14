function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i = SQUARE_SIZE;
    while (i < SIZE - SQUARE_SIZE) {
        fill("white");
        rect(i, i, SQUARE_SIZE, SQUARE_SIZE);
        fill("brown");
        rect(i + SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        i += SQUARE_SIZE;
    }
    // <<< Add the code for drawing the chess board here
}
