const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);
  colorMode(HSB);

  addRandomCircle();
  if(millis() <10000){
  circle_interval = setInterval(addRandomCircle, waiting_time);
  }
  if(millis()> 10000){
    clearInterval(circle_interval);
    level_interval= setInterval(addRandomCircle, waiting_time/2);
  }

}

function draw() {
  background("black");
  fill("skyblue");
  for (let i = 0; i < circles_diameter.length; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i]);
  }
  fill("black");
  rect(0, 0, 30, 30);
  fill("white");
  noStroke();
  textAlign(LEFT,TOP);
  text(points, 10, 10);
}

function mouseClicked() {
  for (let i = 0; i < circles_diameter.length; i++) {
    if (isInside(mouseX, mouseY, i)) {
      circles_diameter.splice(i, 1);
      circles_x.splice(i, 1);
      circles_y.splice(i, 1);
      points++;
    }
  }
}

function addRandomCircle() {
  circles_diameter.push(random(10, 50));
  circles_x.push(random(width));
  circles_y.push(random(height));
}

function isInside(x: number, y: number, circle_index: number): boolean {
  const distance_x = x - circles_x[circle_index];
  const distance_y = y - circles_y[circle_index];
  const distance = Math.sqrt(distance_x * distance_x + distance_y * distance_y);
  return distance < circles_diameter[circle_index] / 2;
}
// <<< Add functions here
