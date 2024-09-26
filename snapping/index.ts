function setup() {
  createCanvas(200, 200);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue");

  // Add your code here

  strokeWeight(4);
  stroke("white");
  line(mouseX - 15, mouseY, mouseX + 15, mouseY);
  line(mouseX, mouseY - 15, mouseX, mouseY + 15);


  noStroke()
  fill("white");
  text(`${mouseX}/${mouseY}`, 5, height - 5);

}
