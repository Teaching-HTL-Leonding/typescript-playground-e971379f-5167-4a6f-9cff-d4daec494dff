const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);

  for (let i = MARGIN; i < SIZE; i += MARGIN) {
    stroke("yellow");
    line(MARGIN, i, mouseX, mouseY);
    line(mouseX, mouseY, SIZE - MARGIN, i);
    stroke("lime");
    line(i, MARGIN, mouseX, mouseY);
    line(i, SIZE - MARGIN, mouseX, mouseY);
  }


  // <<< Add your code here
}
