function setup() {
  createCanvas(200, 200);
  background("lightblue");

}

//TODO: Create variable for storing current mouse position
const str1 : string = `${Math.round (mouseX)}/${Math.round (mouseY)}`

//

function mouseClicked() {
  background("lightblue");

  noStroke();
  fill("cyan");
  circle(mouseX, mouseY, 10);

  fill("black");
    text(`${Math.round (mouseX)}/${Math.round (mouseY)}`, 10, 10, 100, 100);


}