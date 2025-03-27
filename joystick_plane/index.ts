let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;
const joystickRadius = 50;
const blackDotRadius = 10;
let blackDotX = 0;
let blackDotY = 0;


function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
  blackDotX = width / 2;
  blackDotY = height - joystickRadius;
}

function draw() {
  background("lightblue");

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();
  stroke("red");
  fill("white");
  circle(width / 2, height - joystickRadius, joystickRadius * 2);
  fill("black");
  noStroke();
  circle(blackDotX, blackDotY, blackDotRadius * 2);

  if (fighterPositionX <= width / 2 && fighterPositionX >= -width / 2) {
    fighterPositionX -= (width / 2 - blackDotX) / 5;
  } else if (fighterPositionX >= width / 2) {
    fighterPositionX = width / 2;
  } else { fighterPositionX = -width / 2 };

  if (fighterPositionY < height / 2 && fighterPositionY > -height / 2) {
    fighterPositionY -= ((height - joystickRadius) - blackDotY) / 5;
  } else if (fighterPositionY >= height / 2) {
    fighterPositionY = height / 2;
  } else { fighterPositionY = -height / 2 };
}

function distanceCalc(Ax: number, Ay: number, Bx: number, By: number): number {
  let distance = Math.sqrt((Ax - Bx) * (Ax - Bx) + (Ay - By) * (Ay - By));
  return distance;
}

let inside = false;
function mousePressed() {
  inside = distanceCalc(mouseX, mouseY, blackDotX, blackDotY)
    + blackDotRadius <= joystickRadius;

}

function mouseDragged() {
  //if (mouseX > width / 2 - joystickRadius && mouseX < width / 2 + joystickRadius) {
  //  if (mouseY < height && mouseY < height - joystickRadius * 2) {
  if (inside) {
    blackDotX = mouseX;
    blackDotY = mouseY;
  }
  console.log(Math.round(fighterPositionX), Math.round(fighterPositionY));
}


function mouseReleased() {
}
