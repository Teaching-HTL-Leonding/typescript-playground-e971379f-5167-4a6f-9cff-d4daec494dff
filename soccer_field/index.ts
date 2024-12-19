// It must be possible to scale the entire field by changing the value of the constant SCALE.
// E.g. a SCALE value of 2 will create a small image, while a SCALE value of 10 will create a large image.
const SCALE = 5;

// Margin around the field (i.e. distance from edge to the field)
const MARGIN = 4;

// Player numbers
const playerNumbers: number[] = [1, 17, 22, 23, 20, 6, 15, 5, 11, 7, 9];

// First names
const firstNames: string[] = [
  "Thibaut", "Lucas", "Antonio", "Ferland", "Fran",
  "Eduardo", "Federico", "Jude", "Rodrygo", "Vinícius", "Kylian"
];

// Last names
const lastNames: string[] = [
  "Courtois", "Vázquez", "Rüdiger", "Mendy", "García",
  "Camavinga", "Valverde", "Bellingham", "Goes", "Júnior", "Mbappé"
];

function setup() {
  createCanvas((100 + MARGIN * 2) * SCALE, (70 + MARGIN * 2) * SCALE);
  background("green");

  strokeWeight(0.5);
  stroke("white");
  noFill();
  angleMode(DEGREES);

  push();

  // Note that we scale everything by the constant SCALE. We use the size values
  // in meters as if they were pixels, and then scale them up by the SCALE factor.
  scale(SCALE);
  translate(MARGIN, MARGIN);

  // Field (100x70m)
  rect(0, 0, 100, 70);
  rect(0, 14.84, 16.5, 40.32);
  rect(0, 25.84, 5.5, 18.32);
  rect(-3, 31.34, 3, 7.32);
  arc(16.5, 35, 9.15, 18.32, 270, 90);
  circle(50, 35, 18.3);
  line(50, 0, 50, 70);
  rect(100 - 16.5, 14.84, 16.5, 40.32);
  rect(100 - 5.5, 25.84, 5.5, 18.32);
  rect(100, 31.34, 3, 7.32);

  // <<< Add your code to draw the rest if the soccer field here

  // Draw a semi-transparent rectangle as a background for the player names and numbers
  // NEW: Note that the color value has EIGHT hex digits, not six.
  // The last two digits represent the alpha value (transparency).
  // The hex value d0 (208 in decimal) is 80% opaque.
  fill("#008000d0");
  noStroke();
  rect(10, 5, 80, 60);

  textSize(4);
  for (let i = 0; i < playerNumbers.length; i++) {
  fill("orange");
  textAlign(RIGHT);
    translate(0, 5);
    text(playerNumbers[i], 30, 8);
    fill("yellow");
    textAlign(LEFT);
    text(firstNames[i] + " " + lastNames[i], 35, 8);
 

  }

  // <<< Add your code to draw the player numbers and names here

  pop();
}
