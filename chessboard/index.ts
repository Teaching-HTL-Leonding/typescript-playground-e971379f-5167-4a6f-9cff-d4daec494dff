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
    for(let h = 0, ranks = 1, files: string; h<8; h++, ranks++){
        fill("white");
        text(ranks, SQUARE_SIZE / 2, SIZE - SQUARE_SIZE/2 - ranks * SQUARE_SIZE);

        switch(h){
            case 0: files = "a"; break;
            case 1: files = "b"; break;
            case 2: files = "c"; break;
            case 3: files = "d"; break;
            case 4: files = "e"; break;
            case 5: files = "f"; break;
            case 6: files = "g"; break;
            case 7: files = "h"; break;
        }

        text(files, SQUARE_SIZE/2 + ranks * SQUARE_SIZE, SIZE-SQUARE_SIZE/2);
    }
}