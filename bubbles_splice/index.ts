const circlesCenterX: number[] = [];
const circlesCenterY: number[] = [];
const circlesDiameter: number[] = [];
const circlesFill: string[] = [];
let nextCircle = 0;
const maxDiameter = 150;

const availableColors = [
  "pink",
  "yellow",
  "aqua",
  "lime",
  "red",
  "gold",
]

// setup runs once at the start
function setup() {
  createCanvas(400, 400);
}

// draw runs continuously in a loop
function draw() {
  background("black");

  if (millis() >= nextCircle) {
    const d = random(10, maxDiameter);  // Random diameter between 10 and maxDiameter
    circlesDiameter.push(d);
    circlesCenterX.push(random(d / 2, width - d / 2));
    circlesCenterY.push(random(d / 2, height - d / 2));
    circlesFill.push(random(availableColors));
    nextCircle = millis() + random(500, 2000);
  }

  noStroke();
  for (let i = 0; i < circlesDiameter.length; i++) {
    fill(circlesFill[i]);
    circle(circlesCenterX[i], circlesCenterY[i], circlesDiameter[i]);
  
  if (millis()) {
    circlesCenterX.splice(i- circlesDiameter.length);
    circlesCenterY.splice(i -circlesDiameter.length);
    circlesDiameter.splice(i -circlesDiameter.length);
    circlesFill.splice(i -circlesDiameter.length);
}
  }
  }
