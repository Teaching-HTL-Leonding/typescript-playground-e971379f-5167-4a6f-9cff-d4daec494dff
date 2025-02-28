const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(300, 600);
    lineHeight = height / 5;
    cellWidth = width / 3;
    const w6 = width / 6;
    const h10 = height / 10;

    background("lightgray");
    fill("black");
    line(0, lineHeight, width, lineHeight);
    line(0, 2 * lineHeight, width, 2 * lineHeight);
    line(0, 3 * lineHeight, width, 3 * lineHeight);
    line(0, 4 * lineHeight, width, 4 * lineHeight);
    line(cellWidth, lineHeight, cellWidth, 4 * lineHeight);
    line(2 * cellWidth, lineHeight, 2 * cellWidth, height);

    fill("white");
    rect(10, 10, width - 20, height / 6);

    fill("black");
    textAlign(CENTER, CENTER);
    textSize(50);
    text("7", w6, 3 * h10);
    text("8", 3 * w6, 3 * h10);
    text("9", 5 * w6, 3 * h10);
    text("4", w6, 5 * h10);
    text("5", 3 * w6, 5 * h10);
    text("6", 5 * w6, 5 * h10);
    text("1", w6, 7 * h10);
    text("2", 3 * w6, 7 * h10);
    text("3", 5 * w6, 7 * h10);
    text("0", 2 * w6, 9 * h10);
    text("C", 5 * w6, 9 * h10);

}



function mouseClicked() {
    fill("white");
    rect(10, 10, width - 20, height / 6);
    const y789 = mouseY > lineHeight && mouseY < 2 * lineHeight;
    const y456 = mouseY > 2 * lineHeight && mouseY < 3 * lineHeight;
    const y123 = mouseY > 3 * lineHeight && mouseY < 4 * lineHeight;
    const y0 = mouseY > 4 * lineHeight && mouseY < height;
    let digit = 0;

    if (y789 && mouseX > 0 && mouseX < cellWidth) {
        num = num * 10 + 7;
    }
    else if (y789 && mouseX > cellWidth && mouseX < 2 * cellWidth) {
        num = num * 10 + 8;
    }
    else if (y789 && mouseX > 2 * cellWidth && mouseX < width) {
        num = num * 10 + 9;
    }
    else if (y456 && mouseX > 0 && mouseX < cellWidth) {
        num = num * 10 + 4;
    }
    else if (y456 && mouseX > cellWidth && mouseX < 2 * cellWidth) {
        num = num * 10 + 5;
    }
    else if (y456 && mouseX > 2 * cellWidth && mouseX < width) {
        num = num * 10 + 6;
    }
    else if (y123 && mouseX > 0 && mouseX < cellWidth) {
        num = num * 10 + 1;
    }
    else if (y123 && mouseX > cellWidth && mouseX < 2 * cellWidth) {
        num = num * 10 + 2;
    }
    else if (y123 && mouseX > 2 * cellWidth && mouseX < width) {
        num = num * 10 + 3;
    }
    else if (y0 && mouseX > 0 && mouseX < 2 * cellWidth) {
        num = num * 10 + 0;
    }
    else if (y0 && mouseX > 2 * cellWidth && mouseX < width) {
        fill("white");
        rect(10, 10, width - 20, height / 6);
    };


    fill("black");
    textAlign(RIGHT);
    text(num, width - 20, height / 10);
}
