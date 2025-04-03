const circleRad = 50;
const targetRad = 70;
let circleX = 0;
let circleY = 0;
let targetX = 0;
let targetY = 0;
let points = 0;
let time = 60;
let start = true;

function setup() {
  createCanvas(800, 600);
  circleX = random(circleRad, width - circleRad);
  circleY = random(circleRad, height - circleRad);
  newTarget();
  setInterval(timer, 1000);
}

function draw() {
  if (time === 0) {
    gameEnd();
    return;
  }
  if (calcDistance(targetX, circleX, targetY, circleY) < targetRad + circleRad &&
    !dragging && start) {
    newTarget();
  } else {
    start = false;
  }

  background("lightgray");
  noFill();
  stroke("black");
  circle(targetX, targetY, targetRad * 2);
  fill("blue");
  noStroke();
  circle(circleX, circleY, circleRad * 2);

  textSize(20);
  textAlign(LEFT, BOTTOM);
  fill("black");
  text(`Score: ${points}`, 20, height - 20);
  textAlign(RIGHT, BOTTOM);
  text(`Time: ${time}`, width - 20, height - 20);
}

let dragging = false;
function mousePressed() {
  if (calcDistance(mouseX, circleX, mouseY, circleY) < circleRad) {
    dragging = true;
  }
}

function mouseDragged() {
  if (dragging) {
    circleX = mouseX;
    circleY = mouseY;
  }
}

function mouseReleased() {
  dragging = false;
  if (calcDistance(targetX, circleX, targetY, circleY) + circleRad < targetRad) {
    points++;
    newTarget();
  }
}

function calcDistance(x1: number, x2: number, y1: number, y2: number) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function newTarget() {
  targetX = random(targetRad, width - targetRad);
  targetY = random(targetRad, height - targetRad);
  if (calcDistance(targetX, circleX, targetY, circleY) < targetRad + circleRad) {
    targetX = random(targetRad, width - targetRad);
    targetY = random(targetRad, height - targetRad);
  }
}
function timer() {
  time--;
  time = constrain(time, 0, 60);
}

function gameEnd() {
  noStroke();
  fill("lightgrey");
  rect(0, 0, width, height);

  fill("black");
  textSize(50);
  textAlign(CENTER, BOTTOM);
  text("Game Over!", width / 2, height / 2);
  textSize(30);
  text(`Final Score: ${points}`, width / 2, height / 2 + 50);
}