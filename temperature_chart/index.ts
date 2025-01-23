const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];

const MONTHS: string[] = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function setup() {
  createCanvas(460, 300);
  // <<< Call the functions in the following order:
  drawTemperatures(AVG_TEMP_JOHANNESBURG);
  drawAxes();
  drawYLabels();
  drawXLabels();
  // 1. Draw temperatures (gets AVG_TEMP_LINZ or AVG_TEMP_JOHANNESBURG as parameter)
  // 2. Draw axes
  // 3. Draw Y labels
  // 4. Draw X labels
}

function drawAxes() {
  strokeWeight(2);
  stroke("black");
  line(30, 25, 30, 225);
  line(30, 200, 30 * 13, 200);
  // <<< Add code to draw X and Y axes here
}

function drawYLabels() {
  textAlign(RIGHT, CENTER);
  textSize(11);
  for (let i = 1, num = 35; i <= 9; i++, num -= 5) {
    strokeWeight(2);
    line(25, 25 * i, 35, 25 * i);
    strokeWeight(0.1);
    text(num, 20, 25 * i);
  }
  // <<< Add code to draw labels for the Y axis here
}

function drawXLabels() {
  for (let i = 0; i <= 13; i++) {
    if (i > 1) {
      strokeWeight(2);
      line(30 * i, 195, 30 * i, 205);
    }
    textAlign(CENTER, CENTER);
    textSize(9);
    strokeWeight(0.1);
    text(MONTHS[i], 45 + 30 * i, 190);
  }
  // <<< Add code to draw labels for the X axis here
}

function drawTemperatures(temperatures: number[]) {
  push();
  for (let i = 0; i <= 12; i++) {
    fill("orange");
    noStroke();
    rect(35 + 30 * i, 200, 20, -temperatures[i] * 5);
  }

  pop();
  // <<< Add code to draw the temperatures here
}
