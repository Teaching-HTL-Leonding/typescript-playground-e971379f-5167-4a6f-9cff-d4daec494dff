const SIZE = 400;    // Canvas size (square)
  const MARGIN = 25; // Margin between the edges and the rays.
                     // This is also the distance between the rays.

  function setup() {
    createCanvas(SIZE, SIZE);
    background("black");
    colorMode(HSB);
  }

  let raycolor =  0;

  function mouseMoved() {
    background("black");
    strokeWeight(2);

    // <<< Add your code here
    let i = MARGIN;
    while (i <= SIZE - MARGIN) {
      stroke(raycolor, 100, 100);
      line(MARGIN, i, mouseX, mouseY);
      line(width - MARGIN, i, mouseX, mouseY);
      line(i, MARGIN, mouseX, mouseY);
      line(i, height - MARGIN, mouseX, mouseY);

      i += MARGIN;
      raycolor = (raycolor + 0.25) % 360;
    }
  }
