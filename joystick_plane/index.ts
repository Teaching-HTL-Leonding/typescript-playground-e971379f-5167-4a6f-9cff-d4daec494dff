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
let speedX = 0;
let speedY = 0;

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

  speedX = -(width / 2 - blackDotX) / 5;
  speedY = -((height - joystickRadius) - blackDotY) / 5;

  let nextX = fighterPositionX + speedX;
  let nextY = fighterPositionY + speedY;

  if (nextX <= width / 2 && nextX >= -width / 2) {
    fighterPositionX = nextX;
  }
  if (nextY <= height / 2 && nextY >= -height / 2) {
    fighterPositionY = nextY;
  }

  text(`Speed: ${Math.round(speedX)}, ${Math.round(speedY)}`, 10, height - 25);
  text(`Fighter position: ${Math.round(fighterPositionX)}, ${Math.round(fighterPositionY)}`, 10, height - 10);
}

function distanceCalc(Ax: number, Ay: number, Bx: number, By: number): number {
  let distance = Math.sqrt(Math.pow(Ax - Bx,2)+ Math.pow(Ay - By,2));
  return distance;
}

let inside = false;
function mousePressed() {
  inside = distanceCalc(mouseX, mouseY, blackDotX, blackDotY)
    + blackDotRadius <= joystickRadius;

}
function mouseDragged() {
  let dx = mouseX - width / 2;
  let dy = mouseY - (height - joystickRadius);
  let distance = distanceCalc(width / 2, height - joystickRadius, mouseX, mouseY);

  if (inside) {
    if (distance > joystickRadius) {
      let scale = joystickRadius / distance;
      blackDotX = width / 2 + dx * scale;
      blackDotY = height - joystickRadius + dy * scale;
    } else {
      blackDotX = mouseX;
      blackDotY = mouseY;
    }
  }
}

