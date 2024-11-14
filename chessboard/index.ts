function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i = 0;
    let color = 0;

    while (i < 64) {
        let y = Math.floor(i / 8);
        let x = i % 8;
        if ((color + y) % 2 === 0) {
            fill("lightyellow");
        } else { fill("brown"); }

        rect(SQUARE_SIZE + x * SQUARE_SIZE, SQUARE_SIZE + y * SQUARE_SIZE,
            SQUARE_SIZE, SQUARE_SIZE);

        color++;
        i++;
    }

    textAlign(CENTER, CENTER);
    textSize(20);
    let h = 0;
    let ranks = 1;
    while (h < 8) {
        fill("white");
        text(ranks, SQUARE_SIZE / 2, SIZE - ranks * SQUARE_SIZE);
        ranks += 1;
        h++;
    }
}