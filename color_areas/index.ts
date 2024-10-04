function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    // <<< Add your code here
    fill("gold");
    rect(0, 0, width / 3, height);

    fill("green");
    rect(width / 3, 0, width / 3, height);

    fill("red");
    rect(width - width / 3, 0, width / 3, height);

    fill("black");
    rect(0, height - height / 4.5, width, height / 4.5);
}


function mouseClicked() {
    noStroke();
    fill("black");
    rect(0, height - height / 4.5, width, height / 4.5);
    let message: string;

    if (mouseX < width / 3) {
        message = "Yellow";
    }else if (mouseX < width / 3 * 2) {
        message = "Green";
    }
    else {
        message = "Red";
    }

    fill("white");
    textSize(30);
    textAlign(CENTER, CENTER);
    text(`${message}`, width/2, height-25);
}
// <<< Add the function `moveClicked` with the required code here
