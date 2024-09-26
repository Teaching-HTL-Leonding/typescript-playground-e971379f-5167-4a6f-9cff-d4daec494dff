//TODO: Create variable for storing current mouse position
const str1 : string = `${Math.round (mouseX)}/${Math.round (mouseY)}`;

// @ts-ignore
declare global {
    interface Window {
        myGlobalVar: number;
    }
}
// @ts-ignore
window.myGlobalVar = 10;

function setup() {
  createCanvas(200, 200);
  background("lightblue");

}

function mouseClicked() {
  background("lightblue");

  noStroke();
  fill("cyan");
  circle(mouseX, mouseY, 10);
  
  const position =`${Math.round (mouseX)}/${Math.round (mouseY)}`;
  // globalVar = "," + position;
  console.log(str1)

  fill("black");
  // @ts-ignore
    text(window.myGlobalVar, 10, 10, 100, 100);


}