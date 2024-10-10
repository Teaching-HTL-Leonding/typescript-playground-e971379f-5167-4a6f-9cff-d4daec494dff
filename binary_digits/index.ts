function setup() {
  const num = Math.floor(random(0, 64));

  // Add the necessary code here
  createCanvas(400, 200);
  background("black");

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(15);
  text(num, width / 2, height - 20);

  noFill();
  stroke("yellow");
  rect(width / 13, height / 3, width / 12, height / 4);
  rect(3 * width / 13, height / 3, width / 12, height / 4);
  rect(5 * width / 13, height / 3, width / 12, height / 4);
  rect(7 * width / 13, height / 3, width / 12, height / 4);
  rect(9 * width / 13, height / 3, width / 12, height / 4);
  rect(11 * width / 13, height / 3, width / 12, height / 4);

  const lastDigit = num % 2;
  const numWithoutLastDigit = Math.floor(num / 10);
  const numWithout2 = Math.floor(num / 2 % 2);
  const numWo3 = Math.floor(num / 2 / 2 % 2);
  const numWo4 = Math.floor(num / 2 / 2 / 2 % 2);
  const numWo5 = Math.floor(num / 2 / 2 / 2 / 2 % 2);
  const firstdd = Math.floor(num / 2 / 2 / 2 / 2 / 2 % 2);

  noStroke();
  fill("yellow");
  textSize(25);
  textAlign(CENTER, CENTER);
  text(lastDigit, 11.5 * width / 13, height / 2 - 7);
  text(numWithout2, 9.5 * width / 13, height / 2 - 7);
  text(numWo3, 7.5 * width / 13, height / 2 - 7);
  text(numWo4, 5.5 * width / 13, height / 2 - 7);
  text(numWo5, 3.5 * width / 13, height / 2 - 7);
  text(firstdd, 1.5 * width / 13, height / 2 - 7);
}

function mouseClicked() {
  
  const num = Math.floor(random(0, 64));

  // Add the necessary code here
  createCanvas(400, 200);
  background("black");
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(15);
  text(num, width / 2, height - 20);

  noFill();
  stroke("yellow");
  rect(width / 13, height / 3, width / 12, height / 4);
  rect(3 * width / 13, height / 3, width / 12, height / 4);
  rect(5 * width / 13, height / 3, width / 12, height / 4);
  rect(7 * width / 13, height / 3, width / 12, height / 4);
  rect(9 * width / 13, height / 3, width / 12, height / 4);
  rect(11 * width / 13, height / 3, width / 12, height / 4);

  const lastDigit = num % 2;
  const numWithoutLastDigit = Math.floor(num / 10);
  const numWithout2 = Math.floor(num / 2 % 2);
  const numWo3 = Math.floor(num / 2 / 2 % 2);
  const numWo4 = Math.floor(num / 2 / 2 / 2 % 2);
  const numWo5 = Math.floor(num / 2 / 2 / 2 / 2 % 2);
  const firstdd = Math.floor(num / 2 / 2 / 2 / 2 / 2 % 2);

  noStroke();
  fill("yellow");
  textSize(25);
  textAlign(CENTER, CENTER);
  text(lastDigit, 11.5 * width / 13, height / 2 - 7);
  text(numWithout2, 9.5 * width / 13, height / 2 - 7);
  text(numWo3, 7.5 * width / 13, height / 2 - 7);
  text(numWo4, 5.5 * width / 13, height / 2 - 7);
  text(numWo5, 3.5 * width / 13, height / 2 - 7);
  text(firstdd, 1.5 * width / 13, height / 2 - 7);
}
