function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("gold");
    rect(0, 0, width/2, height/2);

    fill("green");
    rect(width/2, 0, width/2, height/2);

    fill("blue");
    rect(0, height/2, width/2, height/2);

    fill("red");
    rect(width/2, height/2, width/2, height/2);

    fill("black");
    rect(width/4, height/2.5, width/2, height/5);
    // <<< Add your code here
}

function mouseClicked() {

    let message : string;
    fill("black");
    rect(width/4, height/2.5, width/2, height/5);

    if (mouseX < width/2 && mouseY < height/2) {
        message = "Yellow";
    }

    else if (mouseX > width/2 && mouseY < height/2) {
        message= "Green";
    }

    else if (mouseX < width/2 && mouseY > height/2) {
        message = "Blue";
    }

    else {
        message = "Red";
    }

    fill("white");
    textSize(30);
    textAlign(CENTER, CENTER);
    text(`${message}`, width/2, height/2)
}
// <<< Add the function `moveClicked` with the required code here