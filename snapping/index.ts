function setup() {
  createCanvas(200, 200);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue");

  // Add your code here
  let x = Math.round(mouseX/40)*40;
  let y = Math.round(mouseY/40)*40;

  strokeWeight(4);
  stroke("white");
  line(x - 15, y, x + 15, y);
  line(x, y - 15, x, y + 15);


  noStroke()
  fill("white");
  text(`${x}/${y}`, 5, height - 5);

}
