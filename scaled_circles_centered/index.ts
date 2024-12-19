function setup() {
    createCanvas(400, 400);
    background("white");
    noFill();

    stroke("blue");
    strokeWeight(3);
    circle(200, 200, 50);
    
    push();
    stroke("red");
    scale(2);
    strokeWeight(3 / 2);
    circle(200/2, 200/2, 50);
    pop();
    
    push();
    stroke("green");
    scale(4.0);
    strokeWeight(3 / 4); 
    circle(200/4, 200/4, 50);
    pop();
}
