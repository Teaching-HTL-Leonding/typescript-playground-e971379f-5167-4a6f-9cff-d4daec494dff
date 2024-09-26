function setup() {
  createCanvas(200, 200);
}

function mouseMoved() {
  background("lightblue");

  noFill();

  circle(mouseX, mouseY, 10);
  circle(mouseX, mouseY, 20);
  line(mouseX - 15, mouseY, mouseX + 15, mouseY);
  line(mouseX, mouseY - 15, mouseX, mouseY + 15);
}