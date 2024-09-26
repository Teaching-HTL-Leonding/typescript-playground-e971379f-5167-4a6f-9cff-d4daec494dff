function setup() {
  createCanvas(200, 200);
  background("lightblue");

}

let clickprotocol : string = `${Math.round (mouseX)}/${Math.round (mouseY)}`

function mouseClicked() {
  background("lightblue");

  noStroke();
  fill("cyan");
  circle(mouseX, mouseY, 10);

  fill("black");
  text(clickprotocol, 10, 10, 100, 100);


}
