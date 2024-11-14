const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
  colorMode(HSB);

  strokeWeight(1);



  let i = MARGIN;
  while (i < SIZE) {
    let a = i - MARGIN;
    stroke(a, 100, 100);
    let h = MARGIN;
    while (h < SIZE) {
      line(MARGIN, i, SIZE - MARGIN, h);
      h += MARGIN;
    }
    a += 60;
    i += MARGIN;
  }
  // <<< Add your code here
}
