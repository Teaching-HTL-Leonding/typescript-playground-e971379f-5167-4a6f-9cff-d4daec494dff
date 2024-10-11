let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

  noFill();
  stroke("yellow");
  rect(width / 9, height / 3, width / 9, height / 4);
  rect(3 * width / 9, height / 3, width / 9, height / 4);
  rect(5 * width / 9, height / 3, width / 9, height / 4);
  rect(7 * width / 9, height / 3, width / 9, height / 4);

fill("yellow");
noStroke();
textAlign(CENTER, height/5);
textSize(30);
text(`${num} in binary?`, width/2, height/5);

  text(0, 1.5 * width / 9, height / 2 - 7);
  text(0, 3.5 * width / 9, height / 2 - 7);
  text(0, 7.5 * width / 9, height / 2 - 7);
  text(0, 5.5 * width / 9, height / 2 - 7);
}

function mouseClicked() {

      let message : string;
if(mouseX>width/9 && mouseX<3*width/9 && mouseY < height/3 && mouseY > height/4) {
  message = "got it";
}
if(mouseX>3*width/9 && mouseX<5*width/9 && mouseY < height/3 && mouseY > height/4) {
  message = "got it";
}



    fill("white");
    textSize(30);
    textAlign(CENTER, CENTER);
    text(`${message}`, width/2, height/2)
}