const circleRad = 50;
const targetRad = 70;
let circleX = 0;
let circleY = 0;
let targetX = 0;
let targetY = 0;
let points = 0;
let rem = 60;
function setup() {
  createCanvas(800, 600);
  circleX = random(circleRad, width - circleRad);
  circleY = random(circleRad, height - circleRad);
  targetX = random(targetRad, width - targetRad);
  targetY = random(targetRad, height - targetRad);

}

function draw() {
  if (inside = false){
    noOverlap()
  }
  background("lightgray");

  noFill();
  stroke("black");
  circle(targetX, targetY, targetRad * 2);
  fill("blue");
  noStroke();
  circle(circleX, circleY, circleRad * 2);

  fill("black");
  textAlign(LEFT,BOTTOM);
  text(`Score: ${points}`, 20, height-20);


}

let inside = false;

function mousePressed() {
  if (calcDistance(mouseX, circleX, mouseY, circleY) < circleRad) {

    inside = true;
  }
}

function mouseDragged() {
  if (inside) {
    circleX = mouseX;
    circleY = mouseY;
  }
}

function mouseReleased() {
  if (calcDistance(targetX, circleX, targetY, circleY) + circleRad < targetRad) {
    points++;
    targetX = random(targetRad, width - targetRad);
    targetY = random(targetRad, height - targetRad);
  }

}

function calcDistance(x1: number, x2: number, y1: number, y2: number) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function noOverlap() {
    if (calcDistance(targetX, circleX, targetY, circleY) < targetRad + circleRad) {
    targetX = random(targetRad, width - targetRad);
    targetY = random(targetRad, height - targetRad);
  }
}