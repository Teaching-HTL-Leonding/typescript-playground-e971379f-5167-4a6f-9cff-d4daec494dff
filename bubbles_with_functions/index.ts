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
  circle_interval = setInterval(addRandomCircle, waiting_time);
  level_interval = setInterval(levels, 10000);
}

function draw() {
  background("black");
  fill("skyblue");
  for (let i = 0; i < circles_diameter.length; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i]);
  }
  fill("white");
  noStroke();
  textAlign(LEFT, TOP);
  textSize(10);
  text(`Score: ${points}`, 10, 10);

  if(circles_diameter.length >=10){
    gameover();
  }
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
function gameover() {
  clearInterval(circle_interval);
  clearInterval(level_interval);
  fill("#272727");
  rect(50, 50, width-100, height-100);
  textAlign(CENTER,CENTER);
  fill("white");
  noStroke();
  textSize(35);
  text("✨", width/2, height/2-40);
  textSize(25);
  text("GAME OVER", width/2, height/2);
  textSize(20);
  text(`Final score: ${points}`, width/2, height/2 + 30);
}

function levels() {
  clearInterval(circle_interval);
  waiting_time/= 2;
  circle_interval = setInterval(addRandomCircle, waiting_time);
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
