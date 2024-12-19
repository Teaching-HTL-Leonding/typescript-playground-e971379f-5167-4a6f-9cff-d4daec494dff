const circlesCenterX: number[] = []; // x coordinates of circles
const circlesCenterY: number[] = []; // y coordinates of circles
const circlesDiameter: number[] = []; // Diameter of each circle
const circlesFill: string[] = []; // fill color of each circle
let nextCircle = 0;           // timestamp for when to create new circle
const maxDiameter = 150;        // maximum diameter for any circle

//array of colors to randomly choose from
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
  //check if its time to create a new circle
  // new: use millis() to get the number of milliseconds since the program started

  if(millis() >= nextCircle){
    //generate random properties for new circle
    const d = random(10, maxDiameter); // random diameter between 10 and maxdiameter

    // NOTE: use push() to add new elements to the END of an array
    //store the diameter
    circlesDiameter.push(d);

    //store random X and Y positions, keeping a random element of an array
    circlesCenterX.push(random(d / 2, width - d / 2));
    circlesCenterY.push(random(d / 2, height - d / 2));

    //random color from available colors
    // NEW: with _random(myArray)_, you can pick a random element of an array
    //      here, we are picking a random color
    circlesFill.push(random(availableColors));

    //set next circle creation time to between 0.5 and 2 seconds from now
    nextCircle = millis() + random(500, 2000);
  }

  //draw all circles stored in the arrays
  noStroke();
  for (let i = 0; i < circlesDiameter.length; i++) {
    fill(circlesFill[i]); // set the fill color for current circle
    circle(circlesCenterX[i], circlesCenterY[i], circlesDiameter[i]); // draw the circle
  }
}
