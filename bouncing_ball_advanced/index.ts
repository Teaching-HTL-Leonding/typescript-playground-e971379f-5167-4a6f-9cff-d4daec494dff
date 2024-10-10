function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 50;

let circleCenterX = 0;
let direction = 2;

let circleCenterY = 0;
let directionY = 2;

// Remember: The _draw_ method is called FOR EVERY FRAME
function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, circleCenterY, circleDiameter);

  circleCenterX += direction;
  circleCenterY += directionY;

  //                         +----------------------------- OR operator
  //                         |
  //                         v
  if (circleCenterX >= width || circleCenterY >= height) {
    // Reverse sign of direction (positive -> right, negative -> left)
    directionY *= -2; 
  }
}