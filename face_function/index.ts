let i = 1;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(true);
}

// Function DEFINITION
//       +-------------------------- Function name
//       |     +-------------------- Parameter name
//       |     |      +------------- Parameter type
//       v     v      v
function smile(happy: boolean) {
  let x = random(0, width);
  let y = random(0, width);
  let diameter = 90;
  stroke("black");
  strokeWeight(2);

  if (happy == true) {
    fill("yellow");
    circle(x, y, diameter);
    fill("black");
    circle(x - diameter / 5, y - diameter / 5, 4);
    circle(x + diameter / 5, y - diameter / 5, 4);
    noFill();
    arc(x, y, diameter / 1.5, diameter / 2, 0, 180);
  } else {
    fill("lime");
    circle(x, y, diameter);
    fill("black");
    circle(x - diameter / 5, y - diameter / 5, 4);
    circle(x + diameter / 5, y - diameter / 5, 4);
    noFill();
    arc(x, y + diameter / 4, diameter / 1.5, diameter / 2, 180, 360);
  }

}

function mouseClicked() {
  if (i % 2 === 1) {
    smile(false);
  } else if (i % 2 === 0) {
    smile(true);
  }
  i++;
}