let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

  noFill();
  stroke("yellow");
  rect(width / 9, height / 3, width / 9, height / 4);
  rect(3 * width / 9, height / 3, width / 9, height / 4);
  rect(5 * width / 9, height / 3, width / 9, height / 4);
  rect(7 * width / 9, height / 3, width / 9, height / 4);

  fill("yellow");
  noStroke();
  textAlign(CENTER);
  textSize(30);
  text(`${num} in binary?`, width / 2, height / 5);

  text(0, 1.5 * width / 9, height / 2 - 7);
  text(0, 3.5 * width / 9, height / 2 - 7);
  text(0, 7.5 * width / 9, height / 2 - 7);
  text(0, 5.5 * width / 9, height / 2 - 7);
}

let last = 0;
let third = 0;
let secondn = 0;
let first = 0;

function mouseClicked() {

  fill("black"); stroke("yellow");
  rect(width / 9, height / 3, width / 9, height / 4);
  rect(3 * width / 9, height / 3, width / 9, height / 4);
  rect(5 * width / 9, height / 3, width / 9, height / 4);
  rect(7 * width / 9, height / 3, width / 9, height / 4);

  fill("yellow");
  if (mouseX > width / 9 && mouseX < 2 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
    first = (first + 1) % 2;;
  }
  else if (mouseX > 3 * width / 9 && mouseX < 4 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
    secondn = (secondn + 1) % 2;
  }
  else if (mouseX > 5 * width / 9 && mouseX < 6 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
    third = (third + 1) % 2;
  }
  else if (mouseX > 7 * width / 9 && mouseX < 8 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
    last = (last + 1) % 2;
  }


  const correctn = first * Math.pow(2, 3) + secondn * Math.pow(2, 2)
    + third * Math.pow(2, 1) + last * Math.pow(2, 0);
  if (correctn === num) {
    noStroke();
    fill("lime");
    textAlign(CENTER);
    text("Correct!", width / 2, height / 4 * 3);

    fill("black"); stroke("lime");
    rect(width / 9, height / 3, width / 9, height / 4);
    rect(3 * width / 9, height / 3, width / 9, height / 4);
    rect(5 * width / 9, height / 3, width / 9, height / 4);
    rect(7 * width / 9, height / 3, width / 9, height / 4);
    fill("lime");
  } else {
    stroke("black");
    fill("black");
    textAlign(CENTER);
    text("Correct!", width / 2, height / 4 * 3);

    fill("yellow")
  }

  text(`${first}`, 1.5 * width / 9, height / 2 - 7);
  text(`${secondn}`, 3.5 * width / 9, height / 2 - 7);
  text(`${third}`, 5.5 * width / 9, height / 2 - 7);
  text(`${last}`, 7.5 * width / 9, height / 2 - 7);
}



/*
function mouseClicked() {
  let message: string;
  if (mouseX > width / 9 && mouseX < 3 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
    message = "1";
  }
  else if (mouseX > 3 * width / 9 && mouseX < 4 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
    message = "2";
  }
  else if (mouseX > 5 * width / 9 && mouseX < 6 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
    message = "3";
  }
  else if (mouseX > 7 * width / 9 && mouseX < 8 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
    message = "4";
  }
  else {
    message = "";
  }
  fill("white");
  textSize(30);
  textAlign(CENTER, CENTER);
  text(`${message}`, width / 2, height / 2)
}*/



