function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
    colorMode(HSB);
}

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();
    let xscaling = ((mouseX / 10000) * 10);

    let a = 0;

    for (let i = 0; i < width; i++) {
        push();
        for (let g = 0; g < height; g += 10) {
            stroke(a, 100, 100);
            line(0, 0, 10 + 10 * xscaling, 5 + 5 * xscaling);
            line(0, 10 + 10 * xscaling, 10 + 10 * xscaling, 5 + 5 * xscaling);
            translate(0, 10 + 10 * xscaling);
        }
        pop();
        translate(10 + 10 * xscaling, 0);
        a += (width / 360 * 3.6) + (width / 360 * 3.6) * xscaling;
    }

    resetMatrix();

    let xpercentage = Math.round((mouseX / width) * 100);
    noStroke();
    fill("black");
    rect(0, height - 25, width, 25);
    fill("white");
    textSize(12);
    textAlign(LEFT, BOTTOM)
    text(Math.round(mouseX) + ` of ${width} = ` + xpercentage + "%", 5, height - 5);
    // <<< Add your code here
}
