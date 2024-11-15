const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
  colorMode(HSB);

  strokeWeight(1);

  for(let i = MARGIN, a = 0; i<SIZE; i+= MARGIN, a += 60){
    stroke(a, 100, 100);
    for(let h = MARGIN; h < SIZE; h+= MARGIN){
      line(MARGIN, i, SIZE-MARGIN, h);
    }
  }

  // <<< Add your code here
}
