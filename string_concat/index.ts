function setup() {
  createCanvas(200, 200);
  background("lightblue");

}

//TODO: Create variable for storing current mouse position
let globalVar :string = "";

function mouseClicked() {
  background("lightblue");

  noStroke();
  fill("cyan");
  circle(mouseX, mouseY, 10);

  globalVar= globalVar + ", "+`${Math.round (mouseX)}/${Math.round (mouseY)}`


  fill("black");
    text(globalVar, 10, 10, 100, 100);


}