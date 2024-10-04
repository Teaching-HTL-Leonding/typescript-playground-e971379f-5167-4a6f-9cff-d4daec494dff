function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("gold");
    rect(0, 0, width / 3, height);

    fill("green");
    rect(width / 3, 0, width / 3, height);

    fill("red");
    rect(width - width / 3, 0, width / 3, height);

    fill("black")
    rect(0, height - height / 4.5, width, height / 4.5);
    // <<< Add your code here
}


function mouseMoved() {
    let message: string;

    if (mouseX < width / 3) {
        message = "Yellow";
    }else if (mouseX < width / 3 * 2) {
        message = "Green";
    }
    else {
        message = "Red";
    }

    stroke("white");
    text(`${message}`, width/2, height-height/10);
}
// <<< Add the function `moveClicked` with the required code here
