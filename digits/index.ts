function setup() {
  const num = Math.floor(random(0, 1_000_000));

  // Add the necessary code here
  createCanvas(400, 200);
  background("black");
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  noFill();
  stroke("yellow");
  rect(width / 13, height / 3, width / 12, height / 4);
  rect(3 * width / 13, height / 3, width / 12, height / 4);
  rect(5 * width / 13, height / 3, width / 12, height / 4);
  rect(7 * width / 13, height / 3, width / 12, height / 4);
  rect(9 * width / 13, height / 3, width / 12, height / 4);
  rect(11 * width / 13, height / 3, width / 12, height / 4);

  const lastDigit = num % 10;
  const numWithoutLastDigit = Math.floor(num / 10);
  const lastDigit2 = num % 100;
  const numWithout2 = Math.floor(lastDigit2 / 10);
  const lastDigit3 = num % 1000;
  const numWo3 = Math.floor(lastDigit3 / 100);
  const lastDigit4 = num % 10000;
  const numWo4 = Math.floor(lastDigit4 / 1000);
  const lastDigit5 = num % 100000;
  const numWo5 = Math.floor(lastDigit5 / 10000);
  const firstd = num % 1000000;
  const firstdd = Math.floor(firstd / 100000);

  noFill();
  textAlign(CENTER, CENTER);
  text(lastDigit, 11.5 * width / 13, height / 2 - 7);
  text(numWithout2, 9.5 * width / 13, height / 2 - 7);
  text(numWo3, 7.5 * width / 13, height / 2 - 7);
  text(numWo4, 5.5 * width / 13, height / 2 - 7);
  text(numWo5, 3.5 * width / 13, height / 2 - 7);
  text(firstdd, 1.5 * width / 13, height / 2 - 7);
}
