function setup() {
  createCanvas(400, 400);
  background("black");
  noFill();
  stroke("yellow");
  rect(width / 7, height / 5, width / 6, height / 4);
  rect(3 * width / 7, height / 5, width / 6, height / 4);
  rect(5 * width / 7, height / 5, width / 6, height / 4);

  const num = Math.floor(random(0, 4096));

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(25);
  text(num, width / 2, height - 40);

  let lastDigit :any = Math.floor(num % 16);
  let numwo2 :any = Math.floor(num / 16 % 16);
  let numwo3 :any= Math.floor(num / 16 / 16 % 16);

  if (numwo3 === 10) {
    numwo3 = "A";
  }
  else if (numwo3 === 11) {
    numwo3 = "B";
  }
  else if (numwo3 === 12) {
    numwo3 = "C";
  }
  else if (numwo3 === 13) {
    numwo3 = "D";
  }
  else if (numwo3 === 14) {
    numwo3 = "E";
  }
  else if (numwo3 === 15) {
    numwo3 = "F";
  }
  if (numwo2 === 10) {
    numwo2 = "A";
  }
  else if (numwo2 === 11) {
    numwo2 = "B";
  }
  else if (numwo2 === 12) {
    numwo2 = "C";
  }
  else if (numwo2 === 13) {
    numwo2 = "D";
  }
  else if (numwo2 === 14) {
    numwo2 = "E";
  }
  else if (numwo2 === 15) {
    numwo2 = "F";
  }

  if (lastDigit === 10) {
   lastDigit = "A";
  }
 else if (lastDigit === 11) {
   lastDigit = "B";
  }
 else if (lastDigit === 12) {
   lastDigit = "C";
  }
 else if (lastDigit === 13) {
   lastDigit = "D";
  }
 else if (lastDigit === 14) {
   lastDigit = "E";
  }
 else if (lastDigit === 15) {
   lastDigit = "F";
  }

  textSize(50);
  textAlign(CENTER, CENTER);
  text(lastDigit, 5.5 * width / 7, height / 3);
  text(numwo2, 3.5 * width / 7, height / 3);
  text(numwo3, 1.5 * width / 7, height / 3);
}
