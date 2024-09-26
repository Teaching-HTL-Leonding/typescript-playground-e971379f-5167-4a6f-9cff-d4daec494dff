function setup() {
  createCanvas(200, 200);
  background("lightblue");
  colorMode(HSB);
}

let globalVar: string = "0/0";

function mouseClicked() {
  background("lightblue");

  noStroke();
  fill("cyan");
  circle(mouseX, mouseY, 10);

  globalVar= globalVar + ", "+`${Math.round (mouseX)}/${Math.round (mouseY)}`

  fill(0);
  text(globalVar, 10, 10, 190, 190);
}