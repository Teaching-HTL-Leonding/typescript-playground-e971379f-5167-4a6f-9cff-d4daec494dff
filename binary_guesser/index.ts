let num :any = 0;

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



function mouseClicked() {
let lastn :any = 0;
let slastn :any = 0;
let sn :any = 0;
let firstn :any = 0;

  if (mouseX > width / 9 && mouseX < 3 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
  fill("black"); stroke ("yellow");
  rect(width / 9, height / 3, width / 9, height / 4);
  fill("yellow");
   lastn ="1";
    text(`${lastn}`, 1.5 * width / 9, height / 2 - 7);
  }
  else if (mouseX > 3 * width / 9 && mouseX < 4 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
  fill("black"); stroke ("yellow");
  rect(3 * width / 9, height / 3, width / 9, height / 4);
  fill("yellow");
   slastn = "1";
    text(`${slastn}`, 3.5 * width / 9, height / 2 - 7);
  }
  else if (mouseX > 5 * width / 9 && mouseX < 6 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
  fill("black"); stroke ("yellow");
  rect(5 * width / 9, height / 3, width / 9, height / 4);
  fill("yellow");
   sn ="1";
    text(`${sn}`, 5.5 * width / 9, height / 2 - 7);
  }
  else if (mouseX > 7 * width / 9 && mouseX < 8 * width / 9 && mouseY > height / 3 && mouseY < height / 3 + height / 4) {
  fill("black"); stroke ("yellow");
  rect(7 * width / 9, height / 3, width / 9, height / 4);
  fill("yellow");
   firstn = "1"
    text(`${firstn}`, 7.5 * width / 9, height / 2 - 7);
  }

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




