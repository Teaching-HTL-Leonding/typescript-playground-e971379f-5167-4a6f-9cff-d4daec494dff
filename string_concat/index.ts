function setup() {
  createCanvas(200, 200);
  background("lightblue");

}

let globalVar :string = "";

function mouseClicked() {
  background("lightblue");

  noStroke();
  fill("cyan");
  circle(mouseX, mouseY, 10);

  globalVar= globalVar + ", "+`${Math.round (mouseX)}/${Math.round (mouseY)}`


  fill("black");
    text(globalVar, 10, 10, 200, 200);


}