function setup() {
  createCanvas(200, 200);
  background("lightblue");
}

function mouseClicked() {
  background("lightblue");
  noStroke();
  fill("cyan");
  circle(mouseX, mouseY, 10);

}
