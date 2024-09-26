function setup() {
  createCanvas(800, 300);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically

  // Draw the robot's head

  let x: number = Math.min(headWidth, headHeight);
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  fill("black");
  circle(headWidth - headWidth * 0.25, headHeight - headHeight * 0.25, x * 0.2);
  circle(headWidth + headWidth * 0.25, headHeight - headHeight * 0.25, x * 0.2);

  fill("white");
  rect(headWidth - headWidth * 0.25, headHeight * 1.2,
    headWidth * 0.5, headHeight * 0.1)

  line(headWidth, headHeight * 0.25, headWidth, headHeight * 0.5)
  circle(headWidth, headHeight * 0.25, x * 0.1)
}
