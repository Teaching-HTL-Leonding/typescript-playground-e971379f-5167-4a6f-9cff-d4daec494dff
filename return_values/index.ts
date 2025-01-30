function setup() {
  createCanvas(300, 300);
  background("black");
  strokeWeight(2);
  stroke("lime");
  noFill();
}

function mouseClicked() {
  const center_x = getRandomInt(0, width);
  const center_y = getRandomInt(0, height);
  const diameter = getRandomInt(10, 50);
  circle(center_x, center_y, diameter);
}

/*
*helper function to get an integer random number between min and max
* @param min minimum value (inclusive)
*@param max maximum value (exclusive)
*@returns random integer between min and max
*/

function getRandomInt(min: number, max: number): number {
  return Math.floor(random(min, max));
}
// <<< Add additional functions here
